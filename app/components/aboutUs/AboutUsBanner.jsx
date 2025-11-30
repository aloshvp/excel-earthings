"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const AboutUsBanner = () => {

    useEffect(() => {
        const section = document.querySelector(".aboutUsBannerWrap");
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const numberEl = document.querySelector(".aboutYearNumber");
                    if (!numberEl) return;

                    if (entry.isIntersecting) {
                        // Reset and restart animation when entering view
                        numberEl.textContent = "0";

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
                    }
                });
            },
            {
                root: null,
                threshold: 0.3,
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);



    return (
        <section className="aboutUsBannerWrap">
            <div className="container">
                <div className="aboutUsBannerContent">

                    {/* LEFT CONTENT */}
                    <div className="aboutUsBannerContentLft" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            Leading Manufacturer and Technical Solution Provider in the field of Electrical Earthing and Lightning Protection.
                        </h1>
                        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            M/S. Excel Earthings was established in 2006, With the headquarters situated in central part of Kerala, Thrissur Dt.
                            The company has been involved in all aspects of the Electrical Earthing and Lightning Protection, which includes Design,
                            Manufacturing, Supply and Technical Support. Over the years we have been established as one of the leading brands in South
                            India. We maintain the highest regulatory standard as per the recommendations of Electrotechnical Commission as well as
                            National and International Regulatory bodies.
                        </p>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="aboutUsBannerContentRght" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">

                        {/* Number Animation */}
                        <span className="aboutYearNumber">0</span>

                        {/* Image Animation */}
                        <em className="aboutYearImg" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700" data-aos-easing="ease-out-cubic" data-aos-offset="50">
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