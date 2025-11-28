"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const ViewOurProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <section className="viewOurProfileWrap">
                <div className="viewOurProfileBody">
                    <h2 className="homeCmnHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-offset="50">View Our Profile</h2>

                    {/* Play button */}
                    <div
                        className="playButtonWrap"
                        data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-offset="50"
                        onClick={() => setIsOpen(true)}
                        role="button"
                    >
                        <Image
                            src="/images/icons/icon-play.svg"
                            alt="Play Button"
                            title="Play"
                            width={80}
                            height={80}
                        />
                    </div>

                    <span data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-easing="ease-out-cubic" data-aos-offset="50">Watch Corporate Video</span>
                </div>

            </section>
            {/* Popup / Modal */}
            {
                isOpen && (
                    <div className="videoPopupOverlay" onClick={() => setIsOpen(false)}>
                        <div
                            className="videoPopupContent"
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay="100"
                            data-aos-easing="ease-out-cubic"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="closeVideoPopup"
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </button>

                            <div className="videoWrapper">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/B0eDC2p17n4?autoplay=1"
                                    title="Corporate Video"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                )
            }
        </>
    );

};

export default ViewOurProfile;
