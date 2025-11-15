"use client"
import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner";
const page = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

    }
  return (
    <>
    <section className="dealerShipMainWrapper">
    <CommonBanner pageName={"dealership"}/>
    <div className="dealerShipWraper">
        <div className="container">
            <div className="dealerShipCntSec">
                <div className="dealerLeftSide">
                    <h2>Dealership</h2>
                    <h3>Join Hands with Excel Earthings</h3>
                </div>
                <div className="dealerRightSide">
                    <p>Excel Earthings is looking for distributors worldwide to promote our products.</p>
                    <div className="delarContainer">
                        <div>
                            <h3>By becoming our distributor, you can:</h3>
                            <ul>
                                <li>Deal with very high-quality products in cost effective manner</li>
                                <li>Strong Technical Support</li>
                                <li>Work with a very reliable supplier</li>
                                <li>Grow prominently in the market</li>
                            </ul>
                        </div>
                        <div>
                            <h3>To become our distributor, you need to:</h3>
                            <ul>
                                <li>Have adequate Sales and Technical Team</li>
                                <li>Have a good Market Network</li>
                            </ul>
                        </div>
                    </div>
                    <p>Get in touch with us at <a href="mailto:mail@excelearthing.com">mail@excelearthing.com</a> or fill out the contact form.</p>
                </div>
            </div>
            <div className="dealerShipFormSec">
                <div className="contactEnqSec">
            <h4>Enquiry</h4>
            <p>Please feel free to fill out the enquiry form. We will be in touch with you shortly.</p>
            <form className="formMain" onSubmit={handleSubmit}>
            <div className="formGroup">
                <div className="formInput">
                <input type="text"  name="name" id="name" placeholder="Name" autoComplete="off" maxLength={50}/>
                </div>
                <div className="formInput">
                <input type="text"  name="mobile" id="mobile" placeholder="Mobile" autoComplete="off" maxLength={10}/>
                </div>
            </div>
                <div className="formGroup">
                <div className="formInput">
                <input type="text"  name="email" id="email" placeholder="Email" autoComplete="off" maxLength={300}/>
                </div>
                <div className="formInput">
                <input type="text"  name="subject" id="subject" placeholder="Subject" autoComplete="off" maxLength={500}/>
                </div>
            </div>
            <div className="formGroup">
                <div className="formInput">
                    <textarea  name="message" id="message" rows="4" cols="50" placeholder="Message"></textarea>
                </div>
            </div>
            <div className="formGroup nogrow">
                <div className="formInput mxwcap">
                    <div className="frmCaptcha">ABWI</div>
                </div>
                <div className="formInput mxwcapinp">
                <input type="text"  name="captcha" id="captcha" placeholder="Captcha" autoComplete="off" maxLength={4}/>
                </div>
                <div className="formInput mxrefresh">
                    <a href="" className="refreshIcon"></a>
                </div>
            </div>
                <div className="formGroup">
                    <button className="formBtn" >Submit</button>
                </div>
            </form>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default page