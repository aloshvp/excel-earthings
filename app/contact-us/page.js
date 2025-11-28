"use client";
import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = () => {

    
   const handleSubmit = async (event) => {
        event.preventDefault();

    }

   const [isEmHovered, setIsEmHovered] = useState(false);

  return (
    <section className="contactUsWrapper">
        <CommonBanner pageName={"contact-us"}/>
        <div className="contactInfoListWrap">
          <div className="container">
              <div className="contactInfoList">
                <div
                  className="contactInfoBx"
                  data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50"
                >
                    <span><div><Image src='/images/contactus/email.svg' width={50} height={50} alt="mail" title="mail"/></div></span>
                    <h2>Send Your Mail at</h2>
                    <Link href="mailto:mail@excelearthings.com">mail@excelearthings.com</Link>
                </div>
                <div
                  className="contactInfoBx"
                  data-aos="fade-up" data-aos-delay="350" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50"
                >
                    <span><div><Image src='/images/contactus/phone.svg' width={50} height={50} alt="phone" title="phone"/></div></span>
                    <h2>Customer Care</h2>
                    <Link href="tel:919048744551">+91 90487 44551</Link>
                </div>
                <div
                  className="contactInfoBx"
                  data-aos="fade-up" data-aos-delay="500" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50"
                >
                    <span><div><Image src='/images/contactus/whatsapp.svg' width={50} height={50} alt="whatsapp" title="whatsapp"/></div></span>
                    <h2>Have Any Question</h2>
                    <Link href="mailto:mail@excelearthings.cor">+91 90487 44551</Link>
                </div>
              </div>
          </div>
        </div>
        <div className="contactGetInTouchWrap">
          <div className="container">
            <div className="contactGetInTouch">
              <h3 data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">Get in Touch</h3>
              <div className="getInBoxSet">
                  <div
                    className="getInTouchBox"
                    data-aos="fade-up" data-aos-delay="400" data-aos-duration="700" data-aos-easing="ease-out-cubic" data-aos-offset="50"
                  >
                    <h4>Head Office</h4>
                    <span>
                      <em>Address</em>
                      <p><i>7/729 (A), Mannuthy P.O.</i> Thrissur, Kerala, India-680 651</p>
                    </span>
                    <span className="email">
                      <em>Email</em>
                      <Link href={"mailto:mail@excelearthings.com"}>mail@excelearthings.com</Link>
                    </span>
                  </div>
                  <div
                    className="getInTouchBox"
                    data-aos="fade-up" data-aos-delay="550" data-aos-duration="700" data-aos-easing="ease-out-cubic" data-aos-offset="50"
                  >
                    <h4>Marketing Division</h4>
                    <span>
                      <em>Address</em>
                      <p><i>1/667/5-6, Spectrum Tower, Udaya Nagar,</i> Ayyanthole P.O., Thrissur, Kerala, India - 680 003</p>
                    </span>
                    <span className="email">
                      <em>Email</em>
                      <Link href={"mailto:marketing@excelearthings.com"}>marketing@excelearthings.com</Link>
                    </span>
                  </div>
                  <div
                    className="getInTouchBox"
                    data-aos="fade-up" data-aos-delay="700" data-aos-duration="700" data-aos-easing="ease-out-cubic" data-aos-offset="50"
                  >
                    <h4>Factory</h4>
                    <span>
                      <em>Address</em>
                      <p><i>Plot No. 26,30 & 34, SIDCO Industrial Park,</i>  Chelakkara, Thrissur, Kerala, India-680587</p>
                    </span>
                    <span className="email">
                      <em>Email</em>
                      <Link href={"mailto:mail@excelearthings.com"}>mail@excelearthings.com</Link>
                    </span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactIndiaWrap">
          <div className="container">
            <div className="contactIndiaSec">
              <div className="contactIndiaMain">
                <div className="contactMapHead">
                  <h3>Locations</h3>
                  <p>Lorem ipsum - All the facts - Lipsum generator</p>
                </div>
                <div className="indiaImg">
                  <Image src='/images/contactus/india.png' className="img-fluid" width={808} height={884} alt="india" title="india"/>
                  <span className="indIconSet one">
                    <em onMouseEnter={() => setIsEmHovered(true)}
                      onMouseLeave={() => setIsEmHovered(false)}
                      ></em>
                    <div className={isEmHovered?"active":""}>
                      <h6>Kerala</h6>
                      <p>Head Office-Mannuthy</p>
                      <p>Factory-Thrissur</p>
                      <p>Marketing Division - Ayyanthole</p>
                    </div>
                  </span>
                   <span className="indIconSet two">
                    <em></em>
                  </span>
                   <span className="indIconSet three">
                    <em></em>
                  </span>
                   <span className="indIconSet four">
                    <em></em>
                  </span>
                     <span className="indIconSet five">
                    <em></em>
                  </span>
                     <span className="indIconSet six">
                    <em></em>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactEnqFormWrap">
          <div className="container">
            <div className="contactEnqSec">
              <h4>Enquiry</h4>
              <p>Please feel free to fill out the enquiry form. We will be in touch with you shortly.</p>
              <form className="formMain" onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
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
      
    </section>
  )
}

export default Page