"use client"
import Link from "next/link";
import Tableloader from "@functions/tableloader";
import { useState,useEffect } from "react";
import DataTable from "react-data-table-component";
import { format } from "date-fns";
const viewEventsPage = () => {
  const [columns, setColumns] = useState([]);
  const [GridData, setGridData] = useState([]);
  const [loader, setLoader] = useState(true);

    useEffect(() => {
        GetGridData();
    }, []);

    async function GetGridData() {
        setLoader(true);
        const formData = new FormData();
        formData.append('switchOption', 'ManageEvents');
        formData.append('option', 'selectall');

        try {
            const response = await fetch(`/api/events`, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.resData && data.resData.length > 0) {
                setGridData(data.resData[0]);
                createColumns(data.resData);
            } else {
                setGridData([]);
                setColumns([]);
            }
        } catch (error) {
            setGridData([]);
            setColumns([]);
        } finally {
            setLoader(false);
        }
    }

    const createColumns = (data) => {
        if (!data || data.length === 0) return;

        const newColumns = [
            {
                name: "Event",
                selector: row => row.event_heading,
                width: '10%',
                wrap: true
            },
               {
                name: "Date",
                selector: row => row?.event_date?format(row?.event_date,'dd-MMM-yyyy'):'NA',
                width: '10%',
                wrap: true
            },
            {
                name: "Time",
                selector: row => row.event_time,
                width: '10%',
                wrap: true
            },
            {
                name: "Place",
                selector: row => row.place,
                width: '15%',
                wrap: true
            },
            {
                name: "Description",
                selector: row => row.description,
                width: '25%',
                wrap: true,
                 cell: row => (
                  <div className="scrolldiv">
                      {row.description}
                  </div>
               ),
            },
            {
                name: "Image",
                center: "true",
                width: "14%",
                cell: row => (
                    row.image_file_path ? (
                        <a
                            href={`/files/events/${row.image_file_path}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="iconEye" title="View"></i>
                        </a>
                    ) : (
                        <i
                            className="iconEye not"
                            title="No file available"
                            style={{ cursor: "not-allowed", pointerEvents: "none" }}
                        ></i>
                    )
                )
            },
            {
                name: "Status",
                center: "true",
                width: "8%",
                cell: row => (
                    <a role="button" onClick={() => GridRow_Active(row.srno, row.active)}>
                        <i className={row.Active === 1 ? 'iconActive' : 'iconActive not'}
                            title={row.Active === 1 ? 'Active' : 'Inactive'}></i>
                    </a>
                )
            },
            {
                name: 'Action',
                center: "true",
                width: "8%",
                cell: row => (
                    <>
                        <a className="m-1" href={`${process.env.NEXT_PUBLIC_ACCURL}/admin/pages/add-evetns?ID=${row.srno}`}>
                            <i className="iconEdit" title="Edit"></i>
                        </a>
                        <a className="m-1" role="button" onClick={() => GridRow_Delete(row.srno)}>
                            <i className="iconDelete" title="Delete"></i>
                        </a>
                    </>
                ),
            }
        ];

        setColumns(newColumns);
    };
        const GridRow_Delete = (ID) => {
        if (confirm('Are you sure you want to delete this event?') === true) {
            const formData = new FormData();
            formData.append('switchOption', 'MangeEvents');
            formData.append('option', 'delete');
            formData.append('ID', ID);

            fetch(`${process.env.NEXT_PUBLIC_ACCURL}/api/admin`, {
                method: 'POST',
                body: formData
            }).then(res => res.json())
                .then(data => {
                    if (data.resData === 'success') {
                        alert("Deleted Successfully");
                        GetGridData();
                    }
                })
                .catch(error => {
                    console.error("Error deleting IPO detail:", error);
                    alert("Failed to delete. Please try again.");
                });
        }
    }

    const GridRow_Active = (ID, Active) => {
        const newActive = Active === 1 ? 0 : 1;
        const formData = new FormData();
        formData.append('switchOption', 'MangeEvents');
        formData.append('option', 'updatestatus');
        formData.append('ID', ID);
        formData.append('Active', newActive);

        fetch(`${process.env.NEXT_PUBLIC_ACCURL}/api/admin`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                if (data.resData === 'success') {
                    GetGridData();
                }
            })
            .catch(error => {
                console.error("Error updating status:", error);
                alert("Failed to update status. Please try again.");
            });
    }
  return (
      <div className="adminCmnWrap">
            <div className="admnHead"><h2>View Events</h2> <Link href={"/admin/pages/add-events"}>Add Data</Link></div>

             <div className="AdminDataTbl">
                    <div className="row">
                        <div className="col-lg-12">
                            {
                                loader ? (
                                    <Tableloader rows={20} columns={8} />
                                ) : (
                                    (Array.isArray(GridData) && GridData?.length > 0)
                                        ? <DataTable
                                            columns={columns}
                                            data={GridData}
                                            noDataComponent="No Data Found."
                                            pagination="true"
                                        />
                                        : <DataTable noDataComponent="No Data Found." />
                                )}
                        </div>
                    </div>
              </div>
      </div>
  )
}

export default viewEventsPage