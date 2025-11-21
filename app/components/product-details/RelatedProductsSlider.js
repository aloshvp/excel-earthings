
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const RelatedProductsSlider = () => {

const relatedProducts = [
  { id: 1, name: 'UL Listed Copper Bonded Plain Rod', type: 'Earth Electrodes', imageUrl: '/images/product-details/Related_Products1.png' },
  { id: 2, name: 'Extendable Copper Bonded Rod', type: 'Earth Electrodes', imageUrl: '/images/product-details/Related_Products2.png' },
  { id: 3, name: 'Copper Bonded Plate', type: 'Earth Electrodes', imageUrl: '/images/product-details/Related_Products3.png' },
  { id: 4, name: 'Hot Dip Galvanized Steel Pipe', type: 'Earth Electrodes', imageUrl: '/images/product-details/Related_Products4.png' },
  { id: 5, name: 'UL Listed Copper Bonded Plain Rod', type: 'Earth Electrodes', imageUrl: '/images/product-details/Related_Products1.png' },
  { id: 6, name: 'Extendable Copper Bonded Rod', type: 'Earth Electrodes', imageUrl: '/images/product-details/Related_Products2.png' },
  { id: 7, name: 'Copper Bonded Plate', type: 'Earth Electrodes', imageUrl: '/images/product-details/Related_Products3.png' },
  { id: 8, name: 'Hot Dip Galvanized Steel Pipe', type: 'Earth Electrodes', imageUrl: '/images/product-details/Related_Products4.png' },
];


const ProductCard = ({ product }) => (
   <div className='prdtBox'>
        <div className='PrdtImg'>
            <Image src={product.imageUrl} className="img-fluid" alt="product" title="product" width={400} height={300}/>
        </div>
        <Link className="prdtDesc" href={""}>
            <i>{product.type}</i>
            <em>{product.name}</em>
            <span>View Details</span>
        </Link>
    </div>
);
  return (
    <div className="relatedProductsWrap">
        <h3>Related Products</h3>
        <div className="relatedProductsSlider">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next-custom', 
                    prevEl: '.swiper-button-prev-custom',
                }}
                // Responsive breakpoints for different screen sizes
                breakpoints={{
                // When window width is >= 640px (e.g., tablet)
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                // When window width is >= 1024px (e.g., desktop)
                1024: {
                    slidesPerView: 4, // Shows 4 products, matching your image
                    spaceBetween: 30,
                },
                1660: {
                    slidesPerView: 6, // Shows 4 products, matching your image
                    spaceBetween: 30,
                },
                }}
                slidesPerView={1} // Default for mobile
                spaceBetween={10}
                loop={false} // Prevent infinite loop if you don't need it
                className="mySwiper" // Custom class for styling the container
            >
                {/* 5. Mapping Products to Slides */}
                {relatedProducts.map((product) => (
                <SwiperSlide key={product.id}>
                    <ProductCard product={product} />
                </SwiperSlide>
                ))}

                {/* Custom Navigation Arrows (must be inside the container div for styling) */}
                
            </Swiper>
            <div className="customClck">
                    <div className="swiper-button-prev-custom"></div>
                    <div className="swiper-button-next-custom"></div>
                </div>
        </div>
     </div>  
  )
}

export default RelatedProductsSlider