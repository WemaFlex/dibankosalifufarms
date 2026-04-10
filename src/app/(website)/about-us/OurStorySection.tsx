import Link from "next/link";

export default function OurStorySection() {
    return (
        <section className="choose-us-section-3 section-padding fix">
            <div className="container">
                <div className="choose-us-wrapper-3">
                    <div className="row align-items-center g-4">

                        {/* LEFT COLUMN: IMAGES & BADGE */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="choose-us-image-items white-style">
                                {/* Use a great photo of the farm, the fields, or the founders here */}
                                <img src="/assets/img/home-3/choose-us/choose-01.jpg" alt="Dibanko Salifu Farms in Ejura" />

                                <div className="award-box-area">
                                    <div className="top-items">
                                        <div className="award-icon">
                                            {/* You could swap this SVG for a little leaf or map pin icon */}
                                            <img src="/assets/img/home-3/choose-us/award-icon.svg" alt="Local Farm" />
                                        </div>
                                        {/* Startup Fix: Replaced "Award winning" with a focus on your roots */}
                                        <h4>Proudly Based <br /> in Ejura</h4>
                                    </div>
                                    <p>
                                        Supporting the Ashanti Region with sustainable agriculture.
                                    </p>
                                </div>

                                <div className="treat-image">
                                    <img src="/assets/img/home-3/choose-us/teat-shape.png" alt="Decorative Shape" />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: THE STORY */}
                        <div className="col-lg-6">
                            <div className="choose-us-content">
                                <div className="section-title mb-0">
                                    <span className="wow fadeInUp">
                                        <img src="/assets/img/sub-title.svg" alt="img" />
                                        Our Story
                                    </span>
                                    <h2 className="text-anim">Cultivating a Sustainable Food Future in Ghana</h2>
                                </div>

                                <p className="choose-text wow fadeInUp" data-wow-delay=".3s">
                                    Dibanko Salifu Farms began as a startup with a clear vision: to strengthen the local agricultural supply chain. Located in the fertile heartland of Ejura, we recognized the need for a reliable, high-quality source of staple crops, ethically raised livestock, and nutrient-dense animal feed.
                                </p>

                                <div className="icon-items-area">
                                    {/* CORE VALUE 1 */}
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon">
                                            <i className="flaticon-leaf"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Commitment to Quality</h4>
                                            <p>
                                                From formulating the perfect 25kg poultry feed to harvesting premium white maize, we refuse to cut corners on the products that feed our communities.
                                            </p>
                                        </div>
                                    </div>

                                    {/* CORE VALUE 2 */}
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                        <div className="icon">
                                            <i className="flaticon-food-safety"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Ethical Farming Practices</h4>
                                            <p>
                                                Whether we are managing our free-range goat herds or cultivating our fields, we prioritize animal welfare and sustainable land management.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/shop" className="theme-btn mt-5 wow fadeInUp" data-wow-delay=".9s">
                                    Explore Our Products <i className="far fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}