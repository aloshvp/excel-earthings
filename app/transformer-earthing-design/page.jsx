"use client";
import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner";
import Image from "next/image";

const page = () => {
    return (
        <section className='transformerEarthingWrap'>
            <CommonBanner pageName="transformer-earthing-design" />
            <div className="transformerEarthingBody">
                <div className="transformerEarthingHead">
                    <div className="container">
                        <h2>Fill Out The Form Below</h2>
                        <p>Kindly provide your details in the form so our team can connect with you promptly. This will help us
                            understand your needs better and ensure we provide the right support and information.</p>
                    </div>
                </div>
                <div className="transformerEarthingForm">
                    <div className="container">
                        <h2 className="designCommonHead">Personal Details</h2>
                        <form>
                            <div className="transformerEarthingFormSec">
                                <label htmlFor="">Name</label>
                                <input type="text" />
                            </div>
                            <div className="transformerEarthingFormSec">
                                <label htmlFor="">Company Name</label>
                                <input type="text" />
                            </div>
                            <div className="transformerEarthingFormSec">
                                <label htmlFor="">Designation</label>
                                <input type="text" />
                            </div>
                            <div className="transformerEarthingFormSec">
                                <label htmlFor="">Mobile</label>
                                <input type="text" />
                            </div>
                            <div className="transformerEarthingFormSec">
                                <label htmlFor="">Email</label>
                                <input type="text" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="transformerEarthingDsgnCalc">
                    <div className="container">
                        <h2 className="designCommonHead">Personal Details</h2>
                        <form>
                            <div className="DesignCalcFormSec">
                                <label htmlFor="">Transformer Rating</label>
                                <div>
                                    <input type="text" />
                                    <span>kVA</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec">
                                <label htmlFor="">Transformer Primary Side Voltage</label>
                                <div>
                                    <input type="text" />
                                    <span>V</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec">
                                <label htmlFor="">Transformer Secondary Side Voltage</label>
                                <div>
                                    <input type="text" />
                                    <span>V</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec">
                                <label htmlFor="">Fault Level</label>
                                <div>
                                    <input type="text" />
                                    <span>MVA</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec">
                                <label htmlFor="">Transformer %Z</label>
                                <div>
                                    <input type="text" />
                                    <span>%</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec">
                                <label htmlFor="">Soil Resistivity ρ</label>
                                <div>
                                    <input type="text" />
                                    <span>Ωm</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec">
                                <label htmlFor="">Fault Time, t</label>
                                <div>
                                    <input type="text" />
                                    <span>Sec</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec">
                                <label htmlFor="">Earth Electrode - Nickel Sealed Copper Bonded Rod</label>
                                <div>
                                    <input type="text" />
                                    <span>mm</span>
                                    <input type="text" />
                                    <span>m</span>
                                </div>
                            </div>
                            <div className="DesignCalcFormSec fullRow">                                
                                <button onClick={(e)=>e.preventDefault()}>Calculate</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page