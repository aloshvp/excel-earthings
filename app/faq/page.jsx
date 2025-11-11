"use client"
import "@styles/staticbundles.scss";
import CommonBanner from '@common/CommonBanner';
import { useState } from "react";
import { faqData } from '@utils/staticData';

const page = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(prev => (prev === index ? -1 : index));
    };

    return (
        <section className='faqWrapper'>
            <CommonBanner pageName={"faq"} />
            <div className="faqBody">
                <div className="container">
                    <div className="faqList">
                        {faqData.map((item, idx) => (
                            <div key={idx} className={`faqItem ${openIndex === idx ? 'open' : ''}`}>
                                <div className="faqHeading" onClick={() => toggleFaq(idx)}>
                                    <h3>{item.heading}</h3>
                                    <span
                                        className="faqToggle"
                                        style={{
                                            display: 'inline-block',
                                            transition: 'transform 0.3s ease',
                                            transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)'
                                        }}
                                    >
                                        {/* Down arrow SVG */}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    className="faqContent"
                                    style={{
                                        maxHeight: openIndex === idx ? '500px' : '0',
                                        transition: 'max-height 0.5s ease',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
