import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AreaOfApplications from "./components/home/AreaOfApplications";
import Banner from "./components/home/Banner";
import OurAssociates from "./components/home/OurAssociates";
import OurCertifications from "./components/home/OurCertifications";
import Tesimonials from "./components/home/Tesimonials";
import ViewOurProfile from "./components/home/ViewOurProfile";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AreaOfApplications />
      <OurAssociates />
      <OurCertifications />
      <Tesimonials />
      <ViewOurProfile />
      <Footer />
    </>
  );
}
