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
                    <div className="ourProductsHeadLft">
                        <h4 className="homeCmnSubHead">Range of products</h4>
                        <h2 className="homeCmnHead">Our Products</h2>
                    </div>
                    <div className="ourProductsHeadRght">
                        <Link href="/products" className="exploreMoreBtn">
                            View All
                        </Link>
                    </div>
                </div>
            </div>

            <div className="ourProductsBody">
                {/* Custom navigation buttons */}
                <div className="ourProductsSliderNav">
                    <div ref={prevRef} className="ourProductsSlierNavBtn ourProductsSliderPrevBtn"></div>
                    <div ref={nextRef} className="ourProductsSlierNavBtn ourProductsSliderNextBtn"></div>
                </div>

                <Swiper
                    modules={[Navigation, EffectFade,Autoplay]}
                    effect="fade"
                    slidesPerView={1}
                    loop
                    speed={800}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
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
                                <div className="productContent">
                                    <span className="productNumber">{product.number}</span>
                                    <h3 className="productName">{product.name}</h3>
                                    <Link href="" scroll={false}>
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