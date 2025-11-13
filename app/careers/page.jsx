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
                        <div className="careersFormSec">
                            <form onSubmit={handleSubmit}>
                                <div className="careerFormHead">
                                    <h2>Looking for a Better Career Opportunity?</h2>
                                    <p>Choose a career with us, and together, let's create positive, long-lasting values and take your
                                        career to the next level.
                                    </p>
                                </div>
                                <span>
                                    <input type="text" placeholder="First Name" />
                                </span>
                                <span>
                                    <input type="text" placeholder="Last Name" />
                                </span>
                                <span>
                                    <input type="text" placeholder="Phone" />
                                </span>
                                <span>
                                    <input type="email" placeholder="Email" />
                                </span>
                                <span>
                                    <input type="text" placeholder="Location" />
                                </span>
                                <span>
                                    <input type="text" placeholder="Your Expertise" />
                                </span>
                                <span className="fileUpload">
                                    <i>Upload Your Resume</i>
                                    <div>
                                        <label htmlFor="resumeUpload" className="customFileLabel">
                                            Choose File
                                        </label>
                                        <input type="file" id="resumeUpload" onChange={handleFileChange} />
                                        <span className="fileName">{fileName}</span>
                                    </div>
                                </span>

                                <span>
                                    <button>Submit</button>
                                </span>

                            </form>
                        </div>
                        <div className="careersImgSec">
                            <Image
                                src="/images/static/careers-hero.png"
                                alt="careers"
                                title="careers"
                                priority
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