'use client';
import '@styles/admin.css';
import AdminLeftMenu from './AdminLeftMenu';
import { usePathname,useRouter } from 'next/navigation';
import { useState } from 'react';
import { logout } from '@lib/auth';

const AdminMaster = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const isWelcomePage = pathname.toLowerCase() === '/admin/pages/welcome';
    const [openClose,setOpenClose]=useState(true);

    const handleLogoutClick = async (e) => {
        e.preventDefault();
        await logout();
        alert('Logged Out!');
        router.push('/admin/login');
    };
    return (
        // <div className={openClose?"adminwrapper":"adminwrapper closewrp"}>
        //     <div className="header">
        //         <div className="adminHeadCnt">
        //             <div className='headImg'>
        //                 <div>
        //                     <Image
        //                         src={'/images/log.png'}
        //                         alt={websiteName}
        //                         title={websiteName}
        //                         width={220}
        //                         height={77}
        //                         className="img-fluid"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="head"><p>ADMIN CONSOLE</p></div>
        //         </div>
        //         <AdminLeftMenu />
        //         <em className="admnclose" onClick={()=>setOpenClose(!openClose)}></em>
        //     </div>
        //     <div className="admindatasecwrap">
        //         <div className="adminbody">
        //             <div className="container-fluid">
        //                 <div className="row">
        //                     <div className="col-md-12">
        //                         <div className={isWelcomePage ? 'rghtcnt wlcomecontent' : 'rghtcnt'}>
        //                             {children}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <header className="header">
                <div className="header-left">
                    <h1>Admin Dashboard</h1>
                </div>
                <div className="header-right">
                    <div className="user-profile">
                        <div className="user-icon">U</div> 
                        
                        <div className="logout-menu">
                            <a href="#profile">Profile</a>
                            <a href="#settings">Settings</a>
                            <a href=":" onClick={handleLogoutClick} >Logout</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="dashboard-layout">
                <AdminLeftMenu />
                <main className="main-content">
                    {children}
                </main>
            </div>
        </>
    );
}

export default AdminMaster