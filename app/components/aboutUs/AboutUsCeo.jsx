// "use client"
// import Image from 'next/image'


// const AboutUsCeo = () => {
//     return (
//         <section className='aboutUsCeoWrap'>
//             <div className="container">
//                 <div className="aboutUsCeoContent">
//                     <div className="aboutUsCeoContentLft">
//                         <em>
//                             <Image
//                                 src="/images/static/team-NEW.png"
//                                 alt="CEO"
//                                 title="CEO"
//                                 width={600}
//                                 height={500}
//                                 className='img'
//                             />
//                         </em>
//                         <span>Auguin C P</span>
//                         <i>CEO -  M/S. Excel Earthings</i>
//                     </div>
//                     <div className="aboutUsCeoContentRght">
//                         {/* <em>
//                             <Image
//                                 src="/images/static/doulbe-arrow.svg"
//                                 alt="arrow"
//                                 width={100}
//                                 height={100}
//                                 className='img'
//                             />
//                         </em> */}
//                         <em>
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="doubleArrowIcon">
//                                 {/* First Arrow (Left) */}
//                                 <path d="M11 19L4 12L11 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrowFirst" />

//                                 {/* Second Arrow (Right - follows the first) */}
//                                 <path d="M19 19L12 12L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrowSecond" />
//                             </svg>
//                         </em>
//                         <span>CEO’s Message</span>
//                         <p>
//                             As a leader in the manufacturing of Electrical Earthing and Lightning Protection Products, we
//                             are committed to maximizing client satisfaction. We take pride in our infrastructure and the
//                             technology used to meet the demands and ever-changing needs of our clients. Our leadership in
//                             this industry is directly attributed to our talented staff, whose dedicated attention fulfills
//                             our client needs and executes effective solution to achieve a safest electrical environment in
//                             the society, emphasizing our motto  <strong>“Be Safe with Excel Earthings”</strong>
//                         </p>
//                         <p>
//                             Our diverse business relies on the trust of our clients and all stakeholders. We recognize that
//                             raising our corporate values and ensuring sustainable growth of the society are closely linked
//                             together.
//                         </p>
//                         <p>
//                             We look forward to your continued support in reaching our goal.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default AboutUsCeo







"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, inView } from "@motionone/dom";

const AboutUsCeo = () => {
    const nameRef = useRef(null);

    useEffect(() => {
        // Fade up left content
        inView(".aboutUsCeoContentLft", ({ target }) => {
            animate(
                target,
                { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] },
                { duration: 0.6, easing: "ease-out" }
            );
        });

        // Fade up right content
        inView(".aboutUsCeoContentRght", ({ target }) => {
            animate(
                target,
                { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] },
                { duration: 0.6, easing: "ease-out" }
            );
        });

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

            // Trigger typewriting when in view
            inView(nameRef.current, () => {
                type();
            });
        }

    }, []);

    return (
        <section className="aboutUsCeoWrap">
            <div className="container">
                <div className="aboutUsCeoContent">
                    {/* LEFT CONTENT */}
                    <div className="aboutUsCeoContentLft">
                        <em>
                            <Image
                                src="/images/static/team-NEW.png"
                                alt="CEO"
                                title="CEO"
                                width={600}
                                height={500}
                                className="img"
                            />
                        </em>
                        <span ref={nameRef}>Auguin C P</span>
                        <i>CEO - M/S. Excel Earthings</i>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="aboutUsCeoContentRght">
                        <em>
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
                        <span>CEO’s Message</span>
                        <p>
                            As a leader in the manufacturing of Electrical Earthing and Lightning Protection Products, we
                            are committed to maximizing client satisfaction. We take pride in our infrastructure and the
                            technology used to meet the demands and ever-changing needs of our clients. Our leadership in
                            this industry is directly attributed to our talented staff, whose dedicated attention fulfills
                            our client needs and executes effective solution to achieve a safest electrical environment in
                            the society, emphasizing our motto <strong>“Be Safe with Excel Earthings”</strong>
                        </p>
                        <p>
                            Our diverse business relies on the trust of our clients and all stakeholders. We recognize that
                            raising our corporate values and ensuring sustainable growth of the society are closely linked
                            together.
                        </p>
                        <p>
                            We look forward to your continued support in reaching our goal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsCeo;