"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
    useEffect(() => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        AOS.init({
            duration: 400, // Faster animations for better performance
            easing: "ease-out-cubic",
            // once: true, // Prevent animations from replaying on scroll back
            offset: 50, // Reduced offset for earlier triggering
            delay: 0,
            anchorPlacement: "top-bottom",
            // Respect user's motion preferences but keep animations enabled on all screen sizes
            disable: prefersReducedMotion,
        });

        // Refresh AOS when the page changes (for Next.js routing)
        const handleRouteChange = () => {
            AOS.refresh();
        };

        // Listen for route changes in Next.js
        window.addEventListener("load", handleRouteChange);

        return () => {
            window.removeEventListener("load", handleRouteChange);
        };
    }, []);

    return null; // This component doesn't render anything
}
