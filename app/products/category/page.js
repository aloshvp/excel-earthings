"use client"
import "@styles/staticbundles.scss";
import Link from 'next/link'
import Image from 'next/image'
import CommonBanner from "@common/CommonBanner";
import { useState } from "react";
const page = () => {
    const[active,setActive]=useState("Electrical Earthing");

    const productMenus = [
    {
        label: "Electrical Earthing",
        subMenu: [
            { label: "All", link: "" },
            { label: "Earth Electodes", link: "" },
            { label: "Earth Enhancing Compounds", link: "" },
            { label: "Terminal Strip / Earth Bench", link: "" },
            { label: "Earth Bit Chamber", link: "" }
        ]
    },
    {
        label: "Lightning Protection",
        subMenu: [
            { label: "All", link: "" },
            { label: "Earth Electodes", link: "" },
            { label: "Earth Enhancing Compounds", link: "" },
            { label: "Terminal Strip / Earth Bench", link: "" },
            { label: "Earth Bit Chamber", link: "" }
        ]
    },
    {
        label: "Electrical Enclosures",
        subMenu: [
            { label: "All", link: "" },
            { label: "Earth Electodes", link: "" },
            { label: "Earth Enhancing Compounds", link: "" },
            { label: "Terminal Strip / Earth Bench", link: "" },
            { label: "Earth Bit Chamber", link: "" }
        ]
    },
    {
        label: "Cable Management",
        subMenu: [
            { label: "All", link: "" },
            { label: "Earth Electodes", link: "" },
            { label: "Earth Enhancing Compounds", link: "" },
            { label: "Terminal Strip / Earth Bench", link: "" },
            { label: "Earth Bit Chamber", link: "" }
        ]
    },
  ]
  return (
    <>
    <CommonBanner pageName={"category"}/>
    <div className="productsWrapper">
        <div className='container'>
            <div className='productSections'>
                <div className='productLeftMenuSec'>
                   
                    {productMenus.map((item,index)=>(
                        <div className='productLeftMenu' key={index*2}>
                            <span className={(active===item.label)?"active":""} onClick={()=>setActive(item.label)}>{item.label}</span>
                            <ul className={(active===item.label)?"active":""}>
                                {item?.subMenu?.map((item,index)=>(
                                     <li key={index}><Link href={""} scroll={false}>{item.label}</Link></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {/* <div className='productLeftMenu'>
                        <span>Lightning Protection</span>
                        <ul>
                            <li><Link href={""}>All</Link></li>
                            <li><Link href={""}>Earth Electodes</Link></li>
                            <li><Link href={""}>Earth Enhancing Compounds</Link></li>
                            <li><Link href={""}>Terminal Strip / Earth Bench</Link></li>
                            <li><Link href={""}>Earth Bit Chamber</Link></li>
                        </ul>
                    </div>
                    <div className='productLeftMenu'>
                        <span>Electrical Enclosures</span>
                        <ul>
                            <li><Link href={""}>All</Link></li>
                            <li><Link href={""}>Earth Electodes</Link></li>
                            <li><Link href={""}>Earth Enhancing Compounds</Link></li>
                            <li><Link href={""}>Terminal Strip / Earth Bench</Link></li>
                            <li><Link href={""}>Earth Bit Chamber</Link></li>
                        </ul>
                    </div>
                    <div className='productLeftMenu'>
                        <span>Cable Management</span>
                        <ul>
                            <li><Link href={""}>All</Link></li>
                            <li><Link href={""}>Earth Electodes</Link></li>
                            <li><Link href={""}>Earth Enhancing Compounds</Link></li>
                            <li><Link href={""}>Terminal Strip / Earth Bench</Link></li>
                            <li><Link href={""}>Earth Bit Chamber</Link></li>
                        </ul>
                    </div> */}
                </div>
                <div className='productList'>
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
        </div>
    </div>
    </>
  )
}

export default page