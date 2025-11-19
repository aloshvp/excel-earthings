"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { milestones } from "@utils/staticData";

const AboutUsMilestones = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="aboutUsMilestonesWrap">
            <div className="container">
                <div className="aboutUsMilestonesHead">
                    <h2>Milestones</h2>
                </div>

                {/* Timeline Slider */}
                <div className="aboutUsMilestonesSlider">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={40}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        onClick={(swiper) => setActiveIndex(swiper.clickedIndex)}
                        className="timelineSwiper"
                    >
                        {milestones?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`timelineItem ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span className="year">{item?.year}</span>

                                    {/* Bubble point */}
                                    <span className="bubble"></span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Horizontal line */}
                    <div className="timelineLine"></div>
                </div>

                {/* Content Section */}
                <div className="aboutUsMilestonesContent">
                    <div className="aboutUsMilestonesContentLft">
                        <span>{milestones[activeIndex]?.year}</span>
                    </div>

                    <div className="aboutUsMilestonesContentRght">
                        <h3>{milestones[activeIndex]?.title}</h3>
                        <p>{milestones[activeIndex]?.desc}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUsMilestones;
