import Image from "next/image"
import { AboutUsMissionData } from "@utils/staticData";

const AboutUsMission = () => {
    return (
        <section className="aboutUsMissionWrap">
            <div className="container">
                <div className="aboutUsMissionBody">
                    <div className="aboutUsMissionHead">
                        <h2>Our Mission, <em></em> Vision & Values</h2>
                    </div>

                    <div className="aboutUsMissionGrid">
                        {AboutUsMissionData?.map((item, index) => (
                            <div className="aboutUsMissionGridItem" key={index}>
                                <span>{item.no}</span>

                                <em>
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        title={item.title}
                                        width={70}
                                        height={70}
                                        className="img"
                                    />
                                </em>

                                <h3>{item.title}</h3>

                                {item.desc && <p>{item.desc}</p>}

                                {item.list && (
                                    <ul>
                                        {item.list.map((value, i) => (
                                            <li key={i}>{value}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsMission