'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { specialitiesSlides } from '@/utils/homeData';

const OurSpecialities = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="ourSpecialitiesWrap">
            <div className="container">
                <div className="ourSpecialitiesHead">
                    <h4 className="homeCmnSubHead">Specialities</h4>
                    <h2 className="homeCmnHead">Our Specialities</h2>
                </div>

                <div className="ourSpecialitiesBody">
                    {/* Navigation Buttons */}
                    <div className="ourSpecialitiesSliderNav">
                        <div ref={prevRef} className="ourSpecialitiesSliderBtn ourSpecialitiesPrevBtn"></div>
                        <div ref={nextRef} className="ourSpecialitiesSliderBtn ourSpecialitiesNextBtn"></div>
                    </div>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={40}
                        slidesPerView={1}
                        loop
                        allowTouchMove={false}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                        }}
                    >
                        {specialitiesSlides.map((slide, i) => (
                            <SwiperSlide key={i}>
                                <div
                                    className="specialitySlide"
                                    style={{
                                        backgroundImage: `url(${slide.bg})`,
                                    }}
                                >
                                    <h3 className="specialitySlideTitle">{slide.title}</h3>

                                    <div className="specialityItems">
                                        {slide.items.map((item, index) => (
                                            <div className="specialityCard" key={index}>
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={400}
                                                    height={300}
                                                    className="specialityImage"
                                                />
                                                <div className="specialityOverlay">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* ✅ Marquee at bottom */}
            <div className="ourSpecialitiesMarquee">
                <Marquee gradient={false} speed={50}>
                    <span className="marqueeText">
                        Saving lives & protecting equipments Saving lives & protecting equipments
                    </span>
                </Marquee>
            </div>
        </section>
    );
};

export default OurSpecialities;
