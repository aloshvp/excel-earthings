// import Image from 'next/image'
// import React from 'react'

// const AboutUsInfrastructure = () => {
//     return (
//         <section className='aboutUsInfraStructureWrap'>
//             <div className="container">
//                 <div className="aboutUsInfraStructureTopCont">
//                     <div className="aboutUsInfraStructureTopContLft">
//                         <h2>Infrastructure</h2>
//                         <p>
//                             Excel Earthings has advanced infrastructural conveniences clubbed with technological
//                             expertise to offer the finest Electrical Earthing and Lightning Protection Products. Our
//                             Corporate Office, Marketing Division and Manufacturing Units are in one of the most promising
//                             cities of India – Thrissur, Kerala. Our well-designed and robust infrastructure is competent
//                             to support and manage the present and future market requirements. The stringent focus on
//                             quality and sturdiness of the entire infrastructure setup keeps us a level ahead when it
//                             comes to delivering our products in a quality rich and timely manner.
//                         </p>
//                         <p>
//                             Aimed at providing high quality business, our office and factory premises are equipped with
//                             modern manufacturing facilities, that includes machinery for manufacturing of critical components
//                             and product assembly lines, software to carry out the business analytics and market research
//                             along with well-planned logistics support. All our departments which include manufacturing,
//                             design, quality analysis, research & development, sales & marketing, accounts and logistics are
//                             managed by well experienced professionals and are provided with regular trainings for overall
//                             development. A well governed ERP System provides a harmonious collaboration between each department.
//                         </p>
//                     </div>
//                     <div className="aboutUsInfraStructureTopContRght">
//                         <em>
//                             <Image
//                                 src="/images/static/infrastructure.png"
//                                 alt="Infrastructure"
//                                 width={845}
//                                 height={845}
//                                 className='img'
//                             />
//                         </em>
//                     </div>
//                 </div>
//                 <div className="aboutUsInfraStructureBtmCont">
//                     <h3>Infrastructure Highlights</h3>
//                     <div className='infrastructureHighlightsSec'>
//                         <ul>
//                             <li>30,000 sq.ft. well-designed work area (25000 sq.ft. Production & Warehouse; 5000 sq.ft. Marketing & Administration Office)</li>
//                             <li>Technical Design & Marketing Support</li>
//                             <li>Most Modern Machineries and Technology</li>
//                             <li>Monthly Production Capacity of 500 tons of Earth Enhancing Compounds</li>
//                             <li>Monthly Production Capacity of 100 tons of Copper Bonded Products</li>
//                         </ul>
//                         <ul>
//                             <li>30,000 sq.ft. well-designed work area (25000 sq.ft. Production & Warehouse; 5000 sq.ft. Marketing & Administration Office)</li>
//                             <li>In-House Lab Facility</li>
//                             <li>State of art conference rooms with audiovisual conference facilities</li>
//                             <li>Backup Power Supply Available</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default AboutUsInfrastructure


"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { animate, inView } from "@motionone/dom";

const AboutUsInfrastructure = () => {
    useEffect(() => {
        // Fade up the section header and paragraphs
        inView(".aboutUsInfraStructureTopContLft h2", ({ target }) => {
            animate(target, { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] }, { duration: 0.5, easing: "ease-out" });
        });

        const leftContentItems = document.querySelectorAll(".aboutUsInfraStructureTopContLft p");
        leftContentItems.forEach((el, i) => {
            inView(el, () => {
                animate(el, { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] }, { duration: 0.5, easing: "ease-out", delay: i * 0.15 });
            });
        });

        // Fade up the image
        inView(".aboutUsInfraStructureTopContRght em", ({ target }) => {
            animate(target, { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] }, { duration: 0.6, easing: "ease-out" });
        });

        // Fade up bottom highlights
        inView(".aboutUsInfraStructureBtmCont h3", ({ target }) => {
            animate(target, { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] }, { duration: 0.5, easing: "ease-out" });
        });

        const bottomListItems = document.querySelectorAll(".infrastructureHighlightsSec ul li");
        bottomListItems.forEach((el, i) => {
            inView(el, () => {
                animate(el, { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] }, { duration: 0.5, easing: "ease-out", delay: i * 0.1 });
            });
        });
    }, []);

    return (
        <section className="aboutUsInfraStructureWrap">
            <div className="container">
                <div className="aboutUsInfraStructureTopCont">
                    <div className="aboutUsInfraStructureTopContLft">
                        <h2>Infrastructure</h2>
                        <p>
                            Excel Earthings has advanced infrastructural conveniences clubbed with technological
                            expertise to offer the finest Electrical Earthing and Lightning Protection Products. Our
                            Corporate Office, Marketing Division and Manufacturing Units are in one of the most promising
                            cities of India – Thrissur, Kerala. Our well-designed and robust infrastructure is competent
                            to support and manage the present and future market requirements. The stringent focus on
                            quality and sturdiness of the entire infrastructure setup keeps us a level ahead when it
                            comes to delivering our products in a quality rich and timely manner.
                        </p>
                        <p>
                            Aimed at providing high quality business, our office and factory premises are equipped with
                            modern manufacturing facilities, that includes machinery for manufacturing of critical components
                            and product assembly lines, software to carry out the business analytics and market research
                            along with well-planned logistics support. All our departments which include manufacturing,
                            design, quality analysis, research & development, sales & marketing, accounts and logistics are
                            managed by well experienced professionals and are provided with regular trainings for overall
                            development. A well governed ERP System provides a harmonious collaboration between each department.
                        </p>
                    </div>
                    <div className="aboutUsInfraStructureTopContRght">
                        <em>
                            <Image
                                src="/images/static/infrastructure.png"
                                alt="Infrastructure"
                                width={845}
                                height={845}
                                className="img"
                            />
                        </em>
                    </div>
                </div>

                <div className="aboutUsInfraStructureBtmCont">
                    <h3>Infrastructure Highlights</h3>
                    <div className="infrastructureHighlightsSec">
                        <ul>
                            <li>30,000 sq.ft. well-designed work area...</li>
                            <li>Technical Design & Marketing Support</li>
                            <li>Most Modern Machineries and Technology</li>
                            <li>Monthly Production Capacity of 500 tons of Earth Enhancing Compounds</li>
                            <li>Monthly Production Capacity of 100 tons of Copper Bonded Products</li>
                        </ul>
                        <ul>
                            <li>In-House Lab Facility</li>
                            <li>State of art conference rooms with audiovisual facilities</li>
                            <li>Backup Power Supply Available</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsInfrastructure;
