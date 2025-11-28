"use client"
import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner";
import { useState } from "react";
const page = () => {
    
    const [businessCardName, setBusinessCardName] = useState('No File Selected');
    const [businessCardFile, setBusinessCardFile] = useState(null);

    const [companyProfileName, setCompanyProfileName] = useState('No File Selected');
    const [companyProfileFile, setCompanyProfileFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files ? e.target.files[0] : null;
        const name = e.target.name;

        const shortenFileName = (fullName) => {
            if (!fullName) return 'No File Selected';
            
            const lastDotIndex = fullName.lastIndexOf('.');
            
            if (lastDotIndex <= 0) {
                if (fullName.length > 10) {
                    return fullName.substring(0, 10) + '...';
                }
                return fullName;
            }

            const name = fullName.substring(0, lastDotIndex);
            const extension = fullName.substring(lastDotIndex); 
            
            if (name.length > 10) {
                return name.substring(0, 10) + '...' + extension;
            }
            
            return fullName;
        };

        if (file) {
            const fileName = shortenFileName(file.name);
            if (name === 'businessCard') {
                setBusinessCardName(fileName);
                setBusinessCardFile(file);
            } else if (name === 'companyProfile') {
                setCompanyProfileName(fileName);
                setCompanyProfileFile(file);
            }
        } else {
            if (name === 'businessCard') {
                setBusinessCardName('No File Selected');
                setBusinessCardFile(null);
            } else if (name === 'companyProfile') {
                setCompanyProfileName('No File Selected');
                setCompanyProfileFile(null);
            }
        }
    };

    const triggerFileSelect = (id) => {
        document.getElementById(id).click();
    };

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
                <div className="dealerLeftSide" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                    <h2>Dealership</h2>
                    <h3>Join Hands with Excel Earthings</h3>
                </div>
                <div className="dealerRightSide" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                    <p><i>Excel Earthings is looking for distributors</i> worldwide to promote our products.</p>
                    <div className="delarContainer">
                        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <h3>By becoming our distributor, you can:</h3>
                            <ul>
                                <li>Deal with very high-quality products in cost effective manner</li>
                                <li>Strong Technical Support</li>
                                <li>Work with a very reliable supplier</li>
                                <li>Grow prominently in the market</li>
                            </ul>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <h3>To become our distributor, you need to:</h3>
                            <ul>
                                <li>Have adequate Sales and Technical Team</li>
                                <li>Have a good Market Network</li>
                            </ul>
                        </div>
                    </div>
                    <p className="outside" data-aos="fade-up" data-aos-duration="700" data-aos-delay="700" data-aos-easing="ease-out-cubic" data-aos-offset="50">Get in touch with us at <a href="mailto:mail@excelearthing.com">mail@excelearthing.com</a> or fill out the contact form.</p>
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
                                        <button type="button" className="browse-button" onClick={() => triggerFileSelect('businessCard')}>Browse</button>
                                        <span id="businessCardFileName" className="file-selected-text">{businessCardName}</span>
                                        <input type="file" onChange={handleFileChange} id="businessCard" name="businessCard" className="hidden-file-input" accept=".jpg, .jpeg, .png, .pdf"/>
                                    </div>
                                </div>
                                <div className="formInput noborder">
                                    <label htmlFor="companyProfile" className="file-label-text">Company Profile</label>
                                    <div className="file-upload-group">
                                        <button type="button" className="browse-button" onClick={() => triggerFileSelect('companyProfile')}>Browse</button>
                                        <span id="companyProfileFileName" className="file-selected-text">{companyProfileName}</span>
                                        <input type="file" onChange={handleFileChange} id="companyProfile" name="companyProfile" className="hidden-file-input" accept=".pdf, .doc, .docx"/>
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