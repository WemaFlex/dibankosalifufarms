"use client";

import { useEffect, useState } from "react";

export default function PreLoader() {
    // 1. Controls when to start the exit animation
    const [isFading, setIsFading] = useState(false);
    // 2. Controls when to actually delete the component
    const [isUnmounted, setIsUnmounted] = useState(false);

    useEffect(() => {
        // Step 1: Trigger the smooth slide/fade animation after 1 second
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 1000); // Adjust how long the preloader forces you to wait

        // Step 2: Completely remove it from the DOM *after* the animation finishes
        const unmountTimer = setTimeout(() => {
            setIsUnmounted(true);
        }, 1600); // This should be fadeTimer (1000) + the duration of your CSS animation (e.g., 600ms)

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(unmountTimer);
        };
    }, []);

    // Only return null after the animation has finished playing
    if (isUnmounted) return null;

    return (
        < div id="preloader" className={`preloader ${isFading ? 'loaded' : ''}`}>
            <div className="animation-preloader">
                <div className="spinner-wrapper ">
                    <div className="spinner"></div>
                    <img src="/assets/img/logo/black-logo-top.svg" alt="Logo" className="spinner-logo" />
                </div>
                <div className="logo-loading mt-3 text-center">
                    <img
                        width={300}
                        src="/assets/img/logo/black-logo-bottom.svg"
                        alt="Logo"
                        className="preloader-custom-logo"
                    />
                </div>
                <p className="text-center">Loading</p>
            </div>

            {/* The curtain effect walls */}
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </ div >
    );
}