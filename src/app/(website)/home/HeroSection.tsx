export default function HeroSection() {

    return (
        <section className="hero-section hero-1 fix">
            <div className="array-button">
                <button className="array-prev">
                    <svg width="55" height="28" viewBox="0 0 55 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.363503 12.9368L12.8632 0.436946C13.3122 -0.087371 14.1013 -0.148493 14.6257 0.30063C15.15 0.749646 15.2111 1.53875 14.762 2.06307C14.7201 2.11195 14.6745 2.1576 14.6257 2.19939L4.26339 12.5742H53.7501C54.4403 12.5742 55 13.1339 55 13.8243C55 14.5147 54.4403 15.0742 53.7501 15.0742H4.26339L14.6257 25.4365C15.15 25.8855 15.2111 26.6746 14.762 27.1989C14.3129 27.7232 13.5238 27.7844 12.9995 27.3352C12.9507 27.2933 12.905 27.2478 12.8632 27.1989L0.363396 14.6991C-0.121178 14.2117 -0.121174 13.4243 0.363503 12.9368Z" fill="white" />
                    </svg>
                </button>
                <button className="array-next">
                    <svg width="55" height="28" viewBox="0 0 55 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54.6365 12.9368L42.1368 0.436946C41.6878 -0.087371 40.8987 -0.148493 40.3743 0.30063C39.85 0.749646 39.7889 1.53875 40.238 2.06307C40.2799 2.11195 40.3255 2.1576 40.3743 2.19939L50.7366 12.5742H1.24994C0.559658 12.5742 0 13.1339 0 13.8243C0 14.5147 0.559658 15.0742 1.24994 15.0742H50.7366L40.3743 25.4365C39.85 25.8855 39.7889 26.6746 40.238 27.1989C40.6871 27.7232 41.4762 27.7844 42.0005 27.3352C42.0493 27.2933 42.095 27.2478 42.1368 27.1989L54.6366 14.6991C55.1212 14.2117 55.1212 13.4243 54.6365 12.9368Z" fill="white" />
                    </svg>
                </button>
            </div>
            <div className="swiper banner-active">
                <div className="swiper-wrapper">

                    {/* SLIDE 1: CROPS */}
                    <div className="swiper-slide">
                        <div className="hero-height">
                            {/* Update this background image to a high-quality field/crop photo */}
                            <div className="hero-bg bg-cover" style={{ backgroundImage: "url('/assets/img/home-1/hero/hero-01.png')" }}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-content">
                                            <span>
                                                <img src="/assets/img/home-1/hero/hero-title.svg" alt="img" />
                                                Maize, Tomatoes, Soybeans & More
                                            </span>
                                            <h1>Premium </h1>
                                            <h2>Ghanaian Crops</h2>
                                        </div>
                                        <div className="hero-button">
                                            <a href="/shop" className="theme-btn">
                                                Shop Fresh Produce
                                                <i className="far fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SLIDE 2: LIVESTOCK */}
                    <div className="swiper-slide">
                        <div className="hero-height">
                            {/* Update this background image to a photo of healthy goats */}
                            <div className="hero-bg bg-cover" style={{ backgroundImage: "url('/assets/img/home-1/hero/hero-01.png')" }}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-content">
                                            <span>
                                                <img src="/assets/img/home-1/hero/hero-title.svg" alt="img" />
                                                Healthy, Well-Bred Livestock
                                            </span>
                                            <h1>Quality</h1>
                                            <h2>Farm-Raised Goats</h2>
                                        </div>
                                        <div className="hero-button">
                                            <a href="/shop" className="theme-btn">
                                                View Livestock
                                                <i className="far fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SLIDE 3: ANIMAL FEED */}
                    <div className="swiper-slide">
                        <div className="hero-height">
                            {/* Update this background image to a photo of feed bags or poultry/cattle eating */}
                            <div className="hero-bg bg-cover" style={{ backgroundImage: "url('/assets/img/home-1/hero/hero-01.png')" }}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-content">
                                            <span>
                                                <img src="/assets/img/home-1/hero/hero-title.svg" alt="img" />
                                                Poultry, Cattle, Swine & Dairy
                                            </span>
                                            <h1>Fortified</h1>
                                            <h2>Animal Feed</h2>
                                            {/* Optional: You could add a small p tag here if your CSS supports it for the sizes */}
                                            <p className="text-white mt-3 fw-bold">Available in 15kg and 25kg bags</p>
                                        </div>
                                        <div className="hero-button">
                                            <a href="/shop" className="theme-btn">
                                                Order Feed Now
                                                <i className="far fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}
