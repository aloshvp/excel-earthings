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
                    <div className="ourCertificationHeadTitle">
                        <h4 className='homeCmnSubHead'>CERTIFICATIONS</h4>
                        <h2 className='homeCmnHead'>Our Certifications</h2>
                    </div>
                    <div className="ourCertificationHeadCont">
                        <p>
                            Our Products are Tested and Certified in accordance with International and National
                            Standards from well established NABL Accredited Laboratories.
                        </p>
                    </div>
                    <div className="ourCertificationHeadBtn">
                        <Link href="" className='exploreMoreBtn' scroll={false}>Explore More <span className="arrow"></span></Link>
                    </div>
                </div>

                <div className="ourCertificationBody">
                    <div className="ourCertificationSlider">


                        {/* Custom Navigation Buttons */}
                        <div className="ourCertificationNav">
                            <div ref={prevRef} className="ourCertificationSlierNavBtn ourCertificationSliderPrevBtn"></div>
                            <div ref={nextRef} className="ourCertificationSlierNavBtn ourCertificationSliderNextBtn"></div>
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
                            }}
                        >
                            {certificationsData?.map((cert, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="certificationSlide">
                                        <div className="certificationImg">
                                            <Image
                                                src={cert.img}
                                                alt={cert.name}
                                                width={300}
                                                height={200}
                                            />
                                        </div>
                                        <div className="certificationContent">
                                            <h3>{cert.head}</h3>
                                            <p>{cert.desc}</p>
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
