"use client";
import { useEffect } from "react";
import Image from "next/image";
import { AboutUsMissionData } from "@utils/staticData";

const AboutUsMission = () => {
  useEffect(() => {
    import("@motionone/dom").then(({ animate }) => {
      const icons = document.querySelectorAll(".missionIcon");

      icons.forEach((icon, index) => {
        // Pop-in with smooth scale and fade
        animate(
          icon,
          { opacity: [0, 1], scale: [0.4, 1.05, 1] },
          { duration: 0.9, easing: "ease-in-out", delay: index * 0.25 }
        );

        // Subtle floating bounce
        animate(
          icon,
          { y: [0, -6, 0] },
          { duration: 1.5, repeat: Infinity, easing: "ease-in-out", delay: 0.9 + index * 0.25 }
        );
      });
    });
  }, []);

  return (
    <section className="aboutUsMissionWrap">
      <div className="container">
        <div className="aboutUsMissionHead">
          <h2>Our Mission, <em></em> Vision & Values</h2>
        </div>

        <div className="aboutUsMissionGrid">
          {AboutUsMissionData.map((item, index) => (
            <div className="aboutUsMissionGridItem" key={index}>
              <span>{item.no}</span>

              <Image
                src={item.img}
                alt={item.title}
                title={item.title}
                width={70}
                height={70}
                className="missionIcon"
              />

              <h3>{item.title}</h3>

              {item.desc && <p>{item.desc}</p>}

              {item.list && (
                <ul>
                  {item.list.map((val, i) => (
                    <li key={i}>{val}</li>
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

