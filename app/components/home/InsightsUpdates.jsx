"use client";
import Image from "next/image";
import Link from "next/link";
import { insightsData } from "@utils/homeData";
import useInViewFade from "@functions/useInViewFade";

const InsightsUpdates = () => {

    // Fade-up for heading (left block)
    useInViewFade(".insightsUpdateHeadLft", {
        offset: 20,
        duration: 0.45,
        easing: "ease-out",
    });

    // Fade-up for each card in the grid with stagger
    useInViewFade(".insightsUpdateGridItem", {
        offset: 25,
        duration: 0.6,
        easing: "ease-out",
        staggerField: "index",
        staggerStep: 0.06,
    });

    return (
        <div className='insightsUpdatesWrap'>
            <div className="container">
                <div className="insightsUpdateHead">
                    <div
                        className="insightsUpdateHeadLft"
                        style={{ opacity: 0, transform: "translateY(20px)" }}
                    >
                        <h4 className="homeCmnSubHead">Insights & Updates</h4>
                        <h2 className="homeCmnHead">Insights & Updates</h2>
                    </div>
                    <div className="insightsUpdateHeadRght">
                        <Link href="/insights-and-updates" className='exploreMoreBtn'>Explore More <span className="arrow"></span></Link>
                    </div>
                </div>

                <div className="insightsUpdateBody">
                    <div className="insightsUpdateGrid">
                        {insightsData?.slice(0, 4)?.map((item, index) => (
                            <div
                                key={item.id}
                                className="insightsUpdateGridItem"
                                data-index={index}
                                style={{ opacity: 0, transform: "translateY(25px)" }}
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
