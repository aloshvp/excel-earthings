'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { specialitiesSlides } from '@utils/homeData';

const OurSpecialities = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="ourSpecialitiesWrap">
            <div className="container">
                <div className="ourSpecialitiesHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                    <h4 className="homeCmnSubHead">Specialities</h4>
                    <h2 className="homeCmnHead">Our Specialities</h2>
                </div>

                <div className="ourSpecialitiesBody">
                    {/* Navigation Buttons */}
                    <div className="ourSpecialitiesSliderNav" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <div ref={prevRef} className="ourSpecialitiesSliderBtn ourSpecialitiesPrevBtn" data-aos="fade-down" data-aos-duration="600" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
                        <div ref={nextRef} className="ourSpecialitiesSliderBtn ourSpecialitiesNextBtn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
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
                            320: { slidesPerView: 1 },
                            1300: { slidesPerView: 2 },
                        }}
                    >
                        {specialitiesSlides.map((slide, i) => (
                            <SwiperSlide key={i}>
                                <div className='specialitySlideWrap' data-aos="fade-up" data-aos-delay={i * 200 + 600} data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <div
                                        className="specialitySlide"
                                        style={{
                                            backgroundImage: `url(${slide.bg})`,
                                        }}
                                    >
                                        <div className="specialityOverlay"></div>
                                        <div className="specialityItems">
                                            {slide.items.map((item, index) => (
                                                <div className="specialityCard" key={index} data-aos="fade-up" data-aos-delay={i * 200 + 700 + index * 100} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                                    <div className="specialityImageWrap">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            width={150}
                                                            height={150}
                                                            className="specialityImage"
                                                        />
                                                    </div>

                                                    <div className="specialityContent">
                                                        <h4>{item.title}</h4>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>

                                            ))}
                                        </div>
                                    </div>
                                    <h3 className="specialitySlideTitle" data-aos="fade-up" data-aos-delay={i * 200 + 800} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{slide.title}</h3>
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
