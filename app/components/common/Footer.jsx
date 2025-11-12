import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='footerWrap'>
            <div className="container">
                <div className="footerBody">

                    <div className="footerLogoSec">
                        <div className="footerLogoImg">
                            <Image src='/images/logo-excel-earthings.svg' width={340} height={100} alt="Excel Earthings" title="Excel Earthings" />
                            <div className="dividerVertical"></div> {/* Divider between images */}
                            <Image src='/images/logo-excel-safepower.svg' width={238} height={70} alt="Excel Safepower" title="Excel Safepower" />
                        </div>

                        <div className="footerContact">
                            <div>
                                <b>Customer Care</b>
                                <span><Link href={"tel:90487 44551"}>+91 90487 44551</Link></span>
                            </div>
                            <div className="dividerVertical"></div> {/* Divider between contact items */}
                            <div>
                                <b>Send Your Mail at</b>
                                <span><Link href={"mailto:mail@excelearthings.com"}>mail@excelearthings.com</Link></span>
                            </div>
                        </div>
                    </div>

                    <div className="footerDividerHorizontal"></div>

                    <div className="footerAddressSec">
                        <div className="footerAddressSecLft">
                            <b>Head Ofice</b>
                            <p>7/729 (A), Mannuthy P.O. <em></em>
                                Thrissur, Kerala, India - 680 651 </p>
                            <b>Email</b>
                            <span><Link href={"mailto:mail@excelearthings.com"}>mail@excelearthings.com</Link></span>
                        </div>
                        <div className="footerAddressSecCntr">
                            <b>Factory</b>
                            <p>Plot No. 26,30 & 34, SIDCO Industrial Park,<em></em>
                                Chelakkara, Thrissur, Kerala, India - 680 587 </p>
                            <b>Email</b>
                            <span><Link href={"mailto:mail@excelearthings.com"}>mail@excelearthings.com</Link></span>
                        </div>
                        <div className="footerAddressSecRght">
                            <b>Marketing Division</b>
                            <p>1/667/5-6, Spectrum Tower, Udaya Nagar,<em></em>
                                Ayyanthole P.O. Thrissur, Kerala, India - 680 003 </p>
                            <b>Email</b>
                            <span><Link href={"mailto:mail@excelearthings.com"}>mail@excelearthings.com</Link></span>
                        </div>
                    </div>

                    <div className="footerDividerHorizontal"></div>

                    <div className="footerAboutSec">
                        <div className="footerAboutCont">
                            <b>About Excel Earthings</b>
                            <p>We are one of the Leading Manufacturer and Technical Solution
                                <em></em>
                                Provider in the field of Electrical Earthing and Lightning Protection. By
                                <em></em>
                                providing suitable designs, awareness & customized products, we
                                <em></em>
                                ensure Electrical Safety and Power Quality Improvements in the
                                <em></em>
                                Electrical Network. </p>
                            <Link href="" scroll={false}>Learn More</Link>
                        </div>
                        <div className="footerLinks">
                            <b>Quick Links</b>
                            <div className='footerLinkNav'>
                                <ul>
                                    <li><Link href="" scroll={false}>Home</Link></li>
                                    <li><Link href="" scroll={false}>About Us</Link></li>
                                    <li><Link href="" scroll={false}>Products</Link></li>
                                    <li><Link href="" scroll={false}>Certifications & Quality Assurance</Link></li>
                                    <li><Link href="/approvals-and-associates">Approvals & Associates</Link></li>
                                    <li><Link href="" scroll={false}>Applications</Link></li>
                                    <li><Link href="" scroll={false}>Dealership</Link></li>
                                </ul>
                                <ul>
                                    <li><Link href="" scroll={false}>E-Learning</Link></li>
                                    <li><Link href="" scroll={false}>Transformer Earthing Design</Link></li>
                                    <li><Link href="/faq" >Faq</Link></li>
                                    <li><Link href="" scroll={false}>Careers</Link></li>
                                    <li><Link href="" scroll={false}>Insights & Updates</Link></li>
                                    <li><Link href="" scroll={false}>Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footerSocialMedia">
                            <b>Follow Us</b>
                            <div className="footerSocialMediaLinks">
                                <Link href="" scroll={false}>
                                    <Image
                                        src='/images/icons/facebook.svg'
                                        alt="facebook"
                                        title="facebook"
                                        width={10}
                                        height={10}
                                    />
                                </Link>
                                <Link href="" scroll={false}>
                                    <Image
                                        src='/images/icons/instagram.svg'
                                        alt="instagram"
                                        title="instagram"
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                                <Link href="" scroll={false}>
                                    <Image
                                        src='/images/icons/youtube.svg'
                                        alt="youtube"
                                        title="youtube"
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                                {/* <Link href="" scroll={false}>
                                    <Image
                                        src='/images/icons/linkedin.svg'
                                        alt="linkedin"
                                        title="linkedin"
                                        width={15}
                                        height={15}
                                    />
                                </Link> */}
                                <Link href="" scroll={false}>
                                    <Image
                                        src='/images/icons/twitter.svg'
                                        alt="twitter"
                                        title="twitter"
                                        width={15}
                                        height={15}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="footerDividerHorizontal"></div>

                    <div className="footerBottomSec">
                        <div className="footerBottomSecLft">
                            <p>© {new Date().getFullYear()} M/S.Excel Earthings. All Rights Reserved.</p>
                        </div>
                        <div className="footerBottomSecRght">
                            <em>Developed by Marin Infotech</em>
                        </div>
                    </div>

                </div>
            </div>
        </footer >
    )
}

export default Footer