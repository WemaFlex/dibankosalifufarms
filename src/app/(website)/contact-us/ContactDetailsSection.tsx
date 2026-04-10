
export default function ContactDetailsSection() {
    return (
        <section className="contact-info-section section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="contact-info-box">
                            <div className="shape-1">
                                <img src="assets/img/inner-page/contact-shape.png" alt="img"/>
                            </div>
                            <div className="contact-top">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <h3>Mail us 24/7</h3>
                            </div>
                            <p>
                                <a href="mailto:agron@gmail.com">agron@gmail.com</a>
                            </p>
                            <p>
                                <a href="supportagron%40gmail.html">supportagron@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="contact-info-box">
                            <div className="shape-1">
                                <img src="assets/img/inner-page/contact-shape.png" alt="img" />
                            </div>
                            <div className="contact-top">
                                <div className="icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <h3>Call Us Anytime</h3>
                            </div>
                            <p>
                                <a href="tel:(+55)7320618278">Phone : (+55) 732 - 061 - 8278</a>
                            </p>
                            <p>
                                <a href="tel:+69009494094">Mobile : (+01) 647 - 448 - 3065</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-info-box">
                            <div className="shape-1">
                                <img src="assets/img/inner-page/contact-shape.png" alt="img"/>
                            </div>
                            <div className="contact-top">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <h3>Our Location</h3>
                            </div>
                            <p>
                                4821 Ride Top, Anch St, Alaska <br/> 997998, USA main city.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
