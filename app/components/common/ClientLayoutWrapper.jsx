"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "./Header"; // adjust path as needed

// Dynamically import Footer for performance
const Footer = dynamic(() => import("./Footer"), {
    ssr: false,
});

export default function ClientLayoutWrapper({ children }) {
    const pathname = usePathname();

    // Define routes where you DON'T want header/footer
    const isAdmin = pathname.startsWith("/admin");
    const isLogin = pathname === "/login";

    // Pages where we DON'T want to apply margnTop
    const noMarginPages = ["/login", "/contact", "/some-other-page"]; // add your pages here

    // Only show header/footer on non-admin, non-login pages
    const showLayout = !isAdmin && !isLogin;

    // Detect home page
    const isHome = pathname === "/";

    // Conditionally apply staticWrapper + margnTop
    const wrapperClass =
        !isHome && !noMarginPages.includes(pathname)
            ? "staticWrapper margnTop"
            : "staticWrapper";

    return (
        <>
            {showLayout && <Header />}

            <main>
                {isHome ? children : <div className={wrapperClass}>{children}</div>}
            </main>

            {showLayout && <Footer />}
        </>
    );
}
