"use client";
import { useState } from "react";
import "@styles/staticbundles.scss";
import Image from "next/image";
import ProductGallery from "@components/product-details/ProductGallery";
import RelatedProductsSlider from "@components/product-details/RelatedProductsSlider";
const page = () => {
  const[activeTab,setActiveTab]=useState(null);

  const tabsData = [
  {
    id: 'Features',
    title: 'Features',
    content: (
      <ul>
        <li>Superior Electrical, Mechanical and Thermal Properties (IEEE 837).</li>
        <li>Fast Dissipation of Fault Current.</li>
        <li>No joints beneath the soil** as in Plate Electrodes.</li>
        <li>Good Corrosion Resistance** than Cast Iron / Hot Dip GI Electrodes.</li>
      </ul>
    ),
  },
  {
    id: 'TechnicalSpecs',
    title: 'Technical Specifications',
    content: <div className="testdesc">Technical specifications will be listed here.</div>,
  },
  {
    id: 'Certifications',
    title: 'Certifications',
    content: <div className="testdesc">Details about certifications will be listed here.</div>,
  },
  {
    id: 'InHouseTest',
    title: 'In House Test',
    content: <div className="testdesc">Information about in-house testing will be listed here.</div>,
  },
  {
    id: 'Type',
    title: 'Type',
    content: <div className="testdesc">Information about product type will be listed here.</div>,
  },
];
const [activeTabId, setActiveTabId] = useState(tabsData[0].id);


  const activeTabContent = tabsData.find(tab => tab.id === activeTabId)?.content;

  return (
    <main className="productDetailsWrapper">
        <section className="container">
        <div className="productDetailsMainWrap">
            <ProductGallery/>
            <section className="productDetails">
                <header className="productHeader">
                    <h1>Copper Bonded Rod</h1>
                    <p className="category">Category: Earth Electrodes</p>
                </header>

                <div className="productDescription">
                    <p>99.9% pure Electrolytic Grade Copper is **Molecularly Bonded to Nickel-Sealed Low Carbon Steel Core** having High Tensile Strength. Nickel Sealing is done for good Adhesion and Copper Coating will not crack when bent or driven. No part of steel is Exposed since Copper Coating is done after all Fabrication. The standard copper coating thickness is **250/100 microns**.</p>
                </div>
                <div className="productNoteBox">
                    <p><b>NB:</b> Customised Products are also available at Customer Request. Please be in touch with us for more information.</p>
                </div>
                <div className="actionButtons">
                    <button className="enquiryButton">
                        <span className="icon"></span>Enquiry
                    </button>
                </div>
                <div className="productOptions">
                    <div className="optionGrid">
                        <span className="optionTag selected">250 Microns</span>
                        <span className="optionTag">100 Microns</span>
                        <span className="optionTag">V Strip 250 Microns</span>
                        <span className="optionTag">V Strip 100 Microns</span>
                        <span className="optionTag">T Strip 250 Microns</span>
                        <span className="optionTag">T Strip 100 Microns</span>
                        <span className="optionTag">Plain Rod</span>
                    </div>
                </div>
            </section>
        </div>
        </section>
        <section className="prdtRoundWrap">
                <div className="container">
                    <div className="prdtSpecsWrap">
                        <div className="productInfoContainer">
                           <ul className="SpecTabs">
                                {tabsData.map((tab) => (
                                <li
                                    key={tab.id}
                                    className={activeTabId === tab.id ? 'active' : ''} 
                                    onClick={() => setActiveTabId(tab.id)} 
                                >
                                    {tab.title}
                                </li>
                                ))}
                            </ul>
                            <div className="productTabContentWrapper">
                                <div id={activeTabId} className="PrdtTabContent active">
                                {activeTabContent}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section className="prdtRoundWrap gray">
            <div className="container">
                <RelatedProductsSlider/>
            </div>
        </section>
    </main>
  )
}

export default page