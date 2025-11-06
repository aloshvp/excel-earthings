// "use client"
// import Image from "next/image"
// import Link from "next/link"

// const Header = () => {
//     return (
//         <header className='headerWrap'>
//             <div className="headerLogoSec">
//                 <Image
//                     src='/images/logo.svg'
//                     alt="facebook"
//                     title="facebook"
//                     width={620}
//                     height={95}
//                 />
//             </div>

//             <div className="headerRghtSec">
//                 <div className="headerNavSec">
//                     <ul>
//                         <li><Link href="" scroll={false}>Home</Link></li>
//                         <li><Link href="" scroll={false}>Corporates</Link></li>
//                         <li><Link href="" scroll={false}>Products</Link></li>
//                         <li><Link href="" scroll={false}>Applications</Link></li>
//                         <li><Link href="" scroll={false}>Dealership</Link></li>
//                         <li><Link href="" scroll={false}>Design</Link></li>
//                         <li><Link href="" scroll={false}>E-Learning</Link></li>
//                         <li><Link href="" scroll={false}>Contact Us</Link></li>
//                     </ul>
//                 </div>
//                 <div className="headerBadgeSec">
//                     <Image
//                         src='/images/logo-since2006.svg'
//                         alt="facebook"
//                         title="facebook"
//                         width={100}
//                         height={100}
//                     />
//                 </div>
//             </div>

//         </header>
//     )
// }

// export default Header


"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`headerWrap ${scrolled ? "scrolled" : ""}`}>
            <div className="headerLogoSec">
                <Link href={"/"}>
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width={620}
                        height={95}
                        className="headerLogo"
                    />
                </Link>
            </div>

            <div className="headerRghtSec">
                <div className="headerNavSec">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="">Corporates</Link></li>
                        <li><Link href="">Products</Link></li>
                        <li><Link href="">Applications</Link></li>
                        <li><Link href="">Dealership</Link></li>
                        <li><Link href="">Design</Link></li>
                        <li><Link href="">E-Learning</Link></li>
                        <li><Link href="">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="headerBadgeSec">
                    <Image
                        src="/images/logo-since2006.svg"
                        alt="Since 2006"
                        width={100}
                        height={100}
                        className="headerBadge"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
