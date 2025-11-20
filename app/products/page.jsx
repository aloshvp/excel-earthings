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
                            <span className="productsMainItemNumber">{product.number}</span>
                            <h3 className="productsMainItemName">{product.name}</h3>
                            <Link href={product?.link ? product?.link : ""}>
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