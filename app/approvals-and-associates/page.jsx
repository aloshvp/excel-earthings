"use client"
import "@styles/staticbundles.scss";
import CommonBanner from '@common/CommonBanner'
import Image from 'next/image'
import { associatesData } from '@utils/homeData'

const Page = () => {

    return (
        <section className='approvalsAndAsscociatesWrap'>
            <CommonBanner pageName={"approvals-and-associates"} />

            <div className="approvalsAndAsscociatesBody">
                <div className="container">
                    <div className="approvalsAndAsscociatesBodyTitle" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                        <h2>Approvals & Associates</h2>
                        <p>Our Products are widely accepted and approved by Leading PSUs, State Government Organizations and Private Companies, with its inherent quality and standards.</p>
                    </div>

                    <div className="approvalsAndAsscociatesBodyGrid">
                        {associatesData?.map((item, idx) => (
                            <div
                                className="approvalsAndAsscociatesBodyGridItem"
                                key={idx}
                            >
                                <em data-aos="fade-up" data-aos-delay={idx * 50 + 400} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={200}
                                        height={200}
                                        loading="eager"
                                    />
                                </em>
                                <h3 data-aos="fade-up" data-aos-delay={idx * 50 + 450} data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
