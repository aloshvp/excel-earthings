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
                        <p></p>
                    </div>

                    <div className="approvalsAndAsscociatesBodyGrid">
                        {associatesData?.map((item, idx) => (
                            <div className="approvalsAndAsscociatesBodyGridItem" key={idx}>
                                <em>
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={200}
                                        height={200}
                                        loading="eager"
                                    />
                                </em>
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
