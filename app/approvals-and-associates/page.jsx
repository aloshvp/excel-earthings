"use client"
import "@styles/staticbundles.scss";
import CommonBanner from '@common/CommonBanner'
import Image from 'next/image'
import { associatesData } from '@utils/homeData'
import useInViewFade from '@functions/useInViewFade';

const Page = () => {

    // Fade-up for section title (slightly slower for smoothness)
    useInViewFade(".approvalsAndAsscociatesBodyTitle", {
        offset: 20,
        duration: 0.5,
        easing: "ease-out",
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.15,
    });

    // Fade-up for each logo tile, with smoother stagger
    useInViewFade(".approvalsAndAsscociatesBodyGridItem", {
        offset: 20,
        duration: 0.65,
        easing: "ease-out",
        staggerField: "index",
        staggerStep: 0.03,
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.15,
    });

    return (
        <section className='approvalsAndAsscociatesWrap'>
            <CommonBanner pageName={"approvals-and-associates"} />

            <div className="approvalsAndAsscociatesBody">
                <div className="container">
                    <div className="approvalsAndAsscociatesBodyTitle" style={{ opacity: 0, transform: "translateY(20px)" }}>
                        <h2>Approvals & Associates</h2>
                        <p>Our Products are widely accepted and approved by Leading PSUs, State Government Organizations and Private Companies, with its inherent quality and standards.</p>
                    </div>

                    <div className="approvalsAndAsscociatesBodyGrid">
                        {associatesData?.map((item, idx) => (
                            <div
                                className="approvalsAndAsscociatesBodyGridItem"
                                key={idx}
                                data-index={idx}
                                style={{ opacity: 0, transform: "translateY(30px)" }}
                            >
                                <em>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={200}
                                        height={200}
                                        loading="eager"
                                    />
                                </em>
                                <h3>{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
