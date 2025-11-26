"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { timeline, animate } from "@motionone/dom";
import useInViewFade from "@functions/useInViewFade";

const AboutUsBanner = () => {

    useEffect(() => {
        const numberEl = document.querySelector(".aboutYearNumber");
        const img = document.querySelector(".aboutYearImg");

        // -------------------------------
        // SMOOTH COUNT-UP (0 → 19)
        // -------------------------------
        const start = 0;
        const end = 19;
        const duration = 1400;
        let startTime = null;

        const smoothCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // cubic easing
            const eased = 1 - Math.pow(1 - progress, 3);

            // use ceil for smoother final increment
            const current = Math.ceil(start + (end - start) * eased);

            numberEl.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(smoothCount);
            } else {
                // make sure final number is exact
                numberEl.textContent = end;
            }
        };

        requestAnimationFrame(smoothCount);

        // --------------------------------
        // MOTION ONE ANIMATION TIMELINE
        // --------------------------------
        timeline([
            [
                numberEl,
                {
                    opacity: [0, 1],
                    scale: [0.4, 1.25, 1],
                    transform: ["scale(0.4)", "scale(1.25)", "scale(1)"]
                },
                {
                    duration: 1.2,
                    easing: "ease-out"
                }
            ],
            [
                img,
                {
                    opacity: [0, 1],
                    transform: ["translateY(25px)", "translateY(0)"]
                },
                {
                    duration: 0.9,
                    delay: 0.15,
                    easing: "ease-out"
                }
            ]
        ]);
    }, []);

    // LEFT CONTENT FADE-UP USING COMMON HOOK (runs once on mount)
    useInViewFade(".aboutUsBannerContentLft", {
        offset: 15,
        duration: 0.28,
        easing: "ease-out",
    });


    return (
        <section className="aboutUsBannerWrap">
            <div className="container">
                <div className="aboutUsBannerContent">

                    {/* LEFT CONTENT */}
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

                    {/* RIGHT CONTENT */}
                    <div className="aboutUsBannerContentRght">

                        {/* Number Animation */}
                        <span className="aboutYearNumber">0</span>

                        {/* Image Animation */}
                        <em className="aboutYearImg">
                            <Image
                                src="/images/home/year.svg"
                                width={380}
                                height={320}
                                alt="year"
                                title="year"
                            />
                        </em>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsBanner;