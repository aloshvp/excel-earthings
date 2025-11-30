"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const AboutUsCeo = () => {
    const nameRef = useRef(null);

    useEffect(() => {
        // Typewriting effect for CEO name
        if (nameRef.current) {
            const fullText = nameRef.current.textContent;
            nameRef.current.textContent = "";
            let index = 0;

            const type = () => {
                if (index <= fullText.length) {
                    nameRef.current.textContent = fullText.slice(0, index);
                    index++;
                    setTimeout(type, 100); // slower typing: 150ms per character
                }
            };

            // Trigger typewriting when element is visible
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            type();
                            observer.disconnect(); // Only run once
                        }
                    });
                },
                { threshold: 0.5 }
            );

            observer.observe(nameRef.current);
        }
    }, []);

    return (
        <section className="aboutUsCeoWrap">
            <div className="container">
                <div className="aboutUsCeoContent">
                    {/* LEFT CONTENT */}
                    <div className="aboutUsCeoContentLft" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <em data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <Image
                                src="/images/static/team-NEW.png"
                                alt="CEO"
                                title="CEO"
                                width={600}
                                height={500}
                                className="img"
                            />
                        </em>
                        <span ref={nameRef} data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">Auguin C P</span>
                        <i data-aos="fade-up" data-aos-duration="600" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50">CEO - M/S. Excel Earthings</i>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="aboutUsCeoContentRght" data-aos="fade-up" data-aos-duration="800" data-aos-delay="250" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <em data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="doubleArrowIcon"
                            >
                                <path
                                    d="M11 19L4 12L11 5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="arrowFirst"
                                />
                                <path
                                    d="M19 19L12 12L19 5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="arrowSecond"
                                />
                            </svg>
                        </em>
                        <span data-aos="fade-up" data-aos-duration="600" data-aos-delay="350" data-aos-easing="ease-out-cubic" data-aos-offset="50">CEO&apos;s Message</span>
                        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            As a leader in the manufacturing of Electrical Earthing and Lightning Protection Products, we
                            are committed to maximizing client satisfaction. We take pride in our infrastructure and the
                            technology used to meet the demands and ever-changing needs of our clients. Our leadership in
                            this industry is directly attributed to our talented staff, whose dedicated attention fulfills
                            our client needs and executes effective solution to achieve a safest electrical environment in
                            the society, emphasizing our motto <strong>&ldquo;Be Safe with Excel Earthings&rdquo;</strong>
                        </p>
                        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="550" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            Our diverse business relies on the trust of our clients and all stakeholders. We recognize that
                            raising our corporate values and ensuring sustainable growth of the society are closely linked
                            together.
                        </p>
                        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="700" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            We look forward to your continued support in reaching our goal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsCeo;