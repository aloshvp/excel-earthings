"use client";

import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner";
import Image from "next/image";
import { videoList, brochures } from "@utils/staticData";
import useInViewFade from "@functions/useInViewFade";

const Page = () => {

    // Page title
    useInViewFade(".eLearningTitle", {
        offset: 20,
        duration: 0.45,
        easing: "ease-out",
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.15,
    });

    // Video cards
    useInViewFade(".eLearningVideoItem", {
        offset: 25,
        duration: 0.6,
        easing: "ease-out",
        staggerField: "index",
        staggerStep: 0.04,
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.15,
    });

    // Brochures header
    useInViewFade(".eLearningBrochuresHead", {
        offset: 20,
        duration: 0.45,
        easing: "ease-out",
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.15,
    });

    // Brochure cards
    useInViewFade(".eLearningBrochuresItem", {
        offset: 25,
        duration: 0.6,
        easing: "ease-out",
        staggerField: "index",
        staggerStep: 0.04,
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.15,
    });
    return (
        <section className="eLearningWrap">
            <CommonBanner pageName={"e-learning"} />

            <div className="eLearningBodyWrap">

                {/* TITLE SECTION */}
                <div className="eLearningTitleWrap">
                    <div className="container">
                        <div className="eLearningTitle" style={{ opacity: 0, transform: "translateY(20px)" }}>
                            <h2>E-Learning</h2>
                            <p>
                                Excel Earthings E-Learning Platform focuses on imparting a great
                                deal of knowledge about Electrical Earthing and Lightning
                                Protection so that any individual can gain in-depth knowledge and
                                implement them in their respective fields. We have a strong online
                                Technical Support Team to support you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* VIDEO GRID */}
                <div className="eLearningVideoWrap">
                    <div className="container">
                        <div className="eLearningVideoItemWrap">
                            {videoList?.map((item, i) => (
                                <div
                                    className="eLearningVideoItem"
                                    key={i}
                                    data-index={i}
                                    style={{ opacity: 0, transform: "translateY(25px)" }}
                                >
                                    <div className="eLearningVideoItemImg">
                                        <Image src={item.img} alt={item.title} width={546} height={307} />
                                        <em>
                                            <Image
                                                src="/images/e-learning/play-button.svg"
                                                width={40}
                                                height={40}
                                                alt="play"
                                            />
                                        </em>
                                    </div>

                                    <div className="eLearningVideoItemText">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BROCHURES */}
                <div className="eLearningBrochuresWrap">
                    <div className="container">
                        <div className="eLearningBrochuresHead" style={{ opacity: 0, transform: "translateY(20px)" }}>
                            <h3>Download Brochures</h3>
                        </div>
                        <div className="eLearningBrochuresItemWrap">
                            {brochures?.map((b, i) => (
                                <div
                                    className="eLearningBrochuresItem"
                                    key={i}
                                    data-index={i}
                                    style={{ opacity: 0, transform: "translateY(25px)" }}
                                >
                                    <div className="eLearningBrochuresItemImg">
                                        <Image src={b.img} alt={b.title} width={200} height={300} />
                                    </div>
                                    <div className="eLearningBrochuresItemText">
                                        <span>Brochure
                                            <b>{b.title}</b>
                                        </span>                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
