
export default function ContactFormSection() {
    return (
        <section className="contact-section section-bg fix">
            <div className="shape-1 float-bob-x">
                <img src="/assets/img/home-1/contact-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="contact-wrapper">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-6">
                            <div className="contact-content">
                                <div className="section-title mb-0">
                                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Contact With Us</span>
                                    <h2>Contact Us for Organic <br /> and Natural Products</h2>
                                </div>
                                <form action="https://modinathemes.com/agron-html/contact.php" id="contact-form" className="contact-form-box">
                                    <div className="row g-4 align-items-center justify-content-center">
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                            <div className="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                            <div className="form-clt">
                                                <input type="text" name="email" id="email2" placeholder="Enter name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                            <div className="form-clt">
                                                <input type="text" name="phone" id="phone" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                            <div className="form-clt">
                                                <input type="text" name="subject" id="subject" placeholder="Phone number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                            <div className="form-clt">
                                                <input type="text" name="subject" id="subject2" placeholder="Your subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8s">
                                            <div className="form-clt">
                                                <textarea name="message" id="message" placeholder="Write a message..."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                                            <div className="contact-button">
                                                <button type="submit" className="theme-btn">
                                                    Send Your Message
                                                    <i className="far fa-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-image">
                                <img src="/assets/img/inner-page/contact-image.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
