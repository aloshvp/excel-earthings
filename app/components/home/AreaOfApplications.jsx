'use client';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { slidesData } from '@utils/homeData';

const SlideItem = ({ slide }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="slideSec">
            <div className="slideImg">
                <Image
                    src={slide.img}
                    width={800}
                    height={533}
                    alt={slide.title}
                    loading="eager"
                    onLoadingComplete={() => setIsLoaded(true)}
                    style={{
                        transition: 'filter 0.5s ease-in-out',
                        filter: isLoaded ? 'blur(0)' : 'blur(10px)',
                    }}
                />
            </div>
            <div className="slideTitle">
                <Image src={slide.icon} width={70} height={70} alt={slide.title} />
                <h3>{slide.title}</h3>
            </div>
            <div className="slideContent">
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
                    <div className="areaOfApplicationsHeadTitle">
                        <h4 className="homeCmnSubHead">Areas of Use</h4>
                        <h2 className="homeCmnHead">Applications</h2>
                    </div>
                    <div className="areaOfApplicationsHeadBtn">
                        <Link href="/applications" className='exploreMoreBtn'>Explore More <span className="arrow"></span></Link>
                    </div>
                </div>

                <div className="areaOfApplicationsSlider">

                    {/* Custom Nav Buttons */}
                    <div className="areaOfApplicationsSliderNav">
                        <div ref={prevRef} className="areaOfApplicationsSliderBtn areaOfApplicationsPrevBtn"></div>
                        <div ref={nextRef} className="areaOfApplicationsSliderBtn areaOfApplicationsNextBtn"></div>
                    </div>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={45}
                        slidesPerView={3}
                        loop
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                        allowTouchMove={false}
                    >
                        {slidesData?.map((slide, idx) => (
                            <SwiperSlide key={idx}>
                                <SlideItem slide={slide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default AreaOfApplications;
