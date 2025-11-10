// import React, { Suspense } from "react";
// import dynamic from "next/dynamic";
// import Header from "./components/common/Header";
// import Banner from "./components/home/Banner";

// const AreaOfApplications = dynamic(() => import("./components/home/AreaOfApplications"), { suspense: true });
// const AtGlance = dynamic(() => import("./components/home/AtGlance"), { suspense: true });
// const OurSpecialities = dynamic(() => import("./components/home/OurSpecialities"), { suspense: true });
// const OurAssociates = dynamic(() => import("./components/home/OurAssociates"), { suspense: true });
// const OurCertifications = dynamic(() => import("./components/home/OurCertifications"), { suspense: true });
// const Tesimonials = dynamic(() => import("./components/home/Tesimonials"), { suspense: true });
// const OurProducts = dynamic(() => import("./components/home/OurProducts"), { suspense: true });
// const ViewOurProfile = dynamic(() => import("./components/home/ViewOurProfile"), { suspense: true });
// const InsightsUpdates = dynamic(() => import("./components/home/InsightsUpdates"), { suspense: true });
// const Events = dynamic(() => import("./components/home/Events"), { suspense: true });
// const Footer = dynamic(() => import("./components/common/Footer"), { suspense: true });

// export default function Home() {
//   return (
//     <>
//       {/* <Header /> */}
//       <Banner />

//       <Suspense>
//         <AreaOfApplications />
//       </Suspense>

//       <Suspense>
//         <AtGlance />
//       </Suspense>

//       <Suspense>
//         <OurSpecialities />
//       </Suspense>

//       <Suspense>
//         <OurAssociates />
//       </Suspense>

//       <Suspense>
//         <OurCertifications />
//       </Suspense>

//       <Suspense>
//         <OurProducts />
//       </Suspense>

//       <Suspense>
//         <Tesimonials />
//       </Suspense>

//       <Suspense>
//         <ViewOurProfile />
//       </Suspense>

//       <Suspense>
//         <InsightsUpdates />
//       </Suspense>

//       {/* <Suspense>
//         <Events />
//       </Suspense> */}

//       <Suspense>
//         <Footer />
//       </Suspense>
//     </>
//   );
// }



"use client";

import dynamic from "next/dynamic";
import Header from "./components/common/Header";
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
      <Header />


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
      <Events />
      <Footer />
    </>
  );
}
