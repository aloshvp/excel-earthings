// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import useWindowSize from "@functions/useWindowSize";

// const menuItems = [
//     { title: "Home", href: "/" },
//     { title: "Corporates", href: "" },
//     {
//         title: "Products",
//         href: "",
//         // submenu: [
//         //     { title: "Product A", href: "" },
//         //     { title: "Product B", href: "" },
//         //     { title: "Product C", href: "" },
//         // ]
//     },
//     {
//         title: "Applications",
//         href: "",
//         // submenu: [
//         //     { title: "App 1", href: "" },
//         //     { title: "App 2", href: "" },
//         //     { title: "App 3", href: "" },
//         // ]
//     },
//     { title: "Dealership", href: "" },
//     { title: "Design", href: "" },
//     { title: "E-Learning", href: "" },
//     { title: "Contact Us", href: "" },
// ];

// const Header = () => {
//     const [scrolled, setScrolled] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [submenuOpen, setSubmenuOpen] = useState({});
//     const { width } = useWindowSize();

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 0);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const isMobile = width <= 991;

//     const toggleSubmenu = (index) => {
//         setSubmenuOpen((prev) => ({
//             ...prev,
//             [index]: !prev[index]
//         }));
//     };

//     return (
//         <>
//             <header className={`headerWrap ${scrolled ? "scrolled" : ""}`}>
//                 <div className="headerLogoSec">
//                     <Link href={"/"}>
//                         <Image src="/images/logo.svg" alt="Logo" width={620} height={95} className="headerLogo" priority />
//                     </Link>
//                 </div>

//                 <div className="headerRghtSec">
//                     {isMobile ? (
//                         <>
//                             {/* Hamburger */}
//                             <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//                                 <span />
//                                 <span />
//                                 <span />
//                             </div>

//                             {/* Mobile menu */}
//                             {menuOpen && (
//                                 <nav className="mobileNav">
//                                     <ul>
//                                         {menuItems.map((item, index) => (
//                                             <li key={index}>
//                                                 {item.submenu ? (
//                                                     <>
//                                                         <div className="mobileSubmenuTitle" onClick={() => toggleSubmenu(index)}>
//                                                             {item.title}
//                                                             <span className="arrow">{submenuOpen[index] ? "▲" : "▼"}</span>
//                                                         </div>
//                                                         {submenuOpen[index] && (
//                                                             <ul className="mobileSubmenu">
//                                                                 {item.submenu.map((sub, subIndex) => (
//                                                                     <li key={subIndex}>
//                                                                         <Link href={sub.href}>{sub.title}</Link>
//                                                                     </li>
//                                                                 ))}
//                                                             </ul>
//                                                         )}
//                                                     </>
//                                                 ) : (
//                                                     <Link href={item.href}>{item.title}</Link>
//                                                 )}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </nav>
//                             )}
//                         </>
//                     ) : (
//                         <nav className="headerNavSec">
//                             <ul>
//                                 {menuItems.map((item, index) => (
//                                     <li key={index} className={item.submenu ? "hasSubmenu" : ""}>
//                                         <Link href={item.href}>{item.title}</Link>
//                                         {item.submenu && (
//                                             <ul className="submenu">
//                                                 {item.submenu.map((sub, subIndex) => (
//                                                     <li key={subIndex}><Link href={sub.href}>{sub.title}</Link></li>
//                                                 ))}
//                                             </ul>
//                                         )}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </nav>
//                     )}

//                     <div className="headerBadgeSec">
//                         <Image src="/images/logo-since2006.svg" alt="Since 2006" width={100} height={100} className="headerBadge" priority />
//                     </div>
//                 </div>
//             </header>

//             <div className="fixedLinks">
//                 <Link href='' scroll={false}>
//                     <Image src="/images/phone-call.png" alt="phone call" width={40} height={40} className="phone" />
//                 </Link>
//                 <Link href='' scroll={false}>
//                     <Image src="/images/social.png" alt="whatsapp" width={40} height={40} className="phone" />
//                 </Link>
//             </div >
//         </>
//     );
// };

// export default Header;



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useWindowSize from "@functions/useWindowSize";

const menuItems = [
    { title: "Home", href: "/" },
    { title: "Corporates", href: "" },
    { title: "Products", href: "" },
    { title: "Applications", href: "" },
    { title: "Dealership", href: "" },
    { title: "Design", href: "" },
    { title: "E-Learning", href: "" },
    { title: "Contact Us", href: "" },
];

// Pages where header should NOT be scrolled initially, scroll dynamically like home
const dynamicScrollPages = ["/"];

const Header = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(!dynamicScrollPages.includes(pathname));
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState({});
    const { width } = useWindowSize();

    useEffect(() => {
        if (dynamicScrollPages.includes(pathname)) {
            setScrolled(window.scrollY > 0); // Home-like behavior
            const handleScroll = () => setScrolled(window.scrollY > 0);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            setScrolled(true); // Always scrolled on other pages
        }
    }, [pathname]);

    const isMobile = width <= 991;

    const toggleSubmenu = (index) => {
        setSubmenuOpen((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <>
            <header className={`headerWrap ${scrolled ? "scrolled" : ""}`}>
                <div className="headerLogoSec">
                    <Link href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="Logo"
                            width={620}
                            height={95}
                            className="headerLogo"
                            priority
                        />
                    </Link>
                </div>

                <div className="headerRghtSec">
                    {isMobile ? (
                        <>
                            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                                <span />
                                <span />
                                <span />
                            </div>
                            {menuOpen && (
                                <nav className="mobileNav">
                                    <ul>
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.href}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}
                        </>
                    ) : (
                        <nav className="headerNavSec">
                            <ul>
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}

                    <div className="headerBadgeSec">
                        <Image
                            src="/images/logo-since2006.svg"
                            alt="Since 2006"
                            width={100}
                            height={100}
                            className="headerBadge"
                            priority
                        />
                    </div>
                </div>
            </header>

            <div className="fixedLinks">
                <Link href="" scroll={false}>
                    <Image src="/images/phone-call.png" alt="phone call" width={40} height={40} className="phone" />
                </Link>
                <Link href="" scroll={false}>
                    <Image src="/images/social.png" alt="whatsapp" width={40} height={40} className="phone" />
                </Link>
            </div>
        </>
    );
};

export default Header;
