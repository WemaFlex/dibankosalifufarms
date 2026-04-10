
export default function ContactDetailsSection() {
    return (
        <section className="contact-info-section section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="contact-info-box">
                            <div className="shape-1">
                                <img src="assets/img/inner-page/contact-shape.png" alt="img" />
                            </div>
                            <div className="contact-top">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <h3>Mail us 24/7</h3>
                            </div>
                            <p>
                                <a href="mailto:dibankosalifu@gmail.com">dibankosalifu@gmail.com</a>
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
                                {/* //+233 24 452 2879 */}
                                <a href="tel:(+55)7320618278">Phone : (+233) 244 - 522 - 879</a>
                            </p>
                            <p>
                                <a href="tel:+69009494094">WhatsApp : (+233) 244 - 522 - 879</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-info-box">
                            <div className="shape-1">
                                <img src="assets/img/inner-page/contact-shape.png" alt="img" />
                            </div>
                            <div className="contact-top">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <h3>Our Location</h3>
                            </div>
                            <p>
                                Ejura <br />Ashanti Region, Ghana.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
