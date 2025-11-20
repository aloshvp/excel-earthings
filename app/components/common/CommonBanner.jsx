"use client";
import React from "react";
import Image from "next/image";
import { bannerData } from "@utils/CommonData";

const CommonBanner = ({ pageName }) => {


  const normalizedPageName = pageName?.toLowerCase() || "default";

  const { title, image } = bannerData[normalizedPageName] || bannerData.default;

  return (
    <section className={`commonBanner ${normalizedPageName}`}>
      <div className="commonBannerWrap">
        <div className="commonBannerImageWrap">
          <Image
            src={image}
            alt={title}
            fill
            priority
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            quality={90}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          {/* Overlay Layer */}
          <div className="commonBannerOverlay"></div>
        </div>

        <div className="commonBannerContent">
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;
