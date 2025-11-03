"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/utils/homeData";

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
                <div className="SliderCustomNav">
                    <div ref={prevRef} className="SlierNavBtn SliderPrevBtn"></div>
                    <div ref={nextRef} className="SlierNavBtn SliderNextBtn"></div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                    }}
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
                                    <Link href={product.link}>Explore More</Link>
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
