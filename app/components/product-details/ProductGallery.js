
"use client"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';
import Image from 'next/image';

const ProductGallery = () => {
      const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="productGallery">
                {/* <div className="mainImage">
                    <Image src="/images/product-details/Related_Products1.png" width={400} height={300} title="Various types of Copper Bonded Rods" alt="Various types of Copper Bonded Rods"/>
                </div>
                <div className="thumbnailSelector">
                    <Image src="/images/product-details/Related_Products1.png" width={150} height={150} alt="Copper Rod Variant 1" className="thumbnail active"/>
                    <Image src="/images/product-details/Related_Products2.png" width={150} height={150} alt="Copper Rod Variant 2" className="thumbnail"/>
                    {/* <Image src="/images/product-details/Related_Products3.png" width={150} height={150} alt="All Copper Rods" className="thumbnail selected"/>
                    <Image src="/images/product-details/Related_Products4.png" width={150} height={150} alt="Copper Rod Variant 4" className="thumbnail"/>
                    <Image src="/images/product-details/Related_Products5.png" width={150} height={150} alt="Copper Rod Variant 5" className="thumbnail"/>
                
                </div>  */}
                 <Swiper
                    style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <Image src="/images/product-details/Related_Products1.png" width={400} height={300} title="product" alt="product" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/images/product-details/Related_Products2.png" width={400} height={300} title="product" alt="product"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/images/product-details/Related_Products3.png" width={400} height={300} title="product" alt="product"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/images/product-details/Related_Products4.png" width={400} height={300} title="product" alt="product"/>
                    </SwiperSlide>
                     <SwiperSlide>
                        <Image src="/images/product-details/Related_Products1.png" width={400} height={300} title="product" alt="product"/>
                    </SwiperSlide>
                     <SwiperSlide>
                        <Image src="/images/product-details/Related_Products2.png" width={400} height={300} title="product" alt="product"/>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image src="/images/product-details/Related_Products1.png" width={150} height={150} title="product" alt="product"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/images/product-details/Related_Products2.png" width={150} height={150} title="product" alt="product"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/images/product-details/Related_Products3.png" width={150} height={150} title="product" alt="product"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/images/product-details/Related_Products4.png" width={150} height={150} title="product" alt="product"/>
                    </SwiperSlide>
                      <SwiperSlide>
                        <Image src="/images/product-details/Related_Products1.png" width={150} height={150} title="product" alt="product"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/images/product-details/Related_Products2.png" width={150} height={150} title="product" alt="product"/>
                    </SwiperSlide>
                </Swiper>
    </section>
  )
}

export default ProductGallery