"use client";
import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import React, { useEffect } from 'react';
import { timeline, animate } from "@motionone/dom";
import useInViewFade from '@functions/useInViewFade';

const AtGlance = () => {

    useEffect(() => {
        const section = document.querySelector(".atGlanceWrap");
        if (!section) return;

        let hasAnimated = false;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting || hasAnimated) return;

                    const numberEl = document.querySelector(".atGlanceYearNumber");
                    const img = document.querySelector(".atGlanceTopContRght em");
                    if (!numberEl) return;

                    hasAnimated = true;

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
                    if (img) {
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
                    }

                    // Run only once
                    observer.unobserve(entry.target);
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

    // Fade-up for left content
    useInViewFade(".atGlanceTopContLft", {
        offset: 20,
        duration: 0.45,
        easing: "ease-out",
    });

    // Fade-up for grid items with slight stagger
    useInViewFade(".atGlanceGridItem", {
        offset: 25,
        duration: 0.55,
        easing: "ease-out",
        staggerField: "index",
        staggerStep: 0.06,
    });

    return (
        <section className='atGlanceWrap'>
            <div className="container">
                <div className="atGlanceBody">
                    <div className="atGlanceTopCont">
                        <div className="atGlanceTopContLft">
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
                                style={{ opacity: 0, transform: "scale(0.4)" }}
                            >
                                0
                            </span>
                            <em>
                                <Image src="/images/home/year.svg" width={380} height={320} alt="year" title="year" />
                            </em>
                        </div>
                    </div>
                    <div className="atGlanceGrid">
                        <div className="atGlanceGridItem" data-index={0}>
                            <Image src="/images/home/logo-iso.svg" width={100} height={100} alt='ISI'></Image>
                            <div className='horizontalLIne'></div>
                            <p>India&apos;s First ISI Certified Copper Bonded Earth Electrode Manufacturer</p>
                        </div>
                        <div className="atGlanceGridItem" data-index={1}>
                            <Image src="/images/home/logo-iec.svg" width={100} height={100} alt='ISI'></Image>
                            <div className='horizontalLIne'></div>
                            <p>IEC Certified for Earth Enhancing Compounds & Copper Bonded Rods</p>
                        </div>
                        <div className="atGlanceGridItem" data-index={2}>
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