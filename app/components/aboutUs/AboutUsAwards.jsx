import Image from 'next/image'
import { awards } from '@utils/staticData'

const AboutUsAwards = () => {
    return (
        <section className='aboutUsAwardsWrap'>
            <div className="container">
                <div className="aboutUsAwardsHead">
                    <h2>Awards</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.</p>
                </div>
                <div className="aboutUsAwardsGrid">
                    {awards.map((item, index) => (
                        <div className="aboutUsAwardsGridItem" key={index}>
                            <em>
                                <Image
                                    src={item.img}
                                    alt="Award"
                                    title="Award"
                                    width={400}
                                    height={400}
                                />
                            </em>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutUsAwards