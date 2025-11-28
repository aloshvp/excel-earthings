"use client";
import Image from "next/image";
import Link from "next/link";
import { insightsData } from "@utils/homeData";

const InsightsUpdates = () => {

    return (
        <div className='insightsUpdatesWrap'>
            <div className="container">
                <div className="insightsUpdateHead">
                    <div
                        className="insightsUpdateHeadLft"
                        data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50"
                    >
                        <h4 className="homeCmnSubHead">Insights & Updates</h4>
                        <h2 className="homeCmnHead">Insights & Updates</h2>
                    </div>
                    <div className="insightsUpdateHeadRght" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <Link href="/insights-and-updates" className='exploreMoreBtn'>Explore More <span className="arrow"></span></Link>
                    </div>
                </div>

                <div className="insightsUpdateBody">
                    <div className="insightsUpdateGrid">
                        {insightsData?.slice(0, 4)?.map((item, index) => (
                            <div
                                key={item.id}
                                className="insightsUpdateGridItem"
                                data-aos="fade-up" data-aos-delay={index * 100 + 500} data-aos-duration="700" data-aos-easing="ease-out-cubic" data-aos-offset="50"
                            >
                                <div className="insightsImgWrap">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={250}
                                        className="rounded-lg"
                                    />
                                </div>
                                <span>{item.date}</span>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <Link href={item.link}>Learn More</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsightsUpdates;
