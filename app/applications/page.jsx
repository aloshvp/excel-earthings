"use client"
import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner"
import { slidesData } from "@utils/homeData";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { animate, inView } from "@motionone/dom";

const page = () => {

    useEffect(() => {
        inView(".applicationsInnerGridItem", ({ target }) => {
            const delay = (Number(target.dataset.id) % 3) * 0.1;
            animate(
                target,
                { opacity: [0, 1], transform: ["translateY(50px)", "none"] },
                { duration: 0.8, delay, easing: "ease-out" }
            );
        });
    }, []);

    return (
        <section className="applicationsInnerWrap">
            <CommonBanner pageName={"applications"} />
            <div className="applicationsInnerBody">
                <div className="container">
                    <div className="applicationsInnerGrid">
                        {slidesData?.map((slide, idx) => (
                            <div className="applicationsInnerGridItem" key={idx} data-id={idx} style={{ opacity: 0 }}>
                                <div className="applicationsInnerGridItemImg">
                                    <Image
                                        src={slide.img}
                                        width={800}
                                        height={533}
                                        alt={slide.title}
                                        loading="eager"
                                    />
                                </div>
                                <div className="applicationsInnerGridItemTitle">
                                    <Image
                                        src={slide.icon}
                                        width={70}
                                        height={70}
                                        alt={slide.title}
                                        loading="eager"
                                    />
                                    <h3>{slide.title}</h3>
                                </div>
                                <div className="applicationsInnerGridItemContent">
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
