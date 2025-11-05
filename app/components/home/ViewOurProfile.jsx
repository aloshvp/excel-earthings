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
                    <h2 className="homeCmnHead">View Our Profile</h2>

                    {/* Play button */}
                    <div
                        className="playButtonWrap"
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

                    <span>Watch Corporate Video</span>
                </div>

            </section>
            {/* Popup / Modal */}
            {
                isOpen && (
                    <div className="videoPopupOverlay" onClick={() => setIsOpen(false)}>
                        <div
                            className="videoPopupContent"
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
