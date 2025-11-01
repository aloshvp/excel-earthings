'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { associatesData } from '@/utils/homeData';
import Link from 'next/link';

const OurAssociates = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="ourAssociatesWrap">
            <div className="container">
                <div className="ourAssociatesHead">
                    <div className="ourAssociatesHeadTitle">
                        <h4 className='homeCmnSubHead'>APPROVALS & ASSOCIATES</h4>
                        <h2 className='homeCmnHead'>Our Approvals & Associates</h2>
                    </div>
                    <div className="ourAssociatesHeadCont">
                        <p>
                            Our Products are widely accepted and approved by Leading PSUs, State Government <em></em>
                            Organizations and Private Companies, with its inherent quality and standards.
                        </p>
                    </div>
                    <div className="ourAssociatesHeadBtn">
                        <Link href="" className='exploreMoreBtn'>Explore More</Link>
                    </div>
                </div>
                <div className="ourAssociatesBody">
                    <div className="ourAssociatesSlider">

                        {/* Custom Navigation Buttons */}
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
