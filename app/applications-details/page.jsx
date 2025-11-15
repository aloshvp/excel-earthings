"use client";

import "@styles/staticbundles.scss";
import CommonBanner from "@common/CommonBanner";
import Image from "next/image";
import { useState } from "react";
import { applicationDetailsData } from "@utils/staticData";

const Page = () => {
    const [active, setActive] = useState(1);

    return (
        <section className="applicationDetailsWrap">
            <CommonBanner pageName={"applications-details"} />

            <div className="applicationDetailsBody">
                <div className="container">

                    <div className="applicationDetailsHead">
                        <h2>Industrial Installations</h2>
                    </div>

                    <div className="applicationDetailsContent">

                        {/* LEFT CONTENT - dynamic */}
                        <div className="applicationDetailsItemswrap">
                            {applicationDetailsData[active].map((item, index) => (
                                <div className="applicationDetailsItem" key={index}>
                                    <Image
                                        src={item.img}
                                        width={150}
                                        height={13}
                                        alt="Details"
                                    />
                                    <p>
                                        {item.title} <em></em> {item.desc}
                                    </p>

                                </div>
                            ))}
                        </div>

                        {/* RIGHT IMAGE WITH NUMBER BUTTONS */}
                        <div className="applicationDetailsItemImg">
                            <em>
                                <Image
                                    src="/images/applications/application-demo.png"
                                    alt="Industrial Installation"
                                    width={1150}
                                    height={647}
                                />

                                {/* clickable numbers */}
                                {[1, 2, 3, 4, 5, 6, 7].map(num => (
                                    <span
                                        key={num}
                                        className={`num${num} ${active === num ? "active" : ""}`}
                                        onClick={() => setActive(num)}
                                    >
                                        {num}
                                    </span>
                                ))}
                            </em>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
