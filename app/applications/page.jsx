"use client"
import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner"
import { slidesData } from "@utils/homeData";
import Image from "next/image";
import Link from "next/link";

const page = () => {

    return (
        <section className="applicationsInnerWrap">
            <CommonBanner pageName={"applications"} />
            <div className="applicationsInnerBody">
                <div className="container">
                    <div className="applicationsInnerGrid">
                        {slidesData?.map((slide, idx) => (
                            <div className="applicationsInnerGridItem" key={idx}>
                                <div className="applicationsInnerGridItemImg" data-aos="fade-up" data-aos-delay={Math.floor(idx / 3) * 200 + (idx % 3) * 100} data-aos-duration="700" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <Image
                                        src={slide.img}
                                        width={800}
                                        height={533}
                                        alt={slide.title}
                                        loading="eager"
                                    />
                                </div>
                                <div className="applicationsInnerGridItemTitle" data-aos="fade-up" data-aos-delay={Math.floor(idx / 3) * 200 + (idx % 3) * 100 + 100} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <Image
                                        src={slide.icon}
                                        width={70}
                                        height={70}
                                        alt={slide.title}
                                        loading="eager"
                                    />
                                    <h3>{slide.title}</h3>
                                </div>
                                <div className="applicationsInnerGridItemContent" data-aos="fade-up" data-aos-delay={Math.floor(idx / 3) * 200 + (idx % 3) * 100 + 200} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <p>{slide.content}</p>
                                    <Link href={slide.link}>Learn More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page;
