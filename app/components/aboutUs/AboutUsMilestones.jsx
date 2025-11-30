"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { milestones } from "@utils/staticData";

const AboutUsMilestones = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const yearRef = useRef(null);
  const contentRightRef = useRef(null);

  // Simple CSS transitions for dynamic content changes
  useEffect(() => {
    if (yearRef.current) {
      const digits = yearRef.current.querySelectorAll(".digit");
      digits.forEach((digit, i) => {
        // Reset animation by removing and re-adding class
        digit.classList.remove("animate-digit");
        setTimeout(() => digit.classList.add("animate-digit"), 10);
      });
    }

    if (contentRightRef.current) {
      const elems = contentRightRef.current.querySelectorAll("h3, p");
      elems.forEach((el, i) => {
        // Reset animation
        el.classList.remove("animate-content");
        setTimeout(() => el.classList.add("animate-content"), 10 + i * 50);
      });
    }
  }, [activeIndex]);

  return (
    <section className="aboutUsMilestonesWrap">
      <div className="container">
        <div className="aboutUsMilestonesHead">
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">Milestones</h2>
        </div>

        {/* Timeline Slider */}
        <div className="aboutUsMilestonesSlider" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
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
                  <span className="bubble"></span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="timelineLine"></div>
        </div>

        {/* Content Section */}
        <div className="aboutUsMilestonesContent" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
          <div className="aboutUsMilestonesContentLft" ref={yearRef}>
            {milestones[activeIndex]?.year.split("").map((digit, i) => (
              <span key={i} className="digit animate-digit">
                {digit}
              </span>
            ))}
          </div>

          <div className="aboutUsMilestonesContentRght" ref={contentRightRef}>
            <h3 className="animate-content">{milestones[activeIndex]?.title}</h3>
            <p className="animate-content">{milestones[activeIndex]?.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMilestones;

