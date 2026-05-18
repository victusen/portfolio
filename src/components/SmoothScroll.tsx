"use client";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({children}: {children: React.ReactNode}) {
    const easeFunction = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
    return (
        <ReactLenis root options={{
            lerp: 0.05,
            duration: 2.2,
            wheelMultiplier: 0.5,
            touchMultiplier: 2,
            smoothWheel: true,
            easing: easeFunction,
        }}>
            { children }
        </ReactLenis>
    );
};
