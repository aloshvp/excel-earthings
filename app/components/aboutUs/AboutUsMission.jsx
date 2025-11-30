"use client";
import Image from "next/image";
import { AboutUsMissionData } from "@utils/staticData";

const AboutUsMission = () => {

  return (
    <section className="aboutUsMissionWrap">
      <div className="container">
        <div className="aboutUsMissionHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">
          <h2>Our Mission, <em></em> Vision & Values</h2>
        </div>

        <div className="aboutUsMissionGrid">
          {AboutUsMissionData.map((item, index) => (
            <div className="aboutUsMissionGridItem" key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay={300 + index * 150} data-aos-easing="ease-out-cubic" data-aos-offset="50">
              <span data-aos="fade-up" data-aos-duration="600" data-aos-delay={400 + index * 150} data-aos-easing="ease-out-cubic" data-aos-offset="50">{item.no}</span>

              <Image
                src={item.img}
                alt={item.title}
                title={item.title}
                width={70}
                height={70}
                className="missionIcon"
                data-aos="zoom-in" data-aos-duration="800" data-aos-delay={500 + index * 150} data-aos-easing="ease-out-cubic" data-aos-offset="50"
              />

              <h3 data-aos="fade-up" data-aos-duration="600" data-aos-delay={600 + index * 150} data-aos-easing="ease-out-cubic" data-aos-offset="50">{item.title}</h3>

              {item.desc && <p data-aos="fade-up" data-aos-duration="600" data-aos-delay={700 + index * 150} data-aos-easing="ease-out-cubic" data-aos-offset="50">{item.desc}</p>}

              {item.list && (
                <ul>
                  {item.list.map((val, i) => (
                    <li key={i} data-aos="fade-up" data-aos-duration="600" data-aos-delay={750 + index * 150 + i * 100} data-aos-easing="ease-out-cubic" data-aos-offset="50">{val}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsMission;

