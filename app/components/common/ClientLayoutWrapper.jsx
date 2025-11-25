"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Lenis from "lenis";
import Header from "./Header";
import { dynamicScrollPages } from "@utils/CommonData";

const Footer = dynamic(() => import("./Footer"), {
    ssr: false,
});

export default function ClientLayoutWrapper({ children }) {

    const pathname = usePathname();
    const isAdmin = pathname.startsWith("/admin");

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    // Only show header/footer on non-admin, non-login pages
    const showLayout = !isAdmin;
    const isHome = pathname === "/";

    // Conditionally apply staticWrapper + margnTop
    const wrapperClass =(!isAdmin)?
        !isHome && !dynamicScrollPages?.includes(pathname)
            ? "staticWrapper paddngTop"
            : "staticWrapper"
            :'';

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
