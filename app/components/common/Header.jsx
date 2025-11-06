"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`headerWrap ${scrolled ? "scrolled" : ""}`}>
            <div className="headerLogoSec">
                <Link href={"/"}>
                    <Image src="/images/logo.svg" alt="Logo" width={620} height={95} className="headerLogo" priority />
                </Link>
            </div>

            <div className="headerRghtSec">
                <nav className="headerNavSec">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="">Corporates</Link></li>
                        {/* <li className="hasSubmenu">
                            <Link href="">Products</Link>
                            <ul className="submenu">
                                <li><Link href="">Product A</Link></li>
                                <li><Link href="">Product B</Link></li>
                                <li><Link href="">Product C</Link></li>
                            </ul>
                        </li>
                        <li className="hasSubmenu">
                            <Link href="">Applications</Link>
                            <ul className="submenu">
                                <li><Link href="">App 1</Link></li>
                                <li><Link href="">App 2</Link></li>
                                <li><Link href="">App 3</Link></li>
                            </ul>
                        </li> */}
                        <li><Link href="">Products</Link></li>
                        <li><Link href="">Applications</Link></li>
                        <li><Link href="">Dealership</Link></li>
                        <li><Link href="">Design</Link></li>
                        <li><Link href="">E-Learning</Link></li>
                        <li><Link href="">Contact Us</Link></li>
                    </ul>
                </nav>

                <div className="headerBadgeSec">
                    <Image src="/images/logo-since2006.svg" alt="Since 2006" width={100} height={100} className="headerBadge" priority />
                </div>
            </div>
        </header>
    );
};

export default Header;
