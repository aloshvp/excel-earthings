'use client';
import { updateSession } from "@lib/auth";
import { useEffect } from "react";
import { redirect, usePathname } from "next/navigation";

export function ClientUpdateSessionCtrl() {

    const pathname = usePathname();
    const LOGIN_PATH = '/admin/login'; 

    async function setUpadateSession() {
        if (pathname === LOGIN_PATH) {
            return;
        }
        
        let result = await updateSession();

        if (!result) {
            console.log("Session update failed. Redirecting...");
            redirect(LOGIN_PATH);
        }
    }

    useEffect(() => {
        setUpadateSession();
    }, [pathname]);

    return <></>;
}