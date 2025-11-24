// import Image from 'next/image'

// const AboutUsUnique = () => {
//     return (
//         <section className="aboutUsUniqueWrap">
//             <div className="container">
//                 <div className="aboutUsUniqueContent">
//                     <h2>What Makes Us Unique?</h2>
//                     <div className="aboutUsUniqueGrid">
//                         <div className="aboutUsUniqueGridItem">
//                             <em>
//                                 <Image
//                                     src="/images/static/isi-unique.svg"
//                                     alt="ISI"
//                                     title="ISI"
//                                     width={95}
//                                     height={95}
//                                 />
//                             </em>
//                             <p>India's First ISI Certified Copper Bonded Earth Electrode Manufacturer</p>
//                         </div>
//                         <div className="aboutUsUniqueGridItem">
//                             <em>
//                                 <Image
//                                     src="/images/static/iec-unique.svg"
//                                     alt="IEC"
//                                     title='IEC'
//                                     width={95}
//                                     height={95}
//                                 />
//                             </em>
//                             <p>IEC Certified for Earth Enhancing Compounds & Copper Bonded Rods</p>
//                         </div>
//                         <div className="aboutUsUniqueGridItem">
//                             <em>
//                                 <Image
//                                     src="/images/static/ul-unique.svg"
//                                     alt="UL"
//                                     title='UL'
//                                     width={95}
//                                     height={95}
//                                 />
//                             </em>
//                             <p>UL Listed Manufacturer for Copper Bonded Earth Electrode</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default AboutUsUnique



"use client";

import Image from 'next/image';
import React, { useEffect } from "react";
import { animate, inView } from "@motionone/dom";

const AboutUsUnique = () => {

    useEffect(() => {
        // Animate the heading when it enters the viewport
        const heading = document.querySelector(".aboutUsUniqueContent h2");
        inView(heading, () => {
            animate(
                heading,
                { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0px)"] },
                { duration: 0.5, easing: "ease-out" }
            );
        });

        // Animate each grid item when it enters the viewport
        const items = document.querySelectorAll(".aboutUsUniqueGridItem");
        items.forEach((item, index) => {
            inView(item, () => {
                animate(
                    item,
                    { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0px)"] },
                    { duration: 0.6, delay: index * 0.15, easing: "ease-out" }
                );
            });
        });
    }, []);

    return (
        <section className="aboutUsUniqueWrap">
            <div className="container">
                <div className="aboutUsUniqueContent">
                    <h2>What Makes Us Unique?</h2>
                    <div className="aboutUsUniqueGrid">
                        <div className="aboutUsUniqueGridItem">
                            <em>
                                <Image
                                    src="/images/static/isi-unique.svg"
                                    alt="ISI"
                                    title="ISI"
                                    width={95}
                                    height={95}
                                />
                            </em>
                            <p>India's First ISI Certified Copper Bonded Earth Electrode Manufacturer</p>
                        </div>
                        <div className="aboutUsUniqueGridItem">
                            <em>
                                <Image
                                    src="/images/static/iec-unique.svg"
                                    alt="IEC"
                                    title='IEC'
                                    width={95}
                                    height={95}
                                />
                            </em>
                            <p>IEC Certified for Earth Enhancing Compounds & Copper Bonded Rods</p>
                        </div>
                        <div className="aboutUsUniqueGridItem">
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