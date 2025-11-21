"use client";
import "@styles/staticbundles.scss";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@utils/homeData";
import { useEffect } from "react";
import { animate, inView } from "@motionone/dom";

const page = () => {

    const totalProducts = productsData?.length;

    useEffect(() => {
        inView(".productsMainItemContent", ({ target }) => {
            const elements = target.querySelectorAll(".productsMainItemNumber, .productsMainItemName, a");
            animate(
                elements,
                { opacity: [0, 1], transform: ["translateY(20px)", "none"] },
                { duration: 0.5, delay: 0.2, easing: "ease-out" }
            );
        });
    }, []);

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
                            <span className="productsMainItemNumber" style={{ opacity: 0 }}>{product.number}</span>
                            <h3 className="productsMainItemName" style={{ opacity: 0 }}>{product.name}</h3>
                            <Link href={product?.link ? product?.link : ""} style={{ opacity: 0 }}>
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