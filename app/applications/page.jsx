import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner"

const page = () => {
    return (
        <section className="applicationsInnerWrap">
            <CommonBanner pageName={"applications"} />
        </section>
    )
}

export default page