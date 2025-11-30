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
  const [desktopOpenIndex, setDesktopOpenIndex] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollTop(scrollTop > 1200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Link href="/" className="firstLogoLink">
            <Image
              src="/images/logo-excel-earthings.svg"
              alt="Logo"
              width={260}
              height={60}
              className="headerLogo img"
              priority
            />
          </Link>
          <Link href="" scroll={false} className="secondLogoLink">
            <Image
              src="/images/logo-excel-safepower.svg"
              alt="Logo"
              width={260}
              height={60}
              className="headerLogo img"
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
                  <li
                    key={index}
                    className={`${item.submenu ? "hasSubmenu" : ""} ${desktopOpenIndex === index ? "menu-open" : ""}`}
                    // 1. Open on Hover
                    onMouseEnter={() => setDesktopOpenIndex(index)}
                    // 2. Close when mouse leaves the specific list item
                    onMouseLeave={() => setDesktopOpenIndex(null)}
                  >
                    <Link
                      href={item.href}
                      // Optional: Close if the main parent link is clicked
                      onClick={() => setDesktopOpenIndex(null)}
                    >
                      {item.title}
                    </Link>

                    {/* 3. Check State to decide if submenu shows */}
                    {item.submenu && (
                      <ul
                        className="submenu"
                        // If you use CSS :hover, this inline style ensures React controls visibility.
                        // If your CSS handles a ".menu-open" class, you can remove this style attribute.
                        style={{
                          display: desktopOpenIndex === index ? 'block' : 'none',
                          opacity: desktopOpenIndex === index ? 1 : 0,
                          visibility: desktopOpenIndex === index ? 'visible' : 'hidden'
                        }}
                      >
                        {item.submenu.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.href}
                              // 4. THIS FIXES YOUR ISSUE: Force menu close on click
                              onClick={() => setDesktopOpenIndex(null)}
                            >
                              {sub.title}
                            </Link>
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
      </header >

      {/* Fixed Floating Links */}
      <div className="fixedLinks" >
        <button onClick={scrollToTop} className={`scrollToTopBtn ${showScrollTop ? 'visible' : ''}`} aria-label="Scroll to top">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 15L12 9L6 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

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
