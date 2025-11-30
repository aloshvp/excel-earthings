"use client";
import Image from "next/image";
import React from "react";

const AboutUsInfrastructure = () => {

    return (
        <section className="aboutUsInfraStructureWrap">
            <div className="container">
                <div className="aboutUsInfraStructureTopCont">
                    <div className="aboutUsInfraStructureTopContLft" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">Infrastructure</h2>
                        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            Excel Earthings has advanced infrastructural conveniences clubbed with technological
                            expertise to offer the finest Electrical Earthing and Lightning Protection Products. Our
                            Corporate Office, Marketing Division and Manufacturing Units are in one of the most promising
                            cities of India – Thrissur, Kerala. Our well-designed and robust infrastructure is competent
                            to support and manage the present and future market requirements. The stringent focus on
                            quality and sturdiness of the entire infrastructure setup keeps us a level ahead when it
                            comes to delivering our products in a quality rich and timely manner.
                        </p>
                        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="550" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            Aimed at providing high quality business, our office and factory premises are equipped with
                            modern manufacturing facilities, that includes machinery for manufacturing of critical components
                            and product assembly lines, software to carry out the business analytics and market research
                            along with well-planned logistics support. All our departments which include manufacturing,
                            design, quality analysis, research & development, sales & marketing, accounts and logistics are
                            managed by well experienced professionals and are provided with regular trainings for overall
                            development. A well governed ERP System provides a harmonious collaboration between each department.
                        </p>
                    </div>
                    <div className="aboutUsInfraStructureTopContRght" data-aos="fade-up" data-aos-duration="800" data-aos-delay="250" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <em data-aos="fade-up" data-aos-duration="800" data-aos-delay="350" data-aos-easing="ease-out-cubic" data-aos-offset="50">
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

                <div className="aboutUsInfraStructureBtmCont" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                    <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">Infrastructure Highlights</h3>
                    <div className="infrastructureHighlightsSec">
                        <ul data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="350" data-aos-easing="ease-out-cubic" data-aos-offset="50">30,000 sq.ft. well-designed work area...</li>
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">Technical Design & Marketing Support</li>
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="450" data-aos-easing="ease-out-cubic" data-aos-offset="50">Most Modern Machineries and Technology</li>
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50">Monthly Production Capacity of 500 tons of Earth Enhancing Compounds</li>
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="550" data-aos-easing="ease-out-cubic" data-aos-offset="50">Monthly Production Capacity of 100 tons of Copper Bonded Products</li>
                        </ul>
                        <ul data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="450" data-aos-easing="ease-out-cubic" data-aos-offset="50">In-House Lab Facility</li>
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50">State of art conference rooms with audiovisual facilities</li>
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="550" data-aos-easing="ease-out-cubic" data-aos-offset="50">Backup Power Supply Available</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsInfrastructure;
