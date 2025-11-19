"use client"
import Image from 'next/image'


const AboutUsCeo = () => {
    return (
        <section className='aboutUsCeoWrap'>
            <div className="container">
                <div className="aboutUsCeoContent">
                    <div className="aboutUsCeoContentLft">
                        <em>
                            <Image
                                src="/images/static/team-NEW.png"
                                alt="CEO"
                                title="CEO"
                                width={600}
                                height={500}
                                className='img'
                            />
                        </em>
                        <span>Auguin C P</span>
                        <i>CEO -  M/S. Excel Earthings</i>
                    </div>
                    <div className="aboutUsCeoContentRght">
                        <em>
                            <Image
                                src="/images/static/doulbe-arrow.svg"
                                alt="arrow"
                                width={100}
                                height={100}
                                className='img'
                            />
                        </em>
                        <span>CEO’s Message</span>
                        <p>
                            As a leader in the manufacturing of Electrical Earthing and Lightning Protection Products, we
                            are committed to maximizing client satisfaction. We take pride in our infrastructure and the
                            technology used to meet the demands and ever-changing needs of our clients. Our leadership in
                            this industry is directly attributed to our talented staff, whose dedicated attention fulfills
                            our client needs and executes effective solution to achieve a safest electrical environment in
                            the society, emphasizing our motto  <strong>“Be Safe with Excel Earthings”</strong>
                        </p>
                        <p>
                            Our diverse business relies on the trust of our clients and all stakeholders. We recognize that
                            raising our corporate values and ensuring sustainable growth of the society are closely linked
                            together.
                        </p>
                        <p>
                            We look forward to your continued support in reaching our goal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsCeo