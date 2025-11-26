"use client";

import { useEffect } from "react";
import { animate } from "@motionone/dom";

/**
 * Generic fade-up on in-view hook using Motion One + IntersectionObserver.
 *
 * @param {string} selector - CSS selector for elements to animate.
 * @param {Object} options
 * @param {number} [options.offset=30] - Initial translateY offset in px.
 * @param {number} [options.duration=0.5] - Animation duration in seconds.
 * @param {string} [options.easing="ease-out"] - Easing function.
 * @param {string} [options.staggerField] - Dataset key used for staggering (e.g. "index" for data-index).
 * @param {number} [options.staggerStep=0.1] - Delay step in seconds per index for staggering.
 * @param {string} [options.rootMargin="0px 0px -10% 0px"] - Intersection rootMargin to tweak trigger point.
 * @param {number} [options.threshold=0.2] - Intersection threshold (0–1).
 */
const useInViewFade = (
  selector,
  {
    offset = 30,
    duration = 0.5,
    easing = "ease-out",
    staggerField,
    staggerStep = 0.1,
    rootMargin = "0px 0px -10% 0px",
    threshold = 0.2,
  } = {}
) => {
  useEffect(() => {
    if (!selector) return;

    const elements = Array.from(
      document.querySelectorAll(selector)
    );

    if (!elements.length) return;

    // Set initial state for all elements
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = `translateY(${offset}px)`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = /** @type {HTMLElement} */ (entry.target);

          if (entry.isIntersecting) {
            const index = staggerField
              ? Number(target.dataset && target.dataset[staggerField] || 0)
              : 0;

            // Reset before each enter so it can re‑animate
            target.style.opacity = "0";
            target.style.transform = `translateY(${offset}px)`;

            animate(
              target,
              { opacity: 1, transform: "translateY(0px)" },
              {
                duration,
                easing,
                delay: index * staggerStep,
              }
            );
          } else {
            // Prepare for next time it comes into view
            target.style.opacity = "0";
            target.style.transform = `translateY(${offset}px)`;
          }
        });
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [
    selector,
    offset,
    duration,
    easing,
    staggerField,
    staggerStep,
    rootMargin,
    threshold,
  ]);
};

export default useInViewFade;


