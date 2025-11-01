'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { associatesData } from '@/utils/homeData'; // ← you’ll create this data file

const OurAssociates = () => {
    return (
        <section className="ourAssociatesWrap">
            <div className="container">
                {/* <div className="ourAssociatesHead">
                    <h2>Our Associates</h2>
                    <p>We collaborate with leading partners who share our commitment to innovation and excellence.</p>
                </div> */}

                <div className="ourAssociatesBody">
                    <div className="ourAssociatesSlider">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={40}
                            slidesPerView={4}
                            navigation
                            loop
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 6 },
                            }}
                        >
                            {associatesData?.map((associate, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="associateSlide">
                                        <div className="associateImg">
                                            <Image
                                                src={associate.img}
                                                alt={associate.name}
                                                width={250}
                                                height={100}
                                            />
                                        </div>
                                        <p className="associateDesc">{associate.name}</p>
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

export default OurAssociates;
