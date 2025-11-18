import "@styles/staticbundles.scss";
import Image from "next/image";
import ProductGallery from "app/components/product-details/ProductGallery";
const page = () => {
  return (
    <section className="productDetailsWrapper">
        <main className="productPageContainer">
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
        </main>
    </section>
  )
}

export default page