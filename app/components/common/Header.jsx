"use client"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className='headerWrap'>
            <div className="headerLogoSec"></div>
            <div className="headerNavSec">
                <ul>
                    <li><Link href="" scroll={false}>Home</Link></li>
                    <li><Link href="" scroll={false}>Home</Link></li>
                    <li><Link href="" scroll={false}>Home</Link></li>
                    <li><Link href="" scroll={false}>Home</Link></li>
                    <li><Link href="" scroll={false}>Home</Link></li>
                    <li><Link href="" scroll={false}>Home</Link></li>
                    <li><Link href="" scroll={false}>Home</Link></li>
                    <li><Link href="" scroll={false}>Home</Link></li>
                </ul>
            </div>
            <div className="headerBadgeSec"></div>
        </header>
    )
}

export default Header