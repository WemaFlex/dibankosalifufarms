export default function CounterSection() {
    return (
        <section className="counter-section section-padding section-bg pt-0">
            <div className="bottom-shape">
                <img src="/assets/img/home-1/service/bottom-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="row g-4">

                    {/* COUNTER 1: Feed Production */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="counter-box-items-area">
                            <div className="icon">
                                <i className="flaticon-delivery"></i>
                            </div>
                            <div className="content">
                                {/* Data count set to something realistic for early feed production */}
                                <h2><span className="odometer" data-count="500">00</span>+</h2>
                                <p>Bags of Feed Produced</p>
                            </div>
                        </div>
                    </div>

                    {/* COUNTER 2: Livestock / Goats */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="counter-box-items-area">
                            <div className="icon">
                                <i className="flaticon-leaf"></i>
                            </div>
                            <div className="content">
                                {/* Realistic herd size for a growing farm */}
                                <h2><span className="odometer" data-count="150">00</span>+</h2>
                                <p>Healthy Goats Reared</p>
                            </div>
                        </div>
                    </div>

                    {/* COUNTER 3: Quality Guarantee */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="counter-box-items-area">
                            <div className="icon">
                                <i className="flaticon-like"></i>
                            </div>
                            <div className="content">
                                <h2><span className="odometer" data-count="100">00</span>%</h2>
                                <p>Quality Assured</p>
                            </div>
                        </div>
                    </div>

                    {/* COUNTER 4: Community/Partnerships */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="counter-box-items-area">
                            <div className="icon">
                                <i className="flaticon-farmer"></i>
                            </div>
                            <div className="content">
                                {/* Local vendors, markets, or B2B clients */}
                                <h2><span className="odometer" data-count="30">00</span>+</h2>
                                <p>Local Farming Partners</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
