import React from 'react'

const Banner = () => {
    return (
        <section className="bannerWrap">
            <div className="container">
                <div className="bannerContent">
                    <div className="bannerContentLft">
                        <h1>Our <em></em>
                            Business <em></em>
                            Lines</h1>
                        <p>We are one of the Leading Manufacturer and Technical <em></em>
                            Solution Provider in the field of Electrical Earthing and <em></em>
                            Lightning Protection. </p>
                    </div>
                    <div className="bannerContentRght">
                        <div className="bannerGrid">
                            <div className="bannerGridItem">
                                <em>01</em>
                                <h2>Electrical <em></em>
                                    Earthing</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                            </div>
                            <div className="bannerGridItem">
                                <em>02</em>
                                <h2>Lightning
                                    <em></em>
                                    Protection
                                </h2>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                            </div>
                            <div className="bannerGridItem">
                                <em>03</em>
                                <h2>Electrical <em></em>
                                    Enclosures</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                            </div>
                            <div className="bannerGridItem">
                                <em>04</em>
                                <h2>Cable <em></em>
                                    Management</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner