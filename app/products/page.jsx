"use client";
import "@styles/staticbundles.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from 'aos';
import { productsData } from "@utils/homeData";

const page = () => {
    useEffect(() => {
        // Ensure AOS is refreshed when this page loads
        const refreshAOS = () => {
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        };

        // Refresh immediately and after delays to ensure animations work
        refreshAOS();
        const timer1 = setTimeout(refreshAOS, 100);
        const timer2 = setTimeout(refreshAOS, 300);
        const timer3 = setTimeout(refreshAOS, 600);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

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
                            <span className="productsMainItemNumber" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out-quart" data-aos-offset="150" data-aos-once="false">{product.number}</span>
                            <h3 className="productsMainItemName" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out-quart" data-aos-offset="150">{product.name}</h3>
                            <Link href={product?.link ? product?.link : ""} data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out-quart" data-aos-offset="150">
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