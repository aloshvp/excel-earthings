import Image from 'next/image'

const AboutUsUnique = () => {
    return (
        <section className="aboutUsUniqueWrap">
            <div className="container">
                <div className="aboutUsUniqueContent">
                    <h2></h2>
                    <div className="aboutUsUniqueGrid">
                        <div className="aboutUsUniqueGridItem">
                            <em>
                                <Image
                                    src="/images/applications/application-demo.png"
                                    alt="Industrial Installation"
                                    width={1150}
                                    height={647}
                                />
                            </em>
                            <p>India's First ISI Certified Copper Bonded Earth Electrode Manufacturer</p>
                        </div>
                        <div className="aboutUsUniqueGridItem">
                            <em>
                                <Image
                                    src="/images/applications/application-demo.png"
                                    alt="Industrial Installation"
                                    width={1150}
                                    height={647}
                                />
                            </em>
                            <p>IEC Certified for Earth Enhancing Compounds & Copper Bonded Rods</p>
                        </div>
                        <div className="aboutUsUniqueGridItem">
                            <em>
                                <Image
                                    src="/images/applications/application-demo.png"
                                    alt="Industrial Installation"
                                    width={1150}
                                    height={647}
                                />
                            </em>
                            <p>UL Listed Manufacturer for Copper Bonded Earth Electrode</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsUnique