import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="about-section section-padding fix pt-0">
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7 pe-xl-5">
                            <div className="about-left-content">
                                <div className="section-title mb-0">
                                    <span className="wow fadeInUp">
                                        <img src="/assets/img/sub-title.svg" alt="img" />
                                        About Dibanko Salifu Farms
                                    </span>
                                    <h2 className="text-anim">Pioneering Sustainable Agriculture in Ejura.</h2>
                                </div>
                                <p className="about-text wow fadeInUp" data-wow-delay=".2s">
                                    Located in the agricultural heartland of Ejura, Ashanti Region, Dibanko Salifu Farms is a proud Ghanaian startup dedicated to a sustainable food future. We specialize in rearing healthy goats, cultivating staple crops like maize and beans, and producing nutrient-dense feed pellets. Our mission is to support local communities and businesses with ethical, reliable, farm-to-table excellence.
                                </p>

                                <div className="list-items wow fadeInUp" data-wow-delay=".4s">
                                    <ul>
                                        <li>
                                            <i className="far fa-check"></i>
                                            Sustainable Maize & Beans
                                        </li>
                                        <li>
                                            <i className="far fa-check"></i>
                                            Quality Feed Pellet Production
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <i className="far fa-check"></i>
                                            Ethical Goat Rearing
                                        </li>
                                        <li>
                                            <i className="far fa-check"></i>
                                            Proudly Based in the Ashanti Region
                                        </li>
                                    </ul>
                                </div>

                                <div className="about-bottom-area mt-4">
                                    <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".6s">
                                        More About Us <i className="far fa-arrow-right"></i>
                                    </Link>
                                    <div className="phone-box-items wow fadeInUp" data-wow-delay=".8s">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="content">
                                            <p>Call Us Today:</p>
                                            <Link href="tel:+233540000000">+233 24 452 2879</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="about-right-items">
                                <div className="about-top-box wow fadeInUp" data-wow-delay=".3s">
                                    <p>Our Commitment</p>
                                    <h2><span className="odometer" data-count="100">00</span>%</h2>
                                    <p className="text">
                                        Dedicated to sustainable, high-quality agricultural practices right here in Ghana.
                                    </p>
                                </div>

                                <div className="about-image wow fadeInUp" data-wow-delay=".5s">
                                    <img src="/assets/img/home-1/about/about-01.jpg" alt="Dibanko Salifu Farms" className="w-100 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
