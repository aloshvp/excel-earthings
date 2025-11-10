import "@styles/staticbundles.scss";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@utils/homeData";

const page = () => {
    return (
        <section className='productsMainWrap'>
            {productsData?.map((product) =>
                <div className="productsMainItem" key={product.number}>
                    <div className="productsMainItemBg">
                        <Image src={product.bgImage} alt={product.name} fill className="productsMainItemImg" priority />
                    </div>
                    <div className="productsMainItemContent">
                        <span className="productsMainItemNumber">{product.number}</span>
                        <h3 className="productsMainItemName">{product.name}</h3>
                        <Link href="" scroll={false}>
                            Explore More <span className="arrow"></span>
                        </Link>
                    </div>
                </div>


            )}
        </section>
    )
}

export default page