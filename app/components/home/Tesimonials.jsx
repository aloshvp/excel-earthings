'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { testimonialsData } from '@utils/homeData';


const Testimonials = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className='tesimonialsWrap'>
            <div className="container">
                <div className="testimonialsHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                    <h4 className='homeCmnSubHead'>Client Reviews</h4>
                    <h2 className='homeCmnHead'>Testimonials</h2>
                </div>
                <div className="testimonialsBody">

                    <div className="testimonialsSliderNav" data-aos="fade-down" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <div ref={prevRef} className="testimonialsSlierNavBtn testimonialsSliderPrevBtn" data-aos="fade-down" data-aos-duration="600" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
                        <div ref={nextRef} className="testimonialsSlierNavBtn testimonialsSliderNextBtn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={40}
                        slidesPerView={4}
                        loop
                        allowTouchMove={false}
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
                                <div className="testimonialItem" data-aos="fade-up" data-aos-delay={index * 150 + 600} data-aos-duration="700" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <div data-aos="fade-up" data-aos-delay={index * 150 + 650} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                        <Image src='/images/icons/quotes.svg' width={60} height={60} alt="quotes" title="quotes" />
                                    </div>
                                    <p className="testimonialDescription" data-aos="fade-up" data-aos-delay={index * 150 + 750} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{testimonial.description}</p>
                                    <div className='testimonialUserImg' data-aos="fade-up" data-aos-delay={index * 150 + 850} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                        <Image src='/images/home/icon-user-testimony.svg' width={100} height={100} alt="user" title="user" />
                                    </div>
                                    <h3 data-aos="fade-up" data-aos-delay={index * 150 + 950} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{testimonial.name}</h3>
                                    <span className="testimonialDesignation" data-aos="fade-up" data-aos-delay={index * 150 + 1050} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{testimonial.designation}</span>
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