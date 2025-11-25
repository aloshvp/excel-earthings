"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useWindowSize from "@functions/useWindowSize";
import { dynamicScrollPages } from "@utils/CommonData";
import { menuItems } from "@utils/CommonData";

const Header = () => {
  const pathname = usePathname();
  const { width } = useWindowSize();
  const isMobile = width <= 1200;

  const [scrolled, setScrolled] = useState(
    isMobile || !dynamicScrollPages?.includes(pathname)
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenIndex, setMenuOpenIndex] = useState(null); // for mobile submenu

  // Disable page scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Scroll header behaviour
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
          {/* Mobile */}
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

              {/* Mobile Navigation */}
              <nav className={`mobileNav ${menuOpen ? "open" : ""}`}>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.submenu ? (
                        <>
                          <div
                            className="mobileMenuTitle"
                            onClick={() =>
                              setMenuOpenIndex(
                                menuOpenIndex === index ? null : index
                              )
                            }
                          >
                            {item.title}
                            <span className="arrow">
                              {menuOpenIndex === index ? "−" : "+"}
                            </span>
                          </div>

                          <ul
                            className={`mobileSubmenu ${menuOpenIndex === index ? "open" : ""
                              }`}
                          >
                            {item.submenu.map((sub, i) => (
                              <li key={i}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link href={item.href} onClick={() => setMenuOpen(false)}>
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          ) : (
            /* Desktop Navigation */
            <nav className="headerNavSec">
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index} className={item.submenu ? "hasSubmenu" : ""}>
                    <Link href={item.href}>{item.title}</Link>

                    {item.submenu && (
                      <ul className="submenu">
                        {item.submenu.map((sub, i) => (
                          <li key={i}>
                            <Link href={sub.href}  onClick={() => setDesktopOpenIndex(null)}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Right Badge */}
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

      {/* Fixed Floating Links */}
      <div className="fixedLinks">
        <Link href="tel:+919048744551" scroll={false}>
          <Image
            src="/images/phone.svg"
            alt="phone"
            width={44}
            height={44}
            className="phone"
            priority
          />
        </Link>

        <Link
          href="https://api.whatsapp.com/send/?phone=919497804983&text=Hi.+We%E2%80%99d+like+to+hear+from+you.&type=phone_number&app_absent=0"
          scroll={false}
          target="_blank"
          rel="noopener noreferrer"
        >
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
