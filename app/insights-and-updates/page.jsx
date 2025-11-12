import "@styles/staticbundles.scss";
import { insightsData } from '@utils/homeData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='insightsAndUpdatesInnerWrap'>
            <div className="container">
                <div className="insightsAndUpdatesInnerBody">
                    <div className="insightsAndUpdatesInnerTitle">
                        <h1 className="homeCmnHead">Insights & Updates</h1>
                    </div>
                    <div className="insightsAndUpdatesInnerGrid">
                        {insightsData?.map((item) => (
                            <div key={item.id} className="insightsAndUpdatesInnerGridItem">
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
        </section>
    )
}

export default page