"use client"
import "@styles/staticbundles.scss";
import AboutUsAwards from "@about/AboutUsAwards";
import AboutUsBanner from "@about/AboutUsBanner";
import AboutUsCeo from "@about/AboutUsCeo";
import AboutUsGlance from "@about/AboutUsGlance";
import AboutUsInfrastructure from "@about/AboutUsInfrastructure";
import AboutUsMilestones from "@about/AboutUsMilestones";
import AboutUsMission from "@about/AboutUsMission";
import AboutUsUnique from "@about/AboutUsUnique";

const page = () => {
    return (
        <div className="aboutUsWrap">
            <AboutUsBanner />
            <AboutUsUnique />
            <AboutUsGlance />
            <AboutUsMilestones />
            <AboutUsMission />
            <AboutUsInfrastructure />
            <AboutUsCeo />
            <AboutUsAwards />
        </div>
    )
}

export default page