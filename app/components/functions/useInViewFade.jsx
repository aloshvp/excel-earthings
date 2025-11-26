"use client";

import { useEffect } from "react";
import { animate } from "@motionone/dom";

/**
 * Generic fade-up hook using Motion One + IntersectionObserver.
 *
 * Runs when elements ENTER the viewport (in view), not immediately on page load
 * if they are below the fold. Each element animates once on first entry.
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
          if (!entry.isIntersecting) return;

          const target = /** @type {HTMLElement} */ (entry.target);

          const index = staggerField
            ? Number((target.dataset && target.dataset[staggerField]) || 0)
            : 0;

          // Ensure initial state before animating
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

          // Animate only once per element: stop observing after first trigger
          observer.unobserve(target);
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


