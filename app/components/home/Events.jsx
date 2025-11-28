"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { eventsData } from "@utils/homeData";

const Events = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="eventsWrap">
            <div className="container">

                <div className="eventsBody">

                    <div className="eventsBodyLft" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <h2 className="homeCmnHead">Meet Excel in <em></em>Your City</h2>
                    </div>

                    {/* Slider navigation */}
                    <div className="eventsSliderNav" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <div ref={prevRef} className="eventNavBtn eventsPrevBtn" data-aos="fade-down" data-aos-duration="600" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
                        <div ref={nextRef} className="eventNavBtn eventsNextBtn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
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
                        {eventsData?.map((event, index) => (
                            <SwiperSlide key={event.id}>
                                <div className="eventItem" data-aos="fade-up" data-aos-delay={index * 150 + 600} data-aos-duration="700" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <div className="eventImg" data-aos="fade-up" data-aos-delay={index * 150 + 650} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            width={600}
                                            height={456}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div className="eventInfo">
                                        <h3 data-aos="fade-up" data-aos-delay={index * 150 + 750} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{event.title}</h3>

                                        <span data-aos="fade-up" data-aos-delay={index * 150 + 800} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50"><Image
                                            src="/images/home/icon-calendar.svg"
                                            width={25}
                                            height={25}
                                            alt="calendar"
                                            title="calendar"
                                        />
                                            {event.date}
                                        </span>

                                        <span data-aos="fade-up" data-aos-delay={index * 150 + 850} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50"><Image
                                            src="/images/home/icon-time.svg"
                                            width={25}
                                            height={25}
                                            alt="time"
                                            title="time"
                                        />
                                            {event.time}
                                        </span>

                                        <span data-aos="fade-up" data-aos-delay={index * 150 + 900} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50"><Image
                                            src="/images/home/icon-location.svg"
                                            width={25}
                                            height={25}
                                            alt="location"
                                            title="location"
                                        />
                                            {event.location}
                                        </span>

                                        <p data-aos="fade-up" data-aos-delay={index * 150 + 950} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{event.description}</p>
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
