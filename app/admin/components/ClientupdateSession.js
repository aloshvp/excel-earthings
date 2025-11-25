'use client';
import { updateSession } from "@lib/auth";
import { useEffect } from "react";
import { redirect,usePathname } from "next/navigation";


export function ClientUpdateSessionCtrl() {

   const pathname = usePathname();

   async function setUpadateSession(){
      let result=await updateSession();
      if(!result){
         redirect('/admin/login');
      }
   }

   useEffect(() => {
      setUpadateSession();
   }, [pathname]);

   return <></>;
}
