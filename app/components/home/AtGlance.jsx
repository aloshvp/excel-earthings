"use client";
import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import React, { useEffect } from 'react';

const AtGlance = () => {

    useEffect(() => {
        const section = document.querySelector(".atGlanceWrap");
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const numberEl = document.querySelector(".atGlanceYearNumber");
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
        <section className='atGlanceWrap'>
            <div className="container">
                <div className="atGlanceBody">
                    <div className="atGlanceTopCont">
                        <div className="atGlanceTopContLft" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" data-aos-easing="ease-out" data-aos-offset="50">
                            <h4 className="homeCmnSubHead">Excel Earthings</h4>
                            <h2 className="homeCmnHead">At a Glance</h2>
                            <p>
                                We are one of the leading manufacturer and Technical Solution
                                Provider in the field of Electrical Earthing and Lightning Protection.
                                By providing suitable design, awareness & customized products,
                                we ensure Electrical Safety and power quality improvement in the
                                electrical network.
                            </p>
                            <Link href="/about-us">Explore More</Link>
                        </div>
                        <div className="atGlanceTopContRght">
                            <span
                                className="atGlanceYearNumber"
                                data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="100" data-aos-easing="ease-out-cubic" data-aos-offset="50"
                            >
                                {/* Initially empty - will be populated by animation */}
                            </span>
                            <em data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out" data-aos-offset="50">
                                <Image src="/images/home/year.svg" width={380} height={320} alt="year" title="year" />
                            </em>
                        </div>
                    </div>
                    <div className="atGlanceGrid">
                        <div className="atGlanceGridItem" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400" data-aos-easing="ease-out" data-aos-offset="50">
                            <Image src="/images/home/logo-iso.svg" width={100} height={100} alt='ISI'></Image>
                            <div className='horizontalLIne'></div>
                            <p>India&apos;s First ISI Certified Copper Bonded Earth Electrode Manufacturer</p>
                        </div>
                        <div className="atGlanceGridItem" data-aos="fade-up" data-aos-duration="700" data-aos-delay="550" data-aos-easing="ease-out" data-aos-offset="50">
                            <Image src="/images/home/logo-iec.svg" width={100} height={100} alt='ISI'></Image>
                            <div className='horizontalLIne'></div>
                            <p>IEC Certified for Earth Enhancing Compounds & Copper Bonded Rods</p>
                        </div>
                        <div className="atGlanceGridItem" data-aos="fade-up" data-aos-duration="700" data-aos-delay="700" data-aos-easing="ease-out" data-aos-offset="50">
                            <Image src="/images/home/logo-ul.svg" width={100} height={100} alt='ISI'></Image>
                            <div className='horizontalLIne'></div>
                            <p>UL Listed Manufacturer for Copper Bonded Earth Electrode</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="atGlanceMarquee">
                <Marquee
                    gradient={false}
                    speed={50}
                >
                    <span className="marqueeText">
                        Be safe with Excel earthings Be safe with Excel earthings Be safe with Excel earthings
                    </span>
                </Marquee>
            </div>
        </section>
    )
}

export default AtGlance