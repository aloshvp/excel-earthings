// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { milestones } from "@utils/staticData";
// import { animate } from "@motionone/dom";


// const AboutUsMilestones = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const yearRef = useRef(null);

//   // Animate year digits on change
//   useEffect(() => {
//     if (!yearRef.current) return;

//     const digits = yearRef.current.querySelectorAll(".digit");
//     digits.forEach((digit, i) => {
//       animate(
//         digit,
//         { rotateX: [90, 0], opacity: [0, 1] }, // Rotating digits
//         { duration: 0.6, delay: i * 0.1, easing: "ease-in-out" }
//       );
//     });
//   }, [activeIndex]);

//   return (
//     <section className="aboutUsMilestonesWrap">
//       <div className="container">
//         <div className="aboutUsMilestonesHead">
//           <h2>Milestones</h2>
//         </div>

//         {/* Timeline Slider */}
//         <div className="aboutUsMilestonesSlider">
//           <Swiper
//             slidesPerView={6}
//             spaceBetween={40}
//             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//             onClick={(swiper) => setActiveIndex(swiper.clickedIndex)}
//             className="timelineSwiper"
//           >
//             {milestones?.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className={`timelineItem ${activeIndex === index ? "active" : ""}`}
//                   onClick={() => setActiveIndex(index)}
//                 >
//                   <span className="year">{item?.year}</span>
//                   <span className="bubble"></span>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className="timelineLine"></div>
//         </div>

//         {/* Content Section */}
//         <div className="aboutUsMilestonesContent">
//           <div className="aboutUsMilestonesContentLft" ref={yearRef}>
//             {milestones[activeIndex]?.year.split("").map((digit, i) => (
//               <span key={i} className="digit">
//                 {digit}
//               </span>
//             ))}
//           </div>

//           <div className="aboutUsMilestonesContentRght">
//             <h3>{milestones[activeIndex]?.title}</h3>
//             <p>{milestones[activeIndex]?.desc}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsMilestones;



// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { milestones } from "@utils/staticData";
// import { animate, inView } from "@motionone/dom";

// const AboutUsMilestones = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const yearRef = useRef(null);

//   // Animate year digits on change
//   useEffect(() => {
//     if (!yearRef.current) return;

//     const digits = yearRef.current.querySelectorAll(".digit");
//     digits.forEach((digit, i) => {
//       animate(
//         digit,
//         { rotateX: [90, 0], opacity: [0, 1] }, // Rotating digits
//         { duration: 0.6, delay: i * 0.1, easing: "ease-in-out" }
//       );
//     });
//   }, [activeIndex]);

//   // Animate H2 when it comes into view
//   useEffect(() => {
//     const h2 = document.querySelector(".aboutUsMilestonesHead h2");
//     if (!h2) return;

//     inView(h2, () => {
//       animate(
//         h2,
//         { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0px)"] },
//         { duration: 0.5, easing: "ease-out" }
//       );
//     });
//   }, []);

//   return (
//     <section className="aboutUsMilestonesWrap">
//       <div className="container">
//         <div className="aboutUsMilestonesHead">
//           <h2>Milestones</h2>
//         </div>

//         {/* Timeline Slider */}
//         <div className="aboutUsMilestonesSlider">
//           <Swiper
//             slidesPerView={6}
//             spaceBetween={40}
//             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//             onClick={(swiper) => setActiveIndex(swiper.clickedIndex)}
//             className="timelineSwiper"
//           >
//             {milestones?.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className={`timelineItem ${activeIndex === index ? "active" : ""}`}
//                   onClick={() => setActiveIndex(index)}
//                 >
//                   <span className="year">{item?.year}</span>
//                   <span className="bubble"></span>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className="timelineLine"></div>
//         </div>

//         {/* Content Section */}
//         <div className="aboutUsMilestonesContent">
//           <div className="aboutUsMilestonesContentLft" ref={yearRef}>
//             {milestones[activeIndex]?.year.split("").map((digit, i) => (
//               <span key={i} className="digit">
//                 {digit}
//               </span>
//             ))}
//           </div>

//           <div className="aboutUsMilestonesContentRght">
//             <h3>{milestones[activeIndex]?.title}</h3>
//             <p>{milestones[activeIndex]?.desc}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsMilestones;


"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { milestones } from "@utils/staticData";
import { animate, inView } from "@motionone/dom";

const AboutUsMilestones = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const yearRef = useRef(null);
  const contentRightRef = useRef(null);

  // Animate year digits on change
  useEffect(() => {
    if (!yearRef.current) return;

    const digits = yearRef.current.querySelectorAll(".digit");
    digits.forEach((digit, i) => {
      animate(
        digit,
        { rotateX: [90, 0], opacity: [0, 1] }, // Rotating digits
        { duration: 0.6, delay: i * 0.1, easing: "ease-in-out" }
      );
    });
  }, [activeIndex]);

  // Animate right content (h3 + p) on active milestone change
  useEffect(() => {
    if (!contentRightRef.current) return;

    const elems = contentRightRef.current.querySelectorAll("h3, p");
    elems.forEach((el, i) => {
      animate(
        el,
        { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0px)"] },
        { duration: 0.5, delay: i * 0.12, easing: "ease-out" }
      );
    });
  }, [activeIndex]);

  // Animate H2 heading on scroll into view
  useEffect(() => {
    const h2 = document.querySelector(".aboutUsMilestonesHead h2");
    if (!h2) return;

    inView(h2, () => {
      animate(
        h2,
        { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0px)"] },
        { duration: 0.5, easing: "ease-out" }
      );
    });
  }, []);

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
                  <span className="bubble"></span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="timelineLine"></div>
        </div>

        {/* Content Section */}
        <div className="aboutUsMilestonesContent">
          <div className="aboutUsMilestonesContentLft" ref={yearRef}>
            {milestones[activeIndex]?.year.split("").map((digit, i) => (
              <span key={i} className="digit">
                {digit}
              </span>
            ))}
          </div>

          <div className="aboutUsMilestonesContentRght" ref={contentRightRef}>
            <h3>{milestones[activeIndex]?.title}</h3>
            <p>{milestones[activeIndex]?.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMilestones;

