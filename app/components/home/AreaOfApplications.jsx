"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { slidesData } from '@utils/homeData';

const SlideItem = ({ slide, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="slideSec areaOfApplicationsSlideItem">
            <div className="slideImg" data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                <Image
                    src={slide.img}
                    width={800}
                    height={533}
                    alt={slide.title}
                    loading="eager"
                    onLoadingComplete={() => setIsLoaded(true)}
                    style={{
                        width: '100%',
                        height: 'auto',
                        transition: 'filter 0.5s ease-in-out',
                        filter: isLoaded ? 'blur(0)' : 'blur(10px)',
                    }}
                />
            </div>
            <div className="slideTitle" data-aos="fade-up" data-aos-delay={index * 100 + 100} data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                <Image src={slide.icon} width={70} height={70} alt={slide.title} />
                <h3>{slide.title}</h3>
            </div>
            <div className="slideContent" data-aos="fade-up" data-aos-delay={index * 100 + 200} data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                <p>{slide.content}</p>
                <Link href={slide.link}>Learn More</Link>
            </div>
        </div>
    );
};

const AreaOfApplications = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="areaOfApplicationsWrap">
            <div className="container">
                <div className="areaOfApplicationsHead">
                    <div className="areaOfApplicationsHeadTitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h4 className="homeCmnSubHead">Areas of Use</h4>
                        <h2 className="homeCmnHead">Applications</h2>
                    </div>
                    <div className="areaOfApplicationsHeadBtn" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                        <Link href="/applications" className='exploreMoreBtn'>Explore More <span className="arrow"></span></Link>
                    </div>
                </div>

                <div className="areaOfApplicationsSlider" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">

                    {/* Custom Nav Buttons */}
                    <div className="areaOfApplicationsSliderNav" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                        <div ref={prevRef} className="areaOfApplicationsSliderBtn areaOfApplicationsPrevBtn" data-aos="fade-down" data-aos-duration="600" data-aos-delay="500"></div>
                        <div ref={nextRef} className="areaOfApplicationsSliderBtn areaOfApplicationsNextBtn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500"></div>
                    </div>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={45}
                        slidesPerView={3}
                        loop
                        navigation
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3, spaceBetween: 45 }
                        }}
                        allowTouchMove={false}
                    >
                        {slidesData?.map((slide, idx) => (
                            <SwiperSlide key={idx}>
                                <SlideItem slide={slide} index={idx} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default AreaOfApplications;
