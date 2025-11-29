'use client';

import { logout } from "@lib/auth"; 
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const AdminLeftMenu = ({flag}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeParentOrder, setActiveParentOrder] = useState(null);
  const [activeSubHref, setActiveSubHref] = useState(null);

  const [AdminMenuData] = useState([
    {
      name: 'General', href: '', order: "0",
      submenu: [
        { name: 'Order Management', href: 'order-management', order: "0.1" },
        { name: 'Careers', href: 'careers', order: "0.2" },
        { name: 'Contact Enquiries', href: 'enquiries', order: "0.2" },
        { name: 'Dealerships', href: 'dealerships', order: "0.2" },
      ]
    },
    {
        name: 'E-learning', href: "", order: "1",
      submenu: [
        { name: 'Add E-learning', href: 'add-e-learning', order: "1.0" },
        { name: 'View E-learning', href: 'view-e-learning', order: "1.1" }
      ]
      },
      {
      name: 'Brochure', href: "", order: "2",
      submenu: [
        { name: 'Add Brochure', href: 'add-brochure', order: "2.0" },
        { name: 'View Brochure', href: 'view-brochure', order: "2.1" }
      ]
    },
    {
      name: 'Products', href: "", order: "3",
      submenu: [
        { name: 'Add Category', href: 'add-category', order: "3.0" },
        { name: 'View Category', href: 'view-category', order: "3.1" },
        { name: 'Add Product', href: 'add-product', order: "3.2" },
        { name: 'View Product', href: 'view-product', order: "3.3" } 
      ]
    },
    {
      name: 'Events', href: "", order: "4",
      submenu: [
        { name: 'Add Events', href: 'add-events', order: "4.0" },
        { name: 'View Events', href: 'view-events', order: "4.1" }
      ]
    }
  ]);


  const findActiveMenuByPath = (menuData, path) => {
    let parentOrder = null;
    let subHref = null;
    
  
    const actualUrl = path.split('/admin/pages/')[1] || '';

    for (const menu of menuData) {
      if (menu.submenu) {
        for (const sub of menu.submenu) {
          if (sub.href && actualUrl === sub.href) {
            parentOrder = menu.order; 
            subHref = sub.href;
            return { parentOrder, subHref };
          }
        }
      }
     
      if (menu.href && actualUrl === menu.href) {
         parentOrder = menu.order;
         subHref = menu.href;
         return { parentOrder, subHref };
      }
    }
    

    
    return { parentOrder: null, subHref: null };
  };

  useEffect(() => {
    const { parentOrder, subHref } = findActiveMenuByPath(AdminMenuData, pathname);
    setActiveParentOrder(parentOrder);
    setActiveSubHref(subHref);

  }, [pathname, AdminMenuData]);


  const parentMenuClick = (order) => {
    if (order === activeParentOrder) {
      setActiveParentOrder(null);
    } else {
      setActiveParentOrder(order);
    }
  };

  const subMenuClick = (e, order, href) => {
    e.stopPropagation(); 
   
    setActiveParentOrder(order?.split(".")[0]); 
    setActiveSubHref(href);
    
    if (href) {
      const baseUrl = '/' ||''; 
      router.push(`/admin/pages/${href}`); 
    }
  };




  return (
    // <>
    //   <div className="cssmenuad">
    //     <ul>
    //       {AdminMenuData.map((val, index) => (
    //         <li 
    //           key={index} 
    //           onClick={() => parentMenuClick(val.order)} 
    //           className={`${val?.submenu ? "has-sub" : ""} ${val.order === activeParentOrder ? "open" : ""}`}
    //         >
    //           <a>{val.name}</a>
    //           {val?.submenu && (
    //             <ul className={val.order === activeParentOrder ? "open" : ""}>
    //               {val.submenu.map((sub, subIndex) => (
    //                 <li key={subIndex} onClick={(e) => subMenuClick(e, sub.order, sub.href)}>
    //                   <a className={activeSubHref === sub.href ? "active" : ""}>
    //                       {sub.name}
    //                   </a>
    //                 </li>
    //               ))}
    //             </ul>
    //           )}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className="adminlgout">
    //     <a href=":" onClick={handleLogoutClick}>Logout</a>
    //   </div>
    // </>
    <>
      <aside className={(flag)?"sidebar open":"sidebar"}>
            <nav className="menu">
              <ul>
                {AdminMenuData.map((val, index) => (
                <li key={index} 
                    onClick={() => parentMenuClick(val.order)} 
                    className={`${val?.submenu ? "has-sub" : ""} ${val.order === activeParentOrder ? "open" : ""}`}
                    >
                  <a>{val.name}</a>
                  {val?.submenu && (
                    <ul className={val.order === activeParentOrder ? "admin-submenu open" : "admin-submenu"}>
                        {val.submenu.map((sub, subIndex) => (
                        <li key={subIndex} onClick={(e) => subMenuClick(e, sub.order, sub.href)}>
                              <a className={activeSubHref === sub.href ? "active" : ""}>
                                {sub.name}
                          </a>
                          </li>
                        ))}
                    </ul>
                      )}
                </li>
                  ))}
              </ul>
            </nav>
        </aside>
    </>
  );
};

export default AdminLeftMenu;