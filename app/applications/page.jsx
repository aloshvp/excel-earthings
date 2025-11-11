"use client"
import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner"
import { slidesData } from "@utils/homeData";
import Image from "next/image";
import Link from "next/link";

const page = () => {

    const handleImageLoad = () => {
        // your image load handler if needed
    };

    return (
        <section className="applicationsInnerWrap">
            <CommonBanner pageName={"applications"} />
            <div className="applicationsInnerBody">
                <div className="container">
                    <div className="applicationsInnerGrid">
                        {slidesData?.map((slide, idx) => (
                            <div className="applicationsInnerGridItem" key={idx}>
                                <div className="applicationsInnerGridItemImg">
                                    <Image
                                        src={slide.img}
                                        width={800}
                                        height={533}
                                        alt={slide.title}
                                        loading="eager"
                                        onLoadingComplete={handleImageLoad}
                                    />
                                </div>
                                <div className="applicationsInnerGridItemTitle">
                                    <Image
                                        src={slide.icon}
                                        width={70}
                                        height={70}
                                        alt={slide.title}
                                        loading="eager"
                                        onLoadingComplete={handleImageLoad}
                                    />
                                    <h3>{slide.title}</h3>
                                </div>
                                <div className="applicationsInnerGridItemContent">
                                    <p>{slide.content}</p>
                                    <Link href={slide.link} scroll={false}>Learn More</Link>
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
