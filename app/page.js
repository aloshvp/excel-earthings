import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "./components/common/Header";
import Banner from "./components/home/Banner";

// Dynamic imports for below-the-fold components
const AreaOfApplications = dynamic(() => import("./components/home/AreaOfApplications"), { suspense: true });
const OurAssociates = dynamic(() => import("./components/home/OurAssociates"), { suspense: true });
const OurCertifications = dynamic(() => import("./components/home/OurCertifications"), { suspense: true });
const Tesimonials = dynamic(() => import("./components/home/Tesimonials"), { suspense: true });
const ViewOurProfile = dynamic(() => import("./components/home/ViewOurProfile"), { suspense: true });
const Footer = dynamic(() => import("./components/common/Footer"), { suspense: true });

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <Suspense>
        <AreaOfApplications />
      </Suspense>

      <Suspense>
        <OurAssociates />
      </Suspense>

      <Suspense>
        <OurCertifications />
      </Suspense>

      <Suspense>
        <Tesimonials />
      </Suspense>

      <Suspense>
        <ViewOurProfile />
      </Suspense>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
