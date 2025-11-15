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
                    <p><i>Excel Earthings is looking for distributors</i> worldwide to promote our products.</p>
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
                    <p className="outside">Get in touch with us at <a href="mailto:mail@excelearthing.com">mail@excelearthing.com</a> or fill out the contact form.</p>
                </div>
            </div>
        </div>
         <div className="dealerShipFormSec">
                <div className="contactEnqFormWrap">
                    <div className="container">
                        <div className="contactEnqSec">
                        <h4>For Dealership FillOut The Form Below & We'll Get in Touch</h4>
                        <form className="formMain" onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                            <div className="formGroup">
                                <div className="formInput">
                                    <input type="text" id="companyName" name="companyName" placeholder="Company Name" />
                                </div>
                                <div className="formInput">
                                    <input type="text" id="contactPerson" name="contactPerson" placeholder="Contact Person Name" />
                                </div>
                            </div>
                            <div className="formGroup">
                                <div className="formInput">
                                    <input type="email" id="emailId" name="emailId" placeholder="Email Id" />
                                </div>
                                <div className="formInput">
                                    <input type="tel" id="mobile" name="mobile" placeholder="Mobile"/>
                                </div>
                            </div>
                            <div className="formGroup">
                                <div className="formInput noborder">
                                    <label htmlFor="businessCard" className="file-label-text">Business Card</label>
                                    <div className="file-upload-group">
                                        <button type="button" className="browse-button" >Browse</button>
                                        <span id="businessCardFileName" className="file-selected-text">No File Selected</span>
                                        <input type="file" id="businessCard" name="businessCard" className="hidden-file-input" accept=".jpg, .jpeg, .png, .pdf"/>
                                    </div>
                                </div>
                                <div className="formInput noborder">
                                    <label htmlFor="companyProfile" className="file-label-text">Company Profile</label>
                                    <div className="file-upload-group">
                                        <button type="button" className="browse-button" >Browse</button>
                                        <span id="companyProfileFileName" className="file-selected-text">No File Selected</span>
                                        <input type="file" id="companyProfile" name="companyProfile" className="hidden-file-input" accept=".pdf, .doc, .docx"/>
                                    </div>
                                </div>
                            </div>
                            <div className="formGroup">
                                <div className="formInput">
                                    <textarea id="address" name="address" rows="4" cols="50" placeholder="Address"></textarea>
                                </div>
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
    </div>
    </section>
    </>
  )
}

export default page