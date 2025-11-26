"use client"
import "@styles/staticbundles.scss";
import CommonBanner from '@common/CommonBanner';
import Image from "next/image";
import { useState } from "react";
import useInViewFade from "@functions/useInViewFade";
import { faqData } from '@utils/staticData';

const Page = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(prev => (prev === index ? -1 : index));
    };

    // Heading: fade up on view
    useInViewFade(".faqHead h2", {
        offset: 20,
        duration: 0.35,
        easing: "ease-out",
    });

    // FAQ items: fade up with stagger on view
    useInViewFade(".faqItem", {
        offset: 30,
        duration: 0.45,
        easing: "ease-out",
        staggerField: "index",
        staggerStep: 0.05,
    });

    return (
        <section className='faqWrapper'>
            <CommonBanner pageName={"faq"} />
            <div className="faqBody">
                <div className="container">
                    <div className="faqHead">
                        <h2 style={{ opacity: 0, transform: "translateY(20px)" }}>Faq</h2>
                    </div>
                    <div className="faqList">
                        {faqData.map((item, idx) => (
                            <div
                                key={idx}
                                className={`faqItem ${openIndex === idx ? 'open' : ''}`}
                                data-index={idx}
                                style={{ opacity: 0, transform: "translateY(30px)" }}
                            >
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
                                        <Image
                                            src="/images/icons/faq-arrow.svg"
                                            alt="toggle arrow"
                                            width={16}
                                            height={16}
                                        />
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

export default Page;
