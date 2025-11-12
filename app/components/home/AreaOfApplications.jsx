'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { slidesData } from '@utils/homeData';

const AreaOfApplications = () => {
    const [allLoaded, setAllLoaded] = useState(false);
    const [loadedImages, setLoadedImages] = useState(0);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const totalImages = slidesData.length * 2; // main + icon

    const handleImageLoad = () => setLoadedImages(prev => prev + 1);

    useEffect(() => {
        if (loadedImages >= totalImages) setAllLoaded(true);
    }, [loadedImages]);

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

                    {/* Skeleton Loader */}
                    {!allLoaded && (
                        <div className="skeleton-wrapper">
                            {Array(3).fill(0).map((_, i) => (
                                <div className="skeleton-slide" key={i}>
                                    <div className="skeleton-img"></div>
                                    <div className="skeleton-title"></div>
                                    <div className="skeleton-text"></div>
                                    <div className="skeleton-text"></div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Custom Nav Buttons */}
                    <div className="areaOfApplicationsSliderNav">
                        <div ref={prevRef} className="areaOfApplicationsSliderBtn areaOfApplicationsPrevBtn"></div>
                        <div ref={nextRef} className="areaOfApplicationsSliderBtn areaOfApplicationsNextBtn"></div>
                    </div>

                    {/* Swiper Slider */}
                    <Swiper
                        style={{ display: allLoaded ? 'block' : 'none' }}
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
                                <div className="slideSec">
                                    <div className="slideImg">
                                        <Image src={slide.img} width={800} height={533} alt={slide.title} loading="eager" onLoadingComplete={handleImageLoad} />
                                    </div>
                                    <div className="slideTitle">
                                        <Image src={slide.icon} width={70} height={70} alt={slide.title} loading="eager" onLoadingComplete={handleImageLoad} />
                                        <h3>{slide.title}</h3>
                                    </div>
                                    <div className="slideContent">
                                        <p>{slide.content}</p>
                                        <Link href={slide.link}>Learn More</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default AreaOfApplications;
