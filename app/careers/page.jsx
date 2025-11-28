"use client"
import "@styles/staticbundles.scss";
import CommonBanner from '@common/CommonBanner'
import Image from 'next/image'
import { useState } from "react";


const page = () => {
    const [fileName, setFileName] = useState("No file selected");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : "No file selected");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <section className='careersWrap'>
            <CommonBanner pageName={"careers"} />
            <div className="careersBodyWrap">
                <div className="container">
                    <div className="careersBody">
                        <div className="careersFormSec" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <form onSubmit={handleSubmit}>
                                <div className="careerFormHead" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <h2>Looking for a Better Career Opportunity?</h2>
                                    <p>Choose a career with us, and together, let's create positive, long-lasting values and take your
                                        career to the next level.
                                    </p>
                                </div>
                                <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <input type="text" placeholder="First Name" />
                                </span>
                                <span data-aos="fade-up" data-aos-delay="550" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <input type="text" placeholder="Last Name" />
                                </span>
                                <span data-aos="fade-up" data-aos-delay="600" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <input type="text" placeholder="Phone" />
                                </span>
                                <span data-aos="fade-up" data-aos-delay="650" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <input type="email" placeholder="Email" />
                                </span>
                                <span data-aos="fade-up" data-aos-delay="700" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <input type="text" placeholder="Location" />
                                </span>
                                <span data-aos="fade-up" data-aos-delay="750" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <input type="text" placeholder="Your Expertise" />
                                </span>
                                <span className="fileUpload" data-aos="fade-up" data-aos-delay="800" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <i>Upload Your Resume</i>
                                    <div>
                                        <label htmlFor="resumeUpload" className="customFileLabel">
                                            Choose File
                                        </label>
                                        <input type="file" id="resumeUpload" onChange={handleFileChange} />
                                        <span className="fileName">{fileName}</span>
                                    </div>
                                </span>
                                <span className="captchaSec" data-aos="fade-up" data-aos-delay="850" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <div className="captchaText">ABWI</div>
                                    <input type="text" className="captchaInput" placeholder="Enter Captcha" />
                                    <div className="captchaReloadBtn">
                                        <Image
                                            src="/images/icons/arrow-rotate-right.svg"
                                            alt="careers"
                                            title="reload"
                                            width={25}
                                            height={25}
                                        />
                                    </div>
                                </span>

                                <span data-aos="fade-up" data-aos-delay="900" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <button>Submit</button>
                                </span>

                            </form>
                        </div>
                        <div className="careersImgSec" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <Image
                                src="/images/static/careers-hero.png"
                                alt="careers"
                                title="careers"
                                width={845}
                                height={928}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page