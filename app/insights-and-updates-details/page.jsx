import "@styles/staticbundles.scss";
import Image from "next/image";
import { insightsData } from "@utils/homeData";

const page = () => {

    return (
        <section className="insightsUpdatesDetailsWrap">
            <div className="container">
                <div className="insightsUpdatesDetailsBody">

                    <div className="insightsUpdatesDetailsLftCont">
                        <div className="blogPostContentWrap">
                            <div className="blogPostContentHead">
                                <h3>Insights & Updates</h3>
                                <h1>Safer Homes: A Simple Guide to Earthing, Surges & Lightning</h1>
                                <span>Sep  20, 2025</span>
                            </div>
                            <div className="blogPostContent">

                            </div>
                        </div>
                    </div>

                    <div className="insightsUpdatesDetailsRghtCont">
                        <div className="recentPostsWrap">

                            {insightsData?.map((item, index) => (
                                <div key={index} className="recentPostsitem">

                                    <em className="recentPostImg">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={70}
                                            height={70}
                                        />
                                    </em>

                                    <p>{item.title}</p>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default page;
