"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { eventsData } from "@/utils/homeData";

const Events = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="eventsWrap">
            <div className="container">

                <div className="eventsBody">
                    {/* Slider navigation */}
                    <div className="eventsSliderNav">
                        <div ref={prevRef} className="eventNavBtn eventsPrevBtn"></div>
                        <div ref={nextRef} className="eventNavBtn eventsNextBtn"></div>
                    </div>


                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop
                        allowTouchMove={false} 
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                        }}
                    >
                        {eventsData?.map((event) => (
                            <SwiperSlide key={event.id}>
                                <div className="eventItem">
                                    <div className="eventImg">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            width={600}
                                            height={456}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    {/* <div className="eventInfo">
                                        <h3>{event.title}</h3>
                                        <span>{event.date}</span>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Events;
