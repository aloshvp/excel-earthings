'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { slidesData } from '@/utils/homeData';

const AreaOfApplications = () => {
    const [allLoaded, setAllLoaded] = useState(false);
    const [loadedImages, setLoadedImages] = useState(0);

    const totalImages = slidesData.length * 2; // main + icon

    const handleImageLoad = () => setLoadedImages(prev => prev + 1);

    useEffect(() => {
        if (loadedImages >= totalImages) setAllLoaded(true);
    }, [loadedImages]);

    return (
        <section className="areaOfApplicationsWrap">
            <div className="container">
                <div className="areaOfApplicationsSlider">
                    {!allLoaded && (
                        <div className="skeleton-wrapper">
                            {slidesData?.map((_, i) => (
                                <div className="skeleton-slide" key={i}>
                                    <div className="skeleton-img"></div>
                                    <div className="skeleton-title"></div>
                                    <div className="skeleton-text"></div>
                                    <div className="skeleton-text"></div>
                                </div>
                            ))}
                        </div>
                    )}

                    <Swiper
                        style={{ display: allLoaded ? 'block' : 'none' }}
                        modules={[Navigation]}
                        spaceBetween={45}
                        slidesPerView={3}
                        navigation
                        loop
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
                                        <Image src={slide.icon} width={45} height={45} alt={slide.title} loading="eager" onLoadingComplete={handleImageLoad} />
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