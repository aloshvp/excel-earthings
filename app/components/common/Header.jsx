"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useWindowSize from "@functions/useWindowSize";

const menuItems = [
    { title: "Home", href: "/" },
    { title: "Corporates", href: "" },
    { title: "Products", href: "/products" },
    { title: "Applications", href: "" },
    { title: "Dealership", href: "" },
    { title: "Design", href: "" },
    { title: "E-Learning", href: "" },
    { title: "Contact Us", href: "" },
];

// Pages where header should scroll dynamically like home
const dynamicScrollPages = ["/","/applications","/products/category"];

const Header = () => {
    const pathname = usePathname();
    const { width } = useWindowSize();
    const isMobile = width <= 1200;

    // Initial scrolled state: mobile = true, desktop = depends on page
    const [scrolled, setScrolled] = useState(isMobile || !dynamicScrollPages.includes(pathname));
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState({});

    useEffect(() => {
        // Mobile: always scrolled
        if (isMobile) {
            setScrolled(true);
            return;
        }

        // Desktop: dynamic scroll only for specific pages
        if (dynamicScrollPages.includes(pathname)) {
            setScrolled(window.scrollY > 0);
            const handleScroll = () => setScrolled(window.scrollY > 0);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            setScrolled(true); // always scrolled on other desktop pages
        }
    }, [pathname, isMobile]);

    const toggleSubmenu = (index) => {
        setSubmenuOpen((prev) => ({ ...prev, [index]: !prev[index] }));
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
                    <Image src="/images/phone.svg" alt="phone" width={44} height={44} className="phone" priority />
                </Link>
                <Link href="" scroll={false}>
                    <Image src="/images/whatsapp.svg" alt="whatsapp" width={44} height={44} className="whatsapp" priority />
                </Link>
            </div>
        </>
    );
};

export default Header;