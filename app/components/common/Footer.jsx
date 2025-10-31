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
                            <Image src='/images/logo-excel-earthings.svg' width={180} height={30} alt="" title="" />
                            <div className="dividerVertical"></div> {/* Divider between images */}
                            <Image src='/images/logo-excel-safepower.svg' width={180} height={30} alt="" title="" />
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
                            <Link href=""></Link>
                        </div>
                        <div className="footerLinks">
                            <b></b>
                            <div className='footerLinkNav'>
                                <ul>
                                    <li><Link href="">Home</Link></li>
                                    <li><Link href="">About Us</Link></li>
                                    <li><Link href="">Products</Link></li>
                                    <li><Link href="">Certifications & Quality Assurance</Link></li>
                                    <li><Link href="">Approvals & Associates</Link></li>
                                    <li><Link href="">Applications</Link></li>
                                    <li><Link href="">Dealership</Link></li>
                                </ul>
                                <ul>
                                    <li><Link href="">E-Learning</Link></li>
                                    <li><Link href="">Transformer Earthing Design</Link></li>
                                    <li><Link href="">Faq</Link></li>
                                    <li><Link href="">Careers</Link></li>
                                    <li><Link href="">Insights & Updates</Link></li>
                                    <li><Link href="">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footerSocialMedia">
                            <b>Follow Us</b>
                            <div className="footerSocialMediaLinks">
                                <Image
                                    src='/images/icons/facebook.svg'
                                    alt="facebook"
                                    title="facebook"
                                    width={20}
                                    height={20}
                                />
                                <Image
                                    src='/images/icons/facebook.svg'
                                    alt="facebook"
                                    title="facebook"
                                    width={20}
                                    height={20}
                                />
                                <Image
                                    src='/images/icons/facebook.svg'
                                    alt="facebook"
                                    title="facebook"
                                    width={20}
                                    height={20}
                                />
                                <Image
                                    src='/images/icons/facebook.svg'
                                    alt="facebook"
                                    title="facebook"
                                    width={20}
                                    height={20}
                                />
                                <Image
                                    src='/images/icons/facebook.svg'
                                    alt="facebook"
                                    title="facebook"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="footerDividerHorizontal"></div>

                    <div className="footerBottomSec">
                        <div className="footerBottomSecLft">
                            <p>© 2025  M/S.Excel Earthings. All Rights Reserved.</p>
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