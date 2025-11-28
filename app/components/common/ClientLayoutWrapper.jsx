"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Lenis from "lenis";
import Header from "./Header";
import AOSInit from "./AOSInit";
import { dynamicScrollPages } from "@utils/CommonData";

const Footer = dynamic(() => import("./Footer"), {
    ssr: false,
});

export default function ClientLayoutWrapper({ children }) {

    const pathname = usePathname();
    const isAdmin = pathname.startsWith("/admin");

    useEffect(() => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            return; // Skip smooth scrolling if user prefers reduced motion
        }

        const lenis = new Lenis({
            lerp: 0.08, // Reduced from default 0.1 for better performance
            duration: 1.2, // Slightly faster
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for smoother feel
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false, // Disable on touch devices for better performance
            touchMultiplier: 2,
            infinite: false,
        });

        let rafId;
        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
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
            <AOSInit />
            {showLayout && <Header />}

            <main>
                {isHome ? children : <div className={wrapperClass}>{children}</div>}
            </main>

            {showLayout && <Footer />}
        </>
    );
}
