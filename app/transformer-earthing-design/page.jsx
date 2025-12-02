"use client";
import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner";
import Image from "next/image";

const page = () => {
    return (
        <section className='transformerEarthingWrap'>
            <CommonBanner pageName="transformer-earthing-design" />
            <div className="transformerEarthingBody">
                <div className="transformerEarthingHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                    <div className="container">
                        <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">Fill Out The Form Below</h2>
                        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">Kindly provide your details in the form so our team can connect with you promptly. This will help us
                            understand your needs better and ensure we provide the right support and information.</p>
                    </div>
                </div>
                <div className="transformerEarthingForm" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                    <div className="container">
                        <h2 className="designCommonHead" data-aos="fade-up" data-aos-duration="600" data-aos-delay="550" data-aos-easing="ease-out-cubic" data-aos-offset="50">Personal Details</h2>
                        <form>
                            <div className="transformerEarthingFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Name</label>
                                <input type="text" />
                            </div>
                            <div className="transformerEarthingFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="650" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Company Name</label>
                                <input type="text" />
                            </div>
                            <div className="transformerEarthingFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Designation</label>
                                <input type="text" />
                            </div>
                            <div className="transformerEarthingFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="750" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Mobile</label>
                                <input type="text" />
                            </div>
                            <div className="transformerEarthingFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="800" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Email</label>
                                <input type="text" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="transformerEarthingDsgnCalc" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                    <div className="container">
                        <h2 className="designCommonHead" data-aos="fade-up" data-aos-duration="600" data-aos-delay="250" data-aos-easing="ease-out-cubic" data-aos-offset="50">Design Calculation</h2>
                        <form>
                            <div className="DesignCalcFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Transformer Rating</label>
                                <div>
                                    <input type="text" />
                                    <span>kVA</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="350" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Transformer Primary Side Voltage</label>
                                <div>
                                    <input type="text" />
                                    <span>V</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Transformer Secondary Side Voltage</label>
                                <div>
                                    <input type="text" />
                                    <span>V</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="450" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Fault Level</label>
                                <div>
                                    <input type="text" />
                                    <span>MVA</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Transformer %Z</label>
                                <div>
                                    <input type="text" />
                                    <span>%</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="550" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Soil Resistivity ρ</label>
                                <div>
                                    <input type="text" />
                                    <span>Ωm</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Fault Time, t</label>
                                <div>
                                    <input type="text" />
                                    <span>Sec</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec" data-aos="fade-up" data-aos-duration="600" data-aos-delay="650" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <label htmlFor="">Earth Electrode - Nickel Sealed Copper Bonded Rod</label>
                                <div>
                                    <select name="" id="">
                                        <option value="">Diameter</option>
                                        <option value="">Diameter</option>
                                        <option value="">Diameter</option>
                                    </select>
                                    <span>mm</span>
                                    <select name="" id="">
                                        <option value="">Length</option>
                                        <option value="">Length</option>
                                        <option value="">Length</option>
                                    </select>
                                    <span>m</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec fullRow" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <button onClick={(e) => e.preventDefault()}>Calculate</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page