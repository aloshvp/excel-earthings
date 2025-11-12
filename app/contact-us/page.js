import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="contactUsWrapper">
        <CommonBanner pageName={"contact-us"}/>
        <div className="contactInfoListWrap">
          <div className="container">
              <div className="contactInfoList">
                <div className="contactInfoBx">
                    <span><Image src='/images/contactus/email.svg' width={50} height={50} alt="mail" title="mail"/></span>
                    <h2>Send Your Mail at</h2>
                    <Link href="mailto:mail@excelearthings.com">mail@excelearthings.com</Link>
                </div>
                <div className="contactInfoBx">
                    <span><Image src='/images/contactus/phone.svg' width={50} height={50} alt="phone" title="phone"/></span>
                    <h2>Customer Care</h2>
                    <Link href="tel:919048744551">+91 90487 44551</Link>
                </div>
                <div className="contactInfoBx">
                    <span><Image src='/images/contactus/whatsapp.svg' width={50} height={50} alt="whatsapp" title="whatsapp"/></span>
                    <h2>Have Any Question</h2>
                    <Link href="mailto:mail@excelearthings.cor">+91 90487 44551</Link>
                </div>
              </div>
          </div>
        </div>
        <div className="contactGetInTouchWrap">
          <div className="container">
            <div className="contactGetInTouch">
              <h3>Get in Touch</h3>
              <div className="getInBoxSet">
                  <div className="getInTouchBox">
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
                  <div className="getInTouchBox">
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
                  <div className="getInTouchBox">
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
          <div className="contactIndiaSec">
            <div className="indiaImg">
              <Image src='/images/contactus/india.png' className="img-fluid" width={800} height={884} alt="india" title="india"/>
            </div>

          </div>
        </div>
      
    </section>
  )
}

export default page