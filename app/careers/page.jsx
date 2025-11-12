"use client"
import "@styles/staticbundles.scss";
import CommonBanner from '@common/CommonBanner'
import Image from 'next/image'


const page = () => {
    return (
        <section className='careersWrap'>
            <CommonBanner pageName={"careers"} />
            <div className="careersBodyWrap">
                <div className="container">
                    <div className="careersBody">
                        <div className="careersFormSec">
                            <form>
                                <h2>Looking for a Better Career Opportunity?</h2>
                                <p>Choose a career with us, and together, let's create positive, long-lasting values and take your
                                    career to the next level.
                                </p>
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
                                <span>
                                    <i>Upload Your Resume</i>
                                    <input type="file" />
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