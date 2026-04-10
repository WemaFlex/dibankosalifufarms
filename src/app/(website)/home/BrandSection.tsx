export default function BrandSection() {
    return (
        <div className="brand-section section-padding pt-0">
            <div className="container">
                <div className="top-text text-center wow fadeInUp">
                    {/* Startup Fix: Replaced the fake 60,000+ stat with a local, honest statement */}
                    <p>Proudly supplying local markets, vendors, and agribusinesses across the Ashanti Region</p>
                </div>

                {/* The Logo Slider */}
                <div className="swiper brand-slide">
                    <div className="swiper-wrapper">
                        {/* When you are ready, replace these placeholder images with the logos of:
                          - Wholesale buyers
                          - Local markets you sell at
                          - Agricultural associations you belong to
                          - Your veterinary or seed suppliers
                        */}
                        <div className="swiper-slide">
                            <div className="brand-image text-center">
                                <img src="/assets/img/home-1/brand/brand-01.png" alt="Partner Logo" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image text-center">
                                <img src="/assets/img/home-1/brand/brand-02.png" alt="Partner Logo" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image text-center">
                                <img src="/assets/img/home-1/brand/brand-03.png" alt="Partner Logo" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image text-center">
                                <img src="/assets/img/home-1/brand/brand-04.png" alt="Partner Logo" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image text-center">
                                <img src="/assets/img/home-1/brand/brand-05.png" alt="Partner Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}