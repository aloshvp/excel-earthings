"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 600, // Reduced duration for snappier animations
            easing: "ease-out-cubic", // Easing function
            //   once: true, // Prevent animations from replaying on scroll back
            offset: 80, // Increased offset to reduce frequent triggering
            delay: 0, // Delay animation
            anchorPlacement: "top-bottom", // Better anchor placement
            // disable: "mobile", // Keep animations enabled on all devices
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
