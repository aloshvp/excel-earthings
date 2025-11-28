"use client";
import "@styles/staticbundles.scss";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@utils/homeData";

const page = () => {

    const totalProducts = productsData?.length;

    return (
        <section className='productsMainWrap'>
            {productsData?.map((product, index) => {

                const isLastItem = index === totalProducts - 1;
                const bgClass = `productsMainItemBg ${isLastItem ? 'productsMainItemBgLast' : ''}`;

                return (
                    <div className="productsMainItem" key={product.number}>
                        {/* Use the dynamically created bgClass */}
                        <div className={bgClass}>
                            <Image src={product.bgImage} alt={product.name} fill className="productsMainItemImg" priority />
                        </div>
                        <div className="productsMainItemContent">
                            <span className="productsMainItemNumber" data-aos="zoom-in" data-aos-delay={index * 50} data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-offset="510" data-aos-once="false">{product.number}</span>
                            <h3 className="productsMainItemName" data-aos="fade-up" data-aos-delay={index * 100 + 200} data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-offset="150">{product.name}</h3>
                            <Link href={product?.link ? product?.link : ""} data-aos="fade-up" data-aos-delay={index * 100 + 300} data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-offset="150">
                                Explore More <span className="arrow"></span>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default page