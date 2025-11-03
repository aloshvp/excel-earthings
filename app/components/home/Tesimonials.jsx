'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { testimonialsData } from '@/utils/homeData';


const Testimonials = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className='tesimonialsWrap'>
            <div className="container">
                <div className="testimonialsHead">
                    <h4 className='homeCmnSubHead'>Client Reviews</h4>
                    <h2 className='homeCmnHead'>Testimonials</h2>
                </div>
                <div className="testimonialsBody">

                    <div className="SliderCustomNav">
                        <div ref={prevRef} className="SlierNavBtn SliderPrevBtn"></div>
                        <div ref={nextRef} className="SlierNavBtn SliderNextBtn"></div>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={40}
                        slidesPerView={4}
                        loop
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 },
                        }}
                    >
                        {testimonialsData?.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonialItem">
                                    <div>
                                        <Image src='/images/icons/quotes.svg' width={60} height={60} alt="quotes" title="quotes" />
                                    </div>
                                    <p className="testimonialDescription">{testimonial.description}</p>
                                    <div className='testimonialUserImg'>
                                        <Image src='/images/home/icon-user-testimony.png' width={60} height={60} alt="user" title="user" />
                                    </div>
                                    <h3>{testimonial.name}</h3>
                                    <span className="testimonialDesignation">{testimonial.designation}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
