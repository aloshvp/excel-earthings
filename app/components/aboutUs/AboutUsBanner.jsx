import Image from "next/image"


const AboutUsBanner = () => {
    return (
        <section className="aboutUsBannerWrap">
            <div className="container">
                <div className="aboutUsBannerContent">
                    <div className="aboutUsBannerContentLft">
                        <h1>
                            Leading Manufacturer and Technical Solution Provider in the field of Electrical Earthing and Lightning Protection.
                        </h1>
                        <p>
                            M/S. Excel Earthings was established in 2006, With the headquarters situated in central part of Kerala, Thrissur Dt.
                            The company has been involved in all aspects of the Electrical Earthing and Lightning Protection, which includes Design,
                            Manufacturing, Supply and Technical Support. Over the years we have been established as one of the leading brands in South
                            India. We maintain the highest regulatory standard as per the recommendations of Electrotechnical Commission as well as
                            National and International Regulatory bodies.
                        </p>
                    </div>
                    <div className="aboutUsBannerContentRght">
                        <span>19</span>
                        <em>
                            <Image src="/images/home/year.svg" width={380} height={320} alt="year" title="year" />
                        </em>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsBanner