
import Image from "next/image"
import Link from "next/link"
const RelatedProductsSlider = () => {
  return (
    <div className="relatedProductsWrap">
        <h3>Related Products</h3>
        <div className="relatedProductsSlider">
            <div className='prdtBox'>
                <div className='PrdtImg'>
                    <Image src="/files/products/product1.jpeg" className="img-fluid" alt="product" title="product" width={620} height={425}/>
                </div>
                <div className="prdtDesc">
                    <i>Earth Electodes</i>
                    <em>Copper Bonded Rod</em>
                    <Link href={""}>View Details</Link>
                </div>
            </div>
              <div className='prdtBox'>
                <div className='PrdtImg'>
                    <Image src="/files/products/product1.jpeg" className="img-fluid" alt="product" title="product" width={620} height={425}/>
                </div>
                <div className="prdtDesc">
                    <i>Earth Electodes</i>
                    <em>Copper Bonded Rod</em>
                    <Link href={""}>View Details</Link>
                </div>
            </div>
              <div className='prdtBox'>
                <div className='PrdtImg'>
                    <Image src="/files/products/product1.jpeg" className="img-fluid" alt="product" title="product" width={620} height={425}/>
                </div>
                <div className="prdtDesc">
                    <i>Earth Electodes</i>
                    <em>Copper Bonded Rod</em>
                    <Link href={""}>View Details</Link>
                </div>
            </div>
        </div>
     </div>  
  )
}

export default RelatedProductsSlider