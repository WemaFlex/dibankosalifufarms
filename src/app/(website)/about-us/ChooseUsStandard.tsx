
export default function ChooseUsStandardsSection() {
    return (
        <section className="choose-us-section-4 fix pt-0 section-padding section-bg">
            <div className="shape-1 float-bob-y">
                <img src="/assets/img/home-4/choose/shape-1.png" alt="img" />
            </div>
            <div className="container">
                <div className="choose-us-wrapper-4">

                    {/* Decorative floating images (Ensure you have good farm photos here) */}
                    <div className="man-thumb d-none d-xxl-block">
                        <img src="/assets/img/home-4/choose/choose-03.png" alt="Farmer" />
                    </div>

                    <div className="award-box-area d-none d-xxl-block wow fadeInUp">
                        <div className="top-items">
                            <div className="award-icon">
                                <img src="/assets/img/home-3/choose-us/award-icon.svg" alt="Quality Icon" />
                            </div>
                            {/* Startup Fix: Replaced fake award with a quality guarantee */}
                            <h4>100% Quality<br />Assured</h4>
                        </div>
                        <p>
                            Delivering the best agricultural products in the Ashanti Region.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="choose-us-left-img">
                                <img src="/assets/img/home-4/choose/choose-01.png" alt="Farm Operations" />
                                <div className="sm-thumb">
                                    <img src="/assets/img/home-4/choose/choose-02.png" alt="Fresh Crops" />
                                </div>
                                <div className="sm-thumb-2">
                                    <img src="/assets/img/home-4/choose/delivery-shape.png" alt="Delivery" />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7 col-lg-6 mt-4 mt-lg-0">
                            <div className="choose-us-content">
                                <div className="section-title mb-0">
                                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Our Standards</span>
                                    <h2 className="text-anim">Why Local Businesses Partner With Us</h2>
                                </div>
                                <p className="choose-text wow fadeInUp" data-wow-delay=".2s">
                                    At Dibanko Salifu Farms, we don't just grow crops or rear animals; we build reliable supply chains. We understand that whether you are a poultry farmer relying on our feed, or a market vendor selling our maize, consistency and quality are your top priorities.
                                </p>
                                <ul className="wow fadeInUp" data-wow-delay=".4s">
                                    <li>
                                        <i className="far fa-check"></i>
                                        Strict veterinary oversight for all our livestock
                                    </li>
                                    <li>
                                        <i className="far fa-check"></i>
                                        Scientifically formulated, high-yield animal feed pellets
                                    </li>
                                </ul>

                                <div className="progress-area">
                                    <div className="progress-wrap">
                                        <div className="pro-items wow fadeInUp animated" data-wow-delay=".5s">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    Quality Assurance
                                                </h6>
                                                <span className="point">
                                                    98%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                {/* Added inline style to force the bar to fill in React */}
                                                <div className="progress-value" style={{ width: "98%" }}></div>
                                            </div>
                                        </div>
                                        <div className="pro-items wow fadeInUp animated" data-wow-delay=".7s">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    Sustainable Practices
                                                </h6>
                                                <span className="point">
                                                    95%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-value style-two" style={{ width: "95%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a href="/contact" className="theme-btn wow fadeInUp" data-wow-delay=".9s">
                                    Partner With Us <i className="far fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}