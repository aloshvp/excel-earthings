"use client";
import Image from "next/image";
import { awards } from "@utils/staticData";

const AboutUsAwards = () => {

    return (
        <section className="aboutUsAwardsWrap">
            <div className="container">
                <div className="aboutUsAwardsHead">
                    <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">Awards</h2>
                    <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div className="aboutUsAwardsGrid">
                    {awards.map((item, index) => (
                        <div className="aboutUsAwardsGridItem" key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay={400 + index * 150} data-aos-easing="ease-out-cubic" data-aos-offset="50">
                            <em data-aos="zoom-in" data-aos-duration="600" data-aos-delay={500 + index * 150} data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                <Image src={item.img} alt="Award" title="Award" width={400} height={400} />
                            </em>
                            <p data-aos="fade-up" data-aos-duration="600" data-aos-delay={600 + index * 150} data-aos-easing="ease-out-cubic" data-aos-offset="50">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUsAwards;
