'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { certificationsData } from '@utils/homeData';
import Link from 'next/link';

const OurCertifications = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="ourCertificationWrap">
            <div className="container">

                <div className="ourCertificationHead">
                    <div className="ourCertificationHeadTitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <h4 className='homeCmnSubHead'>CERTIFICATIONS</h4>
                        <h2 className='homeCmnHead'>Our Certifications</h2>
                    </div>
                    <div className="ourCertificationHeadCont" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <p>
                            Our Products are Tested and Certified in accordance with International and National
                            Standards from well established NABL Accredited Laboratories.
                        </p>
                    </div>
                    <div className="ourCertificationHeadBtn" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <Link href="/certifications-and-quality-assurance" className='exploreMoreBtn'>Explore More <span className="arrow"></span></Link>
                    </div>
                </div>

                <div className="ourCertificationBody">
                    <div className="ourCertificationSlider" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50">


                        {/* Custom Navigation Buttons */}
                        <div className="ourCertificationNav" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <div ref={prevRef} className="ourCertificationSlierNavBtn ourCertificationSliderPrevBtn" data-aos="fade-down" data-aos-duration="600" data-aos-delay="700" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
                            <div ref={nextRef} className="ourCertificationSlierNavBtn ourCertificationSliderNextBtn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
                        </div>

                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={40}
                            slidesPerView={3}
                            navigation
                            loop
                            allowTouchMove={false}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                480: { slidesPerView: 2 },
                                1024: { slidesPerView: 5 },
                                1440: { slidesPerView: 6 },
                            }}
                        >
                            {certificationsData?.map((cert, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="certificationSlide" data-aos="fade-up" data-aos-delay={idx * 100 + 800} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                        <div className="certificationImg" data-aos="fade-up" data-aos-delay={idx * 100 + 850} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                            <Image
                                                src={cert.img}
                                                alt={cert.name}
                                                width={300}
                                                height={200}
                                            />
                                        </div>
                                        <div className="certificationContent">
                                            <h3 data-aos="fade-up" data-aos-delay={idx * 100 + 950} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{cert.head}</h3>
                                            <p data-aos="fade-up" data-aos-delay={idx * 100 + 1050} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{cert.desc}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default OurCertifications;
