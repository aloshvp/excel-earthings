import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

const AtGlance = () => {
    return (
        <section className='atGlanceWrap'>
            <div className="container">
                <div className="atGlanceBody">
                    <div className="atGlanceTopCont">
                        <div className="atGlanceTopContLft">
                            <h4 className="homeCmnSubHead">Excel Earthings</h4>
                            <h2 className="homeCmnHead">At a Glance</h2>
                            <p>
                                We are one of the leading manufacturer and Technical Solution
                                <em></em>
                                Provider in the field of Electrical Earthing and Lightning Protection.
                                <em></em>
                                By providing suitable design, awareness & customized products,
                                <em></em>
                                we ensure Electrical Safety and power quality improvement in the
                                <em></em>
                                electrical network.
                            </p>
                            <Link href="">Learn More</Link>
                        </div>
                        <div className="atGlanceTopContRght">
                            <span>19</span>
                            <em>
                                <Image src="/images/home/year.svg" width={380} height={320} alt="year" title="year" />
                            </em>
                        </div>
                    </div>
                    <div className="atGlanceGrid">
                        <div className="atGlanceGridItem">
                            <Image src="/images/home/logo-iso.svg" width={100} height={80} alt='ISI'></Image>
                            <div className='horizontalLIne'></div>
                            <p>India's First ISI Certified Copper Bonded Earth Electrode Manufacturer`</p>
                        </div>
                        <div className="atGlanceGridItem">
                            <Image src="/images/home/logo-iso.svg" width={100} height={80} alt='ISI'></Image>
                            <div className='horizontalLIne'></div>
                            <p>India's First ISI Certified Copper Bonded Earth Electrode Manufacturer</p>
                        </div>
                        <div className="atGlanceGridItem">
                            <Image src="/images/home/logo-iso.svg" width={100} height={80} alt='ISI'></Image>
                            <div className='horizontalLIne'></div>
                            <p>India's First ISI Certified Copper Bonded Earth Electrode Manufacturer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="atGlanceMarquee">
                <Marquee
                    gradient={false}
                    speed={50}
                >
                    <span className="marqueeText">
                        Be safe with Excel earthings Be safe with Excel earthings Be safe with Excel earthings
                    </span>
                </Marquee>
            </div>
        </section>
    )
}

export default AtGlance