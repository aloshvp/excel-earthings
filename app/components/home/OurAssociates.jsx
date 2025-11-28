'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { associatesData } from '@utils/homeData';
import Link from 'next/link';

const OurAssociates = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="ourAssociatesWrap">
            <div className="container">
                <div className="ourAssociatesHead">
                    <div className="ourAssociatesHeadTitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <h4 className='homeCmnSubHead'>APPROVALS & ASSOCIATES</h4>
                        <h2 className='homeCmnHead'>Our Approvals & Associates</h2>
                    </div>
                    <div className="ourAssociatesHeadCont" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <p>
                            Our Products are widely accepted and approved by Leading PSUs, State Government
                            Organizations and Private Companies, with its inherent quality and standards.
                        </p>
                    </div>
                    <div className="ourAssociatesHeadBtn" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <Link href="/approvals-and-associates" className='exploreMoreBtn'>Explore More <span className="arrow"></span></Link>
                    </div>
                </div>
                <div className="ourAssociatesBody">
                    <div className="ourAssociatesSlider" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50">

                        {/* Custom Navigation Buttons */}
                        <div className="ourAssociatesSliderNav" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <div ref={prevRef} className="ourAssociatesSliderNavBtn ourAssociatesSliderPrevBtn" data-aos="fade-down" data-aos-duration="600" data-aos-delay="700" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
                            <div ref={nextRef} className="ourAssociatesSliderNavBtn ourAssociatesSliderNextBtn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
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
                                480: { slidesPerView: 2 },
                                1024: { slidesPerView: 6 },
                            }}
                        >
                            {associatesData?.map((associate, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="associateSlide" data-aos="fade-up" data-aos-delay={idx * 100 + 800} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                        <div className="associateImg" data-aos="fade-up" data-aos-delay={idx * 100 + 850} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                            <Image
                                                src={associate.img}
                                                alt={associate.name}
                                                width={250}
                                                height={100}
                                            />
                                        </div>
                                        <p className="associateDesc" data-aos="fade-up" data-aos-delay={idx * 100 + 950} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{associate.name}</p>
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
