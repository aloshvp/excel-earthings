import "@styles/staticbundles.scss";
import Image from "next/image";
import { insightsData } from "@utils/homeData";
import Link from "next/link";

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
                                <Image
                                    src="/images/insights-and-updates-details/insights-and-updates-details1.png"
                                    alt=""
                                    width={925}
                                    height={571}
                                />
                                <p>
                                    Easy tips to reduce shocks, protect appliances, and stay prepared for storms.
                                </p>
                                <h2>Why this matters</h2>
                                <p>
                                    Power cuts, tiny shocks from taps or appliances, bulbs blowing often, or routers dying in the
                                    rain are warning signs. A safe home rests on three basics: good earthing, surge protection,
                                    and lightning safety where needed.
                                </p>
                                <h2>Earthing, in simple words</h2>
                                <p>
                                    Earthing is a safe exit path for unwanted electricity. If something goes wrong, the current
                                    leaves through the ground instead of through people or appliances. Good earthing means fewer
                                    shocks and fewer surprises.
                                </p>
                                <h2>What a safe home setup looks like</h2>
                                <ul>
                                    <li>Solid earthing with an accessible, labeled inspection cover.</li>
                                    <li>Right surge protectors: one at the main board and small ones for sensitive
                                        points like a home office or TV setup.</li>
                                    <li>Good bonding: metal water pipes, gas lines, solar frames, and AC outdoor
                                        units connected to the earthing system.</li>
                                    <li>Lightning protection only where needed—exposed villas, tall homes, or solar-heavy
                                        rooftops in high‑storm areas.
                                    </li>
                                </ul>
                                <Image
                                    src="/images/insights-and-updates-details/insights-and-updates-details2.png"
                                    alt=""
                                    width={925}
                                    height={571}
                                />
                                <h2>Quick home checklist</h2>
                                <ul>
                                    <li>No small shocks from taps or appliances.</li>
                                    <li>Main board has a surge protector (ask your electrician).</li>
                                    <li>MCBs/RCDs trip only for real faults, not every few days.</li>
                                    <li>Earthing pit/cover is easy to access and labeled.</li>
                                    <li>Balcony rails, metal pipes, and solar frames are bonded.</li>
                                    <li>A simple safety check is done twice a year—pre‑ and post‑monsoon.</li>
                                </ul>
                                <h2>Signs you need a safety review</h2>
                                <ul>
                                    <li>Frequent bulb/charger failures or router issues during rains.</li>
                                    <li>Tingling when touching taps, washing machine, or fridge.</li>
                                    <li>Breaker trips often for no clear reason.</li>
                                    <li>Recent renovation or new rooftop solar added.</li>
                                </ul>
                                <Link href="" className="blogVideowWap" scroll={false}>
                                    <Image
                                        src="/images/insights-and-updates-details/insights-and-updates-details3.png"
                                        alt=""
                                        width={925}
                                        height={571}

                                    />
                                    <div className="blogVideoOverlay"></div>
                                    <em className="blogVideoPlayBtn">
                                        <Image
                                            src="/images/e-learning/play-button.svg"
                                            width={65}
                                            height={65}
                                            alt="play"
                                        /></em>
                                </Link>
                                <h2>Monsoon‑ready in 15 minutes</h2>
                                <ul>
                                    <li>Open the earthing cover; check for loose or corroded parts.</li>
                                    <li>Make sure the pit isn’t flooded or bone‑dry.</li>
                                    <li>Check surge protectors—many have an indicator window; replace if end‑of‑life.</li>
                                    <li>Tighten visible bonding screws on balcony rails or solar frames.</li>
                                    <li>Note the date and observations in your phone.</li>
                                </ul>
                                <h2>How Excel Earthings helps</h2>
                                <ul>
                                    <li>Home Earthing Kits with certified electrodes and tested accessories.</li>
                                    <li>Guidance on surge protection for main boards and sensitive points.</li>
                                    <li>Simple Home Safety Review—clear actions.</li>
                                </ul>
                                <p><b>Planning a new home or upgrade? Request a Home Safety Review. </b></p>
                                <p><b>Be Safe with Excel Earthings</b></p>
                            </div>
                            <div className="blogPostShareSec">
                                <Link href="" className="shareButton facebook" scroll={false}>
                                    <span className="icon">
                                        <Image
                                            src='/images/icons/facebook.svg'
                                            alt="facebook"
                                            title="facebook"
                                            width={8}
                                            height={8}
                                        />
                                    </span> Share
                                </Link>
                                <Link href="" className="shareButton twitter" scroll={false}>
                                    <span className="icon">
                                        <Image
                                            src='/images/icons/facebook.svg'
                                            alt="facebook"
                                            title="facebook"
                                            width={8}
                                            height={8}
                                        />
                                    </span> Tweet
                                </Link>
                                <Link href="" className="shareButton email" scroll={false}>
                                    <span className="icon">
                                        <Image
                                            src='/images/icons/facebook.svg'
                                            alt="facebook"
                                            title="facebook"
                                            width={8}
                                            height={8}
                                        />
                                    </span> Email
                                </Link>
                                <Link href="" className="shareButton whatsapp" scroll={false}>
                                    <span className="icon">
                                        <Image
                                            src='/images/icons/facebook.svg'
                                            alt="facebook"
                                            title="facebook"
                                            width={8}
                                            height={8}
                                        />
                                    </span> Share
                                </Link>
                                <Link href="" className="shareButton generic-share" scroll={false}>
                                    <span className="icon">
                                        <Image
                                            src='/images/icons/facebook.svg'
                                            alt="facebook"
                                            title="facebook"
                                            width={8}
                                            height={8}
                                        />
                                    </span> Share
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="insightsUpdatesDetailsRghtCont">
                        <div className="recentPostsWrap">

                            {insightsData?.map((item, index) => (
                                <Link href="" scroll={false} key={index} className="recentPostsitem">

                                    <em className="recentPostImg">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={70}
                                            height={70}
                                        />
                                    </em>

                                    <p>{item.title}</p>

                                </Link>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default page;
