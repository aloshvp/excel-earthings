"use client";

import dynamic from "next/dynamic";
import Banner from "@home/Banner";
import AreaOfApplications from "@home/AreaOfApplications";

// Dynamic imports with client-side rendering
const AtGlance = dynamic(() => import("@home/AtGlance"), { ssr: false });
const OurSpecialities = dynamic(() => import("@home/OurSpecialities"), { ssr: false });
const OurAssociates = dynamic(() => import("@home/OurAssociates"), { ssr: false });
const OurCertifications = dynamic(() => import("@home/OurCertifications"), { ssr: false });
const Tesimonials = dynamic(() => import("@home/Tesimonials"), { ssr: false });
const OurProducts = dynamic(() => import("@home/OurProducts"), { ssr: false });
const ViewOurProfile = dynamic(() => import("@home/ViewOurProfile"), { ssr: false });
const InsightsUpdates = dynamic(() => import("@home/InsightsUpdates"), { ssr: false });
const Events = dynamic(() => import("@home/Events"), { ssr: false });
const Footer = dynamic(() => import("./components/common/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Banner />
      <AreaOfApplications />

      <AtGlance />
      <OurSpecialities />
      <OurAssociates />
      <OurCertifications />
      <OurProducts />
      <Tesimonials />
      <ViewOurProfile />
      <InsightsUpdates />
      {/* <Events /> */}
    </>
  );
}
