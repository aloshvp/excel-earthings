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

    const isAdmin = pathname.startsWith("/admin");

    const noMarginPages = ["/login", "/applications","/products/category"];

    // Only show header/footer on non-admin, non-login pages
    const showLayout = !isAdmin;

    // Detect home page
    const isHome = pathname === "/";

    // Conditionally apply staticWrapper + margnTop
    const wrapperClass =
        !isHome && !noMarginPages.includes(pathname)
            ? "staticWrapper paddngTop"
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
