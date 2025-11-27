"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Banner = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(false);
    const videoRef = useRef(null);

    // helper to attempt playing the video and handle autoplay prevention
    const tryPlayVideo = async () => {
        const v = videoRef.current;
        if (!v) return;
        try {
            // ensure muted (autoplay policies often require muted videos)
            v.muted = true;
            const playPromise = v.play();
            if (playPromise !== undefined) {
                await playPromise;
            }
            setVideoLoaded(true);
            setShowPlayButton(false);
        } catch (err) {
            // autoplay was likely prevented — show play button so user can start
            console.warn("Banner autoplay prevented or play error:", err);
            setVideoLoaded(false);
            setShowPlayButton(true);
        }
    };

    // If the video element mounts, try to play it once ready (in case canplay fired before handlers)
    useEffect(() => {
        if (videoRef.current) {
            // small timeout to let browser settle
            const t = setTimeout(() => tryPlayVideo(), 200);
            return () => clearTimeout(t);
        }
    }, []);

    return (
        <section className="bannerWrap">
            {/* Background video with image fallback while loading */}
            <div className={`bannerBg ${!videoLoaded ? 'blurred' : ''}`} style={{ position: "relative", overflow: "hidden" }}>
                <video
                    className={`bannerVideo ${videoLoaded ? 'ready' : ''}`}
                    poster="/images/home/banner-home-bg.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    crossOrigin="anonymous"
                    ref={videoRef}
                    onLoadedData={() => tryPlayVideo()}
                    onCanPlay={() => tryPlayVideo()}
                    onError={(e) => {
                        console.error("Banner video failed to load:", e);
                        setVideoLoaded(false);
                        setShowPlayButton(true);
                    }}
                >
                    {/* Prefer WebM for smaller size on supported browsers, fallback to MP4 */}
                    <source src="/videos/BANNER-VIDEO.webm" type="video/webm" />
                    {/* <source src="/videos/BANNER-VIDEO.mp4" type="video/mp4" /> */}
                    Your browser does not support the video tag.
                </video>

                {/* Show optimized Next/Image as a fallback/poster until video is ready */}
                <Image
                    src="/images/home/banner-home-bg.jpg"
                    alt="Banner Background"
                    fill
                    priority
                    className={`bannerFallbackImage ${videoLoaded ? 'hidden' : ''}`}
                />

                <div className="bannerOverlay"></div>

                {showPlayButton && (
                    <button
                        aria-label="Play background video"
                        onClick={async () => {
                            await tryPlayVideo();
                        }}
                        className="bannerPlayBtn"
                    >
                        ▶ Play Video
                    </button>
                )}
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="bannerContent" style={{ position: "relative", zIndex: 3 }}>
                        <div className="bannerContentLft">
                            <h1>
                                Our <em></em> Business <em></em> Lines
                            </h1>
                            <p>
                                We are one of the Leading Manufacturer and Technical
                                Solution Provider in the field of Electrical Earthing and
                                Lightning Protection.
                            </p>
                        </div>

                        <div className="bannerContentRght">
                            <div className="bannerGrid">
                                <div className="bannerGridItem">
                                    <em>01</em>
                                    <h2>
                                        Electrical <em></em> Earthing
                                    </h2>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                </div>
                                <div className="bannerGridItem">
                                    <em>02</em>
                                    <h2>
                                        Lightning <em></em> Protection
                                    </h2>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                </div>
                                <div className="bannerGridItem">
                                    <em>03</em>
                                    <h2>
                                        Electrical <em></em> Enclosures
                                    </h2>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                </div>
                                <div className="bannerGridItem">
                                    <em>04</em>
                                    <h2>
                                        Cable <em></em> Management
                                    </h2>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    );
};

export default Banner;
