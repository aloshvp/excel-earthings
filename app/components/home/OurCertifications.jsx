'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { certificationsData } from '@/utils/homeData'; // make sure to create this data

const OurCertifications = () => {
    return (
        <section className="ourCertificationWrap">
            <div className="container">
                {/* <div className="ourCertificationHead">
                    <h2>Our Certifications</h2>
                    <p>
                        We are proud to hold certifications that reflect our commitment to
                        quality, safety, and innovation across all operations.
                    </p>
                </div> */}

                <div className="ourCertificationBody">
                    <div className="ourCertificationSlider">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={40}
                            slidesPerView={3}
                            navigation
                            loop
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
