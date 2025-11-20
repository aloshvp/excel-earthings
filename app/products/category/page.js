"use client"
import "@styles/staticbundles.scss";
import Link from 'next/link'
import Image from 'next/image'
import CommonBanner from "@common/CommonBanner";
import { useState } from "react";
const page = () => {
    const[active,setActive]=useState("Electrical Earthing");
    const[mobActive,setMobActive]=useState(false);

    const handleItemClick = (newValue) => {
    setActive(prevActive => {
      if (prevActive === newValue) {
        return null; 
      }
      return newValue;
    });
  };

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
            { label: "Surge Protection", link: "" },
            { label: "Air Termination Rod / Lightning Arresters", link: "" },
            { label: "Down Conductors", link: "" },
            { label: "Accessories", link: "" }
        ]
    },
    {
        label: "Electrical Enclosures",
        subMenu: [
            { label: "All", link: "" },
            { label: "Meter Boxes", link: "" },
            { label: "Distribution Boxes", link: "" }
        ]
    },
    {
        label: "Cable Management",
        subMenu: [
            { label: "All", link: "" },
            { label: "Perforated Cable Tray", link: "" },
            { label: "Raceway Cable Tray", link: "" }
        ]
    },
  ]
  const productList=[
    {
        image:'/files/products/product1.jpeg',
        subHead:'Earth Electodes',
        mainHead:'Copper Bonded Rod',
        href:"/products/details"
    },
    {
        image:'/files/products/product2.png',
        subHead:'UL Listed Copper Bonded Plain Rod',
        mainHead:'CopperBonded Rod'
    },
    {
        image:'/files/products/product3.png',
        subHead:'EarthElectodes',
        mainHead:'Extendable Copper Bonded Rod'
    },
    {
        image:'/files/products/product4.png',
        subHead:'EarthElectodes',
        mainHead:'Copper Bonded Plate'
    },
    {
        image:'/files/products/product5.png',
        subHead:'EarthElectodes',
        mainHead:'Hot Dip Galvanized Steel Pipe'
    },
    {
        image:'/files/products/product6.png',
        subHead:'EarthElectodes',
        mainHead:'Hot Dip Galvanized Steel Plate'
    },
    {
        image:'/files/products/product7.png',
        subHead:'EarthElectodes',
        mainHead:'Conductive Concrete - A Permanent Earthing Solution'
    },
    {
        image:'/files/products/product8.png',
        subHead:'Excel Electrafill Plus Compound',
        mainHead:'CopperBondedRod'
    }
  ]
  return (
    <>
    <CommonBanner pageName={"category"}/>
    <div className="productsWrapper">
        <div className='container'>
            <div className='productSections'>
                <div className='productLeftMenuSec'>
                    <div className="prdctMobMenu"><span onClick={()=>setMobActive(!mobActive)}>Products Menu</span>
                    <div className={mobActive?"active":""}>
                        {productMenus.map((item,index)=>(
                        
                            <div className='productLeftMenu' key={index*2}>
                                <span className={(active===item.label)?"active":""} onClick={()=>handleItemClick(item.label)}>{item.label}</span>
                                <ul className={(active===item.label)?"active":""}>
                                    {item?.subMenu?.map((item,index)=>(
                                        <li key={index}  className={item.label==="All"?'active':''}><Link  href={""} scroll={false}>{item.label}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
                <div className='productList'>
                    {productList.map((item,index)=>(
                        <div className='prdtBox' key={index*0.3}>
                            <div className='PrdtImg'>
                                <Image src={item.image} className="img-fluid" alt="product" title="product" width={620} height={425}/>
                            </div>
                            <div className="prdtDesc">
                                <i>{item.subHead}</i>
                                <em>{item.mainHead}</em>
                                <Link href={(item?.href)?item?.href:''}>View Details</Link>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page