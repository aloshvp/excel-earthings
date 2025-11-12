"use client"
import "@styles/staticbundles.scss";
import CommonBanner from '@common/CommonBanner'
import Image from 'next/image'
import Link from "next/link";
import { associatesData } from '@utils/homeData'

const page = () => {
    return (
        <section className='approvalsAndAsscociatesWrap'>
            <CommonBanner pageName={"approvals-and-associates"} />

            <div className="approvalsAndAsscociatesBody">
                <div className="container">
                    <div className="approvalsAndAsscociatesBodyTitle">
                        <h2>Approvals & Associates</h2>
                        <p>Our Products are widely accepted and approved by Leading PSUs, State Government Organizations and Private Companies, with its inherent quality and standards.</p>
                    </div>

                    <div className="approvalsAndAsscociatesBodyGrid">
                        {associatesData?.map((item, idx) => (
                            <div className="approvalsAndAsscociatesBodyGridItem" key={idx}>
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

export default page;
