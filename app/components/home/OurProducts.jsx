"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@utils/homeData";

const OurProducts = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="ourProductsWrap">
            <div className="container">
                <div className="ourProductsHead">
                    <div className="ourProductsHeadLft" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <h4 className="homeCmnSubHead">Range of products</h4>
                        <h2 className="homeCmnHead">Our Products</h2>
                    </div>
                    <div className="ourProductsHeadRght" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <Link href="/products" className="exploreMoreBtn">
                            View All
                        </Link>
                    </div>
                </div>
            </div>

            <div className="ourProductsBody">
                {/* Custom navigation buttons */}
                <div className="ourProductsSliderNav" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                    <div ref={prevRef} className="ourProductsSlierNavBtn ourProductsSliderPrevBtn" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
                    <div ref={nextRef} className="ourProductsSlierNavBtn ourProductsSliderNextBtn" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-easing="ease-out-cubic" data-aos-offset="50"></div>
                </div>

                <Swiper
                    modules={[Navigation, EffectFade,Autoplay]}
                    effect="fade"
                    slidesPerView={1}
                    loop
                    speed={800}
                    navigation
                    allowTouchMove={false}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    className="ourProductsSwiper"
                >
                    {productsData.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="productItem">
                                <div className="productBg">
                                    <Image
                                        src={product.bgImage}
                                        alt={product.name}
                                        fill
                                        className="productImage"
                                        priority
                                    />
                                </div>
                                <div className="productContent" data-aos="fade-up" data-aos-delay={index * 100 + 600} data-aos-duration="700" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <span className="productNumber" data-aos="fade-up" data-aos-delay={index * 100 + 650} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{product.number}</span>
                                    <h3 className="productName" data-aos="fade-up" data-aos-delay={index * 100 + 750} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{product.name}</h3>
                                    <Link href="/products/category"  data-aos="fade-up" data-aos-delay={index * 100 + 850} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                        Explore More <span className="arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default OurProducts;