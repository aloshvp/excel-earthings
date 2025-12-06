"use client";
import Link from "next/link";
import Tableloader from "@functions/tableloader";
import { useState, useEffect, useCallback } from "react";
import DataTable from "react-data-table-component";
import { format } from "date-fns";
import { alert as customAlert } from "@functions/alertmessage"; 

const VIEW_API_URL = `/api/events`;

const ViewEventsPage = () => { 
const [columns, setColumns] = useState([]);
const [gridData, setGridData] = useState([]); 
const [loader, setLoader] = useState(true);


  const getGridData = useCallback(async () => {
    setLoader(true);
    

    const payload = {
      switchOption: 'ManageEvents',
      option: 'selectall',
    };
    
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value);
    });

    try {
      const response = await fetch(VIEW_API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const finalData = data.resData && Array.isArray(data.resData) ? data.resData : [];
      if (finalData.length > 0) {
        setGridData(finalData[0]);
        createColumns(finalData[0]);
      } else {
        setGridData([]);
        setColumns([]);
      }
    } catch (error) {
        console.error("Error fetching event data:", error);
        customAlert("Failed to load events. Please try again.", "error"); 
        setGridData([]);
        setColumns([]);
    } finally {
      setLoader(false);
    }
  }, []); 

  
  useEffect(() => {
    getGridData();
  }, [getGridData]); 


  const createColumns = (data) => {
    if (!data || data.length === 0) return;

    const newColumns = [
        { name: "Event", selector: row => row.event_heading, width: '10%', wrap: true },
        { 
            name: "Date",
            selector: row => row.event_date ? format(new Date(row.event_date), 'dd-MMM-yyyy') : 'NA',
            width: '10%', 
            wrap: true 
        },
        { name: "Time", selector: row => row.event_time, width: '10%', wrap: true },
        { name: "Place", selector: row => row.place, width: '15%', wrap: true },
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
                <a role="button" onClick={() => gridRow_Active(row.srno, row.active)}>
                    <i className={row.active === 1 ? 'iconActive' : 'iconActive not'}
                        title={row.active === 1 ? 'Active' : 'Inactive'}></i>
                </a>
            )
        },
        {
            name: 'Action',
            center: "true",
            width: "8%",
            cell: row => (
                <>
                    <Link className="m-1" href={`/admin/pages/add-events?ID=${row.srno}`}>
                        <i className="iconEdit" title="Edit"></i>
                    </Link>
                    <a className="m-1" role="button" onClick={() => gridRow_Delete(row.srno)}>
                        <i className="iconDelete" title="Delete"></i>
                    </a>
                </>
            ),
        }
    ];
    setColumns(newColumns);
  };


  const gridRow_Delete = async (srno) => {
    const isConfirm = confirm('Are you sure you want to delete this event?') === true;

    if (isConfirm) {
      const formData = new FormData();
      formData.append('switchOption', 'ManageEvents');
      formData.append('option', 'delete');
      formData.append('srno', srno);

      try {
        const response = await fetch(VIEW_API_URL, {
          method: 'POST',
          body: formData
        });
        const data = await response.json();

        if (data.resData === 'success') {
          customAlert("Deleted Successfully", "success");
          getGridData(); 
        } else {
          customAlert(data.message || "Failed to delete event.", "error");
        }
      } catch (error) {
        console.error("Error deleting event:", error);
        customAlert("Failed to delete. Please try again.", "error");
      }
    }
  };


  const gridRow_Active = async (srno, active) => {
    const newActive = active === 1 ? 0 : 1; 
    
    const formData = new FormData();
    formData.append('switchOption', 'ManageEvents');
    formData.append('option', 'updatestatus');
    formData.append('srno', srno);
    formData.append('active', newActive); 

    try {
      const response = await fetch(VIEW_API_URL, {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      if (data.resData === 'success') {
        getGridData(); 
      } else {
       // customAlert(data.message || "Failed to update status.", "error");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      customAlert("Failed to update status. Please try again.", "error");
    }
  };


  return (
    <div className="adminCmnWrap">
      <div className="admnHead">
        <h2>View Events</h2> 
        <Link href={"/admin/pages/add-events"}>ADD DATA</Link>
      </div>
      <div className="AdminDataTbl">
            {
                loader ? (
                    <Tableloader rows={10} columns={8} />
                ) : (
                    (Array.isArray(gridData) && gridData?.length > 0)
                        ? <DataTable
                            columns={columns}
                            data={gridData}
                            noDataComponent="No Data Found."
                            pagination
                        />
                        : <DataTable noDataComponent="No Data Found." />
                )}
      </div>
    </div>
  );
};

export default ViewEventsPage;