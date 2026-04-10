
export default function FeatureSection() {
    return (
        <section className="feature-section section-padding fix">
            <div className="container">
                <div className="row g-4">

                    {/* FEATURE 1: QUALITY & HEALTH */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="feature-box-items">
                            <div className="feature-icon">
                                <img src="/assets/img/home-1/feature/feature-01.png" alt="img" />
                            </div>
                            <div className="feature-content">
                                <h3>Vet-Checked & Farm Fresh</h3>
                                <p>Strict veterinary oversight for our livestock and safe, high-yield farming practices for our crops to guarantee top-tier quality.</p>
                            </div>
                        </div>
                    </div>

                    {/* FEATURE 2: FEED STANDARDS */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="feature-box-items">
                            <div className="feature-icon">
                                <img src="/assets/img/home-1/feature/feature-03.png" alt="img" />
                            </div>
                            <div className="feature-content">
                                <h3>Formulated Animal Feed</h3>
                                <p>Nutrient-rich, specialized feed designed to maximize growth, yield, and overall health for poultry, cattle, swine, and sheep.</p>
                            </div>
                        </div>
                    </div>

                    {/* FEATURE 3: LOGISTICS & DELIVERY */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="feature-box-items">
                            <div className="feature-icon">

                                <img src="/assets/img/home-1/feature/feature-02.png" alt="img" />
                            </div>
                            <div className="feature-content">
                                <h3>Reliable Delivery</h3>
                                <p>Dependable transport and logistics ensuring your bulk crops, livestock, or feed reach your farm or business safely across Ghana.</p>
                            </div>
                        </div>
                    </div>

                    {/* FEATURE 4: PRICING & SUPPORT */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="feature-box-items">
                            <div className="feature-icon">
                                <img src="/assets/img/home-1/feature/feature-04.png" alt="img" />
                            </div>
                            <div className="feature-content">
                                <h3>Wholesale & Expert Support</h3>
                                <p>Competitive pricing for bulk buyers, backed by expert guidance to help you choose the exact products for your operational needs.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
