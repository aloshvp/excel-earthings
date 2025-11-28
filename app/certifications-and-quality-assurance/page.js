"use client";

import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner";
import Image from "next/image";
import { certificationsData } from "@utils/homeData";

const Page = () => {

    return (
        <section className="certificationWrap">
            <CommonBanner pageName={"certifications-and-quality-assurance"} />
            <div className="container">
                <div className="certificationSec">
                    <div className="certifiHeader" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <h2>Certifications</h2>
                        <p><i>Our Products are Tested and Certified in accordance with International and National</i> Standards from well established NABL Accredited Laboratories.</p>
                    </div>
                    <div className="cardsContainer">
                        {certificationsData.map((item, index) => (
                            <div
                                className="certificationCard"
                                key={index * 0.1}
                            >
                                <div className="cardImg" data-aos="fade-up" data-aos-delay={index * 100 + 400} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <Image src={item.img} width={300} height={200} className="img-fluid" alt={item.name} title={item.name} />
                                </div>
                                <div className="cardContent">
                                    <h3 data-aos="fade-up" data-aos-delay={index * 100 + 450} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{item.head}</h3>
                                    <p data-aos="fade-up" data-aos-delay={index * 100 + 500} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="qualityAssuranceWrap">
                <div className="container">
                    <div className="certifiHeader" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <h2>Quality Assurance</h2>
                        <p><i>A well-established laboratory along with a dedicated quality check professional brings out the</i> standard quality in each product segment. Various In-House Tests carried out are as follows</p>
                    </div>
                </div>
                <div className="qualityRoundWrap">
                    <div className="container">
                        <div className="qualityAssureSec" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <div className="qualityLeftColumn">
                                <h2>Bend Test</h2>
                                <p>(As per clause 9.7.2 UL 467)</p>
                            </div>
                            <div className="qualityrRightColumn">
                                <div className="qalityDesc">
                                    <p>A length of the rod shall be rigidly held in a clamp or vise. A force shall be applied normal to the free end of the rod at a distance from the clamping device equal to 40 times the rod diameter. The application of force shall be such that the rod is permanently bent through a 30 degree angle.</p>
                                </div>
                                <div className="qualityGallry">
                                    <div className="qualityImgBx"> <Image src="/images/qualityassurance/bend-test-1.png" className="img-fluid" alt="item" title="item" width={450} height={250} /></div>
                                    <div className="qualityImgBx"> <Image src="/images/qualityassurance/bend-test-2.png" className="img-fluid" alt="item" title="item" width={450} height={250} /></div>
                                    <div className="qualityImgBx fullWidth"> <Image src="/images/qualityassurance/bend-test-3.png" className="img-fluid" alt="item" title="item" width={450} height={250} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qualityRoundWrap white">
                    <div className="container">
                        <div className="qualityAssureSec">
                            <div className="qualityLeftColumn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="550" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <h2>Adherence Test</h2>
                                <p>(As per clause 9.7.1 UL 467)</p>
                            </div>
                            <div className="qualityrRightColumn">
                                <div className="qalityDesc" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <p>A 457 mm (18 in) length of the rod with one end cut to a 45° point shall be driven between two steel clamping plates or the jaws of a vise set 1.02 mm (0.04 in) less than the diameter of the rod, so as to shear off sufficient metal to expose the bond between the coating and rod.</p>
                                </div>
                                <div className="qualityGallry">
                                    <div className="qualityImgBx" data-aos="fade-up" data-aos-duration="600" data-aos-delay="650" data-aos-easing="ease-out-cubic" data-aos-offset="50"> <Image src="/images/qualityassurance/adherence-test-2.png" className="img-fluid" alt="item" title="item" width={450} height={250} /></div>
                                    <div className="qualityImgBx" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700" data-aos-easing="ease-out-cubic" data-aos-offset="50"> <Image src="/images/qualityassurance/adherence-test-1.png" className="img-fluid" alt="item" title="item" width={450} height={250} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qualityRoundWrap">
                    <div className="container">
                        <div className="qualityAssureSec">
                            <div className="qualityLeftColumn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <h2>Coating Thickness Test</h2>
                                <p>(As per clause 9.6.1 UL 467)</p>
                            </div>
                            <div className="qualityrRightColumn">
                                <div className="qalityDesc" data-aos="fade-up" data-aos-duration="600" data-aos-delay="750" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <p>The thickness of a protective coating shall be determined by a reliable electronic or magnetic method, or by an electrochemical method.</p>
                                </div>
                                <div className="qualityGallry">
                                    <div className="qualityImgBx" data-aos="fade-up" data-aos-duration="600" data-aos-delay="800" data-aos-easing="ease-out-cubic" data-aos-offset="50"> <Image src="/images/qualityassurance/coating-thickness-test-1.png" className="img-fluid" alt="item" title="item" width={450} height={250} /></div>
                                    <div className="qualityImgBx" data-aos="fade-up" data-aos-duration="600" data-aos-delay="850" data-aos-easing="ease-out-cubic" data-aos-offset="50"> <Image src="/images/qualityassurance/coating-thickness-test-2.png" className="img-fluid" alt="item" title="item" width={450} height={250} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qualityRoundWrap white">
                    <div className="container">
                        <div className="qualityAssureSec">
                            <div className="qualityLeftColumn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="850" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <h2><i>Resistivity of Earth</i>Enhancing Compound</h2>
                                <p>(As per clause 5.4 of IEC 62561-7:2018)</p>
                            </div>
                            <div className="qualityrRightColumn">
                                <div className="qalityDesc" data-aos="fade-up" data-aos-duration="600" data-aos-delay="900" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <p>The four Electrode method is used to determine the resistivity of Earth Enhancing Compound as per ASTM G57-06 it is done with the aid of Standard Soil Box.</p>
                                </div>
                                <div className="qualityGallry">
                                    <div className="qualityImgBx" data-aos="fade-up" data-aos-duration="600" data-aos-delay="950" data-aos-easing="ease-out-cubic" data-aos-offset="50"> <Image src="/images/qualityassurance/resistivity-2.png" className="img-fluid" alt="item" title="item" width={450} height={250} /></div>
                                    <div className="qualityImgBx" data-aos="fade-up" data-aos-duration="600" data-aos-delay="1000" data-aos-easing="ease-out-cubic" data-aos-offset="50"> <Image src="/images/qualityassurance/resistivity-1.png" className="img-fluid" alt="item" title="item" width={450} height={250} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qualityRoundWrap">
                    <div className="container">
                        <div className="qualityAssureSec">
                            <div className="qualityLeftColumn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="1000" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <h2>Dye Penetration Test</h2>
                                <p>(As per ISO 3452-1:2013)</p>
                            </div>
                            <div className="qualityrRightColumn">
                                <div className="qalityDesc" data-aos="fade-up" data-aos-duration="600" data-aos-delay="1050" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <p>This method of non-destructive test is used to detect the cracks or pores that are developed in welded area. Surface is cleaned and liquid penetrant is sprayed over the welded area. After 15 minutes, excess penetrant is removed and developer is applied on the surface which will show any discontinuities in the surface including cracks or pores.</p>
                                </div>
                                <div className="qualityGallry">
                                    <div className="qualityImgCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="1100" data-aos-easing="ease-out-cubic" data-aos-offset="50"><Image src="/images/qualityassurance/dye-penetration-test-1.png" className="img-fluid" alt="item" title="item" width={450} height={250} /><span><p>Applying Penetrant</p></span></div>
                                    <div className="qualityImgCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="1150" data-aos-easing="ease-out-cubic" data-aos-offset="50"><Image src="/images/qualityassurance/dye-penetration-test-2.png" className="img-fluid" alt="item" title="item" width={450} height={250} /><span><p>Removing Penetrant</p></span></div>
                                    <div className="qualityImgCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="1200" data-aos-easing="ease-out-cubic" data-aos-offset="50"> <Image src="/images/qualityassurance/dye-penetration-test-3.png" className="img-fluid" alt="item" title="item" width={450} height={250} /><span><p>Applying Developer</p></span></div>
                                    <div className="qualityImgCard" data-aos="fade-up" data-aos-duration="600" data-aos-delay="1250" data-aos-easing="ease-out-cubic" data-aos-offset="50"> <Image src="/images/qualityassurance/dye-penetration-test-4.png" className="img-fluid" alt="item" title="item" width={450} height={250} /><span><p>Evaluating Indications</p></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qualityRoundWrap darker">
                    <div className="container">
                        <div className="qualityAssureDownHead">
                            <h3>Apart from these In-House Tests, our products are Tested and Certified from well-established
                                <i>NABL Accredited Laboratory according to IEC, IS and UL Standards.</i></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page