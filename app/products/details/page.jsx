"use client";
import { useState } from "react";
import "@styles/staticbundles.scss";
import Image from "next/image";
import ProductGallery from "@components/product-details/ProductGallery";
import RelatedProductsSlider from "@components/product-details/RelatedProductsSlider";
const page = () => {

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
    id: 'Technical_Specifications',
    title: 'Technical Specifications',
    content: <div className='responsive-table'><div className="productTabTbl">
      <table>
        <thead>
            <tr>
                <th>Specifications</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Base Material</td>
                <td>Low Carbon Steel (Tata/Jindal/Vizag)</td>
            </tr>
            <tr>
                <td>Base Coating Material</td>
                <td>Nickel</td>
            </tr>
            <tr>
                <td>Coating Material</td>
                <td>99.9% Pure Electrolytic Grade Copper Anode (Mitsubishi Luvata Japan)</td>
            </tr>
            <tr>
                <td>Available Coating Thickness</td>
                <td>250/100 Microns (avg.)</td>
            </tr>
            <tr>
                <td>Available Diameter(mm)</td>
                <td>14.2, 16, 17.2, 20, 25, 32, 40, 50</td>
            </tr>
            <tr>
                <td>Available Length(m)</td>
                <td>1.2 to 3.0</td>
            </tr>
            <tr>
                <td>V Strip Dimension (optional)</td>
                <td>50mm x 5mm x 150mm Long</td>
            </tr>
            <tr>
                <td>T-Strip Dimension (optional)</td>
                <td>32mm x 5mm x 150mm Long</td>
            </tr>
            <tr>
                <td>Connectors</td>
                <td>SS 304 Grade Nut Bolts</td>
            </tr>
        </tbody>
      </table>
</div></div>,
  },
  {
    id: 'Certifications',
    title: 'Certifications',
    content: 
    <ul>
      <li>IEC 62561-2:2018 Lightning Protection System Components- Part2: Requirements for Conductors and Earth Electrodes (TC No.:C2/0000032498, D211105006/D211105006-10)
         <ul>
          <li>Adhesion Test</li>
          <li>Bend Test</li>
          <li>Electrical Resistivity Test</li>
          <li>Tensile Strength</li>
          <li>Yield/Tensile Ratio</li>
          <li>Coating Thickness Test</li>
          <li>Environmental Test</li>
        </ul>
      </li>
      <li>ISI Marked [IS 1772]: Electroplated Coatings of Copper (CM/L: 6400125807)
          <ul>
          <li>Thickness of Copper Coating</li>
          <li>Corrosion Resistance Test- Copper Accelerated Acetic Acid Salt Spray</li>
          <li>Adhesion Test</li>
        </ul>
      </li>
      <li>Short Circuit Current Tested from Central Power Research Institute Bangalore (TC No.: SC15357B, SC15357A)</li>
      <li>ASTM B499:2014- Measurement of Copper Coating Thickness (TC No.: ML/23835/4/20-21)</li>
    </ul>
    ,
  },
  {
    id: 'In_House_Test',
    title: 'In House Test',
    content: <ul>
        <li>Coating Thickness Test as per Clause 9.6.1 UL 467</li>
        <li>Adhesion Test as per Clause 9.7.1 UL 467</li>
        <li>Bend Test as per Clause 9.7.2 UL 467</li>
        <li>Corrosion Resistance Test- Copper Accelerated Acetic Acid Salt Spray Test as per Clause 4.5 IS 1772:1973</li>
        <li>Environmental Test as per Clause 5.3.5 IEC 62561-2:2018</li>
      </ul>,
  },
  {
    id: 'Type',
    title: 'Type',
    content: <div className="testdesc">Information about product type will be listed here.</div>,
  },
];
  const [mobActive,setMobActive]=useState(false);
  const [activeTabId, setActiveTabId] = useState(tabsData[0].id);
  const activeTabContent = tabsData.find(tab => tab.id === activeTabId)?.content;

  const menuClick=(id)=>{
    setActiveTabId(id);
    setMobActive(false);
  }

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
                    <p>99.9% pure Electrolytic Grade Copper is Molecularly Bonded to Nickel-Sealed Low Carbon Steel Core having High Tensile Strength. Nickel Sealing is done for good Adhesion and Copper Coating will not crack when bent or driven. No part of steel is Exposed since Copper Coating is done after all Fabrication. The standard copper coating thickness is 250/100 microns.</p>
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
                           <div className={mobActive?'specMobTab active':'specMobTab'}>
                             <span onClick={()=>setMobActive(!mobActive)}>{activeTabId.replaceAll('_',' ')}</span>
                             <ul className="SpecTabs">
                                  {tabsData.map((tab) => (
                                  <li
                                      key={tab.id}
                                      className={activeTabId === tab.id ? 'active' : ''} 
                                      onClick={() => menuClick(tab.id)} 
                                  >
                                      {tab.title}
                                  </li>
                                  ))}
                              </ul>
                            </div>
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