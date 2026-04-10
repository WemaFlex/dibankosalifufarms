import Link from "next/link";

export default function FooterSection() {
    return (
        <footer className="footer-section fix section-padding bg-cover pb-0" style={{ backgroundImage: "url('assets/img/home-1/footer-bg.jpg')" }}>
            <div className="container">
                <div className="footer-widget-top">
                    <Link href="/" className="logo-img wow fadeInUp">
                        <img width={300} height={300} src="/assets/img/logo/white-logo.svg" alt="img" />
                    </Link>
                    <div className="content-items wow fadeInUp" data-wow-delay=".2s">
                        <h3>Subscrive Our Newsletter To Get More Updates</h3>
                        <form action="#">
                            <input type="text" placeholder="Your email" />
                            <button className="theme-btn" type="submit">
                                Subscribe
                                <i className="far fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="footer-widget-wrapper">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-8 wow fadeInUp" data-wow-delay=".2s">
                            <div className="footer-widget-items">
                                <div className="widget-head">
                                    <h5>Contact Us</h5>
                                </div>
                                <ul className="contact-list">
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="content">
                                            <h5>Email us:</h5>
                                            <p><Link href="mailto:dibankosalifu@gmail.com">dibankosalifu@gmail.com</Link></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="content">
                                            <h5>Location:</h5>
                                            <p>Ejura, Ashanti Region, Ghana</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="content">
                                            <h5>Phone:</h5>
                                            <p><Link href="tel:++233244522879">+233 24 452 2879</Link></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="footer-widget-items">
                                <div className="widget-head">
                                    <h5>
                                        Our Products & Services
                                    </h5>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link href="/shop?category=agriculture-foods">
                                            <i className="far fa-chevron-double-right"></i> Agriculture Foods
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shop?category=livestock">
                                            <i className="far fa-chevron-double-right"></i> Livestock
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shop?category=animal-feed">
                                            <i className="far fa-chevron-double-right"></i> Animal Feed
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="footer-widget-items">
                                <div className="widget-head">
                                    <h5>
                                        Useful Links
                                    </h5>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link href="/team">
                                            <i className="far fa-chevron-double-right"></i> Meet The Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <i className="far fa-chevron-double-right"></i> Our FAQs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <i className="far fa-chevron-double-right"></i> 24/7 Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <i className="far fa-chevron-double-right"></i> About Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="footer-widget-items">
                                <div className="widget-head">
                                    <h5>
                                        Our News
                                    </h5>
                                </div>
                                <ul className="recent-post">
                                    <li>
                                        <div className="thumb">
                                            <img src="/assets/img/home-1/footer-post-1.jpg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <p>12 January, 2025</p>
                                            <h4><Link href="news-details.html">Holistic Healing: Exploring Health Coaching Techniques</Link></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img src="/assets/img/home-1/footer-post-2.jpg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <p>09 May, 2025</p>
                                            <h4><Link href="news-details.html">How Can You Growing Your Agriculture Products</Link></h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-wrapper">
                        <p className="text-1 wow fadeInUp">© 2025 Agron. All Rights Reserved</p>
                        <div className="social-icon wow fadeInUp" data-wow-delay=".2s">
                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                            <Link href="#"><i className="fab fa-dribbble"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                        <div className="bottom-img wow fadeInUp" data-wow-delay=".4s">
                            <img src="/assets/img/home-1/footer-bottom.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
