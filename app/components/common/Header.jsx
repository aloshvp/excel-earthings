"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useWindowSize from "@functions/useWindowSize";
import { dynamicScrollPages } from "@utils/CommonData";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "Corporates", href: "" },
  { title: "Products", href: "/products" },
  { title: "Applications", href: "/applications" },
  { title: "Dealership", href: "/dealership" },
  { title: "Design", href: "/transformer-earthing-design" },
  { title: "E-Learning", href: "/e-learning" },
  { title: "Contact Us", href: "/contact-us" },
];

const Header = () => {
  const pathname = usePathname();
  const { width } = useWindowSize();
  const isMobile = width <= 1200;

  const [scrolled, setScrolled] = useState(isMobile || !dynamicScrollPages?.includes(pathname));
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [menuOpen]);

  // Header scroll behavior
  useEffect(() => {
    if (isMobile) {
      setScrolled(true);
      return;
    }

    if (dynamicScrollPages.includes(pathname)) {
      setScrolled(window.scrollY > 0);
      const handleScroll = () => setScrolled(window.scrollY > 0);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }
  }, [pathname, isMobile]);

  return (
    <>
      <header className={`headerWrap ${scrolled ? "scrolled" : ""}`}>
        <div className="headerLogoSec">
          <Link href="">
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
              {/* Hamburger */}
              <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span />
                <span />
                <span />
              </div>

              {/* Overlay */}
              <div
                className={`hamburgerOverlay ${menuOpen ? "show" : ""}`}
                onClick={() => setMenuOpen(false)}
              ></div>

              {/* Mobile Menu */}
              <nav className={`mobileNav ${menuOpen ? "open" : ""}`}>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
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
          <Image
            src="/images/phone.svg"
            alt="phone"
            width={44}
            height={44}
            className="phone"
            priority
          />
        </Link>
        <Link href="" scroll={false}>
          <Image
            src="/images/whatsapp.svg"
            alt="whatsapp"
            width={44}
            height={44}
            className="whatsapp"
            priority
          />
        </Link>
      </div>
    </>
  );
};

export default Header;
