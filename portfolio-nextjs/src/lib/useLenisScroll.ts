"use client";
import { useLenis } from "lenis/react";

function useLenisScroll() {
    const lenis = useLenis();

    const scrollToElement = (elementId: string) => {
        if (!lenis) return;

        const element = document.getElementById(elementId);
        if (element) {
            lenis.scrollTo(element, {
                duration: 2.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        };
    };

    return scrollToElement
};

export default useLenisScroll