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

                    <div className="eventsBodyLft">
                        <h2 className="homeCmnHead">Meet Excel in <em></em>Your City</h2>
                    </div>

                    {/* Slider navigation */}
                    <div className="eventsSliderNav">
                        <div ref={prevRef} className="eventNavBtn eventsPrevBtn"></div>
                        <div ref={nextRef} className="eventNavBtn eventsNextBtn"></div>
                    </div>


                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={25}
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
                        className="eventSliderWrap"
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
                                    <div className="eventInfo">
                                        <h3>{event.title}</h3>

                                        <span><Image
                                            src="/images/home/icon-calendar.svg"
                                            width={25}
                                            height={25}
                                            alt="calendar"
                                            title="calendar"
                                        />
                                            {event.date}
                                        </span>

                                        <span><Image
                                            src="/images/home/icon-time.svg"
                                            width={25}
                                            height={25}
                                            alt="time"
                                            title="time"
                                        />
                                            {event.time}
                                        </span>

                                        <span><Image
                                            src="/images/home/icon-location.svg"
                                            width={25}
                                            height={25}
                                            alt="location"
                                            title="location"
                                        />
                                            {event.location}
                                        </span>

                                        <p>{event.description}</p>
                                    </div>
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
