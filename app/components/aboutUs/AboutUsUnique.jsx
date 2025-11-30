"use client";
import Image from 'next/image';
import React from "react";

const AboutUsUnique = () => {

    return (
        <section className="aboutUsUniqueWrap">
            <div className="container">
                <div className="aboutUsUniqueContent">
                    <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">What Makes Us Unique?</h2>
                    <div className="aboutUsUniqueGrid">
                        <div className="aboutUsUniqueGridItem" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <em>
                                <Image
                                    src="/images/static/isi-unique.svg"
                                    alt="ISI"
                                    title="ISI"
                                    width={95}
                                    height={95}
                                />
                            </em>
                            <p>India&apos;s First ISI Certified Copper Bonded Earth Electrode Manufacturer</p>
                        </div>
                        <div className="aboutUsUniqueGridItem" data-aos="fade-up" data-aos-duration="800" data-aos-delay="450" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <em>
                                <Image
                                    src="/images/static/iec-unique.svg"
                                    alt="IEC"
                                    title='IEC'
                                    width={95}
                                    height={95}
                                />
                            </em>
                            <p>IEC Certified for Earth Enhancing Compounds &amp; Copper Bonded Rods</p>
                        </div>
                        <div className="aboutUsUniqueGridItem" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <em>
                                <Image
                                    src="/images/static/ul-unique.svg"
                                    alt="UL"
                                    title='UL'
                                    width={95}
                                    height={95}
                                />
                            </em>
                            <p>UL Listed Manufacturer for Copper Bonded Earth Electrode</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsUnique;