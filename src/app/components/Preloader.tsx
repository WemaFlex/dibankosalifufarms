"use client"; // This is required because we are using hooks!

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Whenever the route changes, reset the preloader to visible
        setIsLoading(true);

        // 2. Wait a fraction of a second for the new page to mount, then hide it smoothly
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 1000ms matches the typical template loading feel

        // Cleanup the timer to prevent memory leaks
        return () => clearTimeout(timer);
    }, [pathname]); // The dependency array ensures this runs on every page change!

    return (
        <div
            id="preloader"
            className="preloader"
            style={{
                // This inline style completely replaces the template's broken jQuery fadeOut
                opacity: isLoading ? 1 : 0,
                visibility: isLoading ? "visible" : "hidden",
                transition: "opacity 0.6s ease-out, visibility 0.6s ease-out",
                zIndex: 99999 // Ensures it stays on top of everything
            }}
        >
            <div className="animation-preloader">
                <div className="spinner-wrapper ">
                    <div className="spinner"></div>
                    <img src="/assets/img/logo/black-logo-top.svg" alt="Logo" className="spinner-logo" />
                </div>
                <div className="logo-loading mt-5 text-center">
                    <img
                        width={300}
                        src="/assets/img/logo/black-logo-bottom.svg"
                        alt="Logo"
                        className="preloader-custom-logo"
                    />
                </div>
                <p className="text-center">Loading</p>
            </div>

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
        </div>
    );
}