'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { certificationsData } from '@/utils/homeData'; // make sure to create this data
import Link from 'next/link';

const OurCertifications = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="ourCertificationWrap">
            <div className="container">

                <div className="ourCertificationHead">
                    <div className="ourCertificationHeadTitle">
                        <h4 className='homeCmnSubHead'>APPROVALS & ASSOCIATES</h4>
                        <h2 className='homeCmnHead'>Our Approvals & Associates</h2>
                    </div>
                    <div className="ourCertificationHeadCont">
                        <p>
                            Our Products are widely accepted and approved by Leading PSUs, State Government <em></em>
                            Organizations and Private Companies, with its inherent quality and standards.
                        </p>
                    </div>
                    <div className="ourCertificationHeadBtn">
                        <Link href="" className='exploreMoreBtn'>Explore More</Link>
                    </div>
                </div>

                <div className="ourCertificationBody">
                    <div className="ourCertificationSlider">


                        {/* Custom Navigation Buttons */}
                        <div className="SliderCustomNav">
                            <div ref={prevRef} className="SlierNavBtn SliderPrevBtn"></div>
                            <div ref={nextRef} className="SlierNavBtn SliderNextBtn"></div>
                        </div>

                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={40}
                            slidesPerView={3}
                            navigation
                            loop
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
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
                                            <h3>{cert.name}</h3>
                                            <p>{cert.desc}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCertifications;
