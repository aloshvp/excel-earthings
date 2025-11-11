"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "./Header";
import { dynamicScrollPages } from "@utils/homeData";
const Footer = dynamic(() => import("./Footer"), {
    ssr: false,
});

export default function ClientLayoutWrapper({ children }) {

    const pathname = usePathname();
    const isAdmin = pathname.startsWith("/admin");

    // Only show header/footer on non-admin, non-login pages
    const showLayout = !isAdmin;
    const isHome = pathname === "/";

    // Conditionally apply staticWrapper + margnTop
    const wrapperClass =
        !isHome && !dynamicScrollPages?.includes(pathname)
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
