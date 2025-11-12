"use client";
import Image from "next/image";
import Link from "next/link";
import { insightsData } from "@utils/homeData";

const InsightsUpdates = () => {
    return (
        <div className='insightsUpdatesWrap'>
            <div className="container">
                <div className="insightsUpdateHead">
                    <div className="insightsUpdateHeadLft">
                        <h4 className="homeCmnSubHead">Insights & Updates</h4>
                        <h2 className="homeCmnHead">Insights & Updates</h2>
                    </div>
                    <div className="insightsUpdateHeadRght">
                        <Link href="" className='exploreMoreBtn' scroll={false}>Explore More <span className="arrow"></span></Link>
                    </div>
                </div>

                <div className="insightsUpdateBody">
                    <div className="insightsUpdateGrid">
                        {insightsData?.slice(0,4)?.map((item) => (
                            <div key={item.id} className="insightsUpdateGridItem">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={250}
                                    className="rounded-lg"
                                />
                                <span>{item.date}</span>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <Link href={item.link} scroll={false}>Learn More</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsightsUpdates;
