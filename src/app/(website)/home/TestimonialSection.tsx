
export default function TestimonialSection() {
    return (
        <section className="testimonial-section section-padding fix pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <span className="wow fadeInUp">
                        <img src="/assets/img/sub-title.svg" alt="img" />
                        Community Feedback
                    </span>
                    <h2 className="text-anim">What Our Partners Say <br /> About Dibanko Salifu Farms</h2>
                </div>
                <div className="testimonial-wrapper">
                    <div className="row align-items-center g-4">
                        <div className="col-xl-4 col-lg-4 col-md-5 wow fadeInUp">
                            <div className="testimonial-image">
                                {/* A nice photo of your farm workers, your feed bags, or a happy client here */}
                                <img src="/assets/img/home-1/testimonial/testimonial-01.jpg" alt="Dibanko Farms Partner" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 col-md-7">
                            <div className="swiper testimonial-slide">
                                <div className="swiper-wrapper">

                                    {/* TESTIMONIAL 1 */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-box-items">
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <h3>
                                                “Since switching to Dibanko Salifu&apos;s formulated poultry feed, the health and weight of our flock have noticeably improved. A reliable, high-quality partner for any local farmer!”
                                            </h3>
                                            <div className="client-info-area">
                                                <div className="client-info">
                                                    <div className="client-image">
                                                        <img src="/assets/img/home-1/testimonial/client-image.png" alt="Client" />
                                                    </div>
                                                    <div className="content">
                                                        <p>Poultry Farmer, Ejura</p>
                                                        <h5>Kwame Mensah</h5>
                                                    </div>
                                                </div>
                                                <div className="icon">
                                                    <i className="flaticon-quote"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* You can add more <div className="swiper-slide"> blocks here for more quotes! */}

                                </div>
                            </div>
                        </div>

                        {/* Slider Navigation Arrows */}
                        <div className="col-xl-1">
                            <div className="array-buttons">
                                <button className="array-prev">
                                    <svg width="37" height="19" viewBox="0 0 37 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.24454 9.88849L8.65344 18.2975C8.9555 18.6502 9.48636 18.6913 9.83908 18.3892C10.1918 18.0871 10.2329 17.5562 9.93078 17.2035C9.9026 17.1706 9.87196 17.1399 9.83908 17.1118L2.8681 10.1324L36.1591 10.1324C36.6235 10.1324 37 9.75588 37 9.29144C37 8.82699 36.6235 8.45057 36.1591 8.45057L2.8681 8.45057L9.83908 1.47959C10.1918 1.17753 10.2329 0.64667 9.93078 0.293948C9.62864 -0.0587745 9.09786 -0.099893 8.74514 0.202244C8.71226 0.230427 8.68155 0.261067 8.65344 0.293948L0.244467 8.70292C-0.0815177 9.03078 -0.0815176 9.56048 0.24454 9.88849Z" fill="#808080" />
                                    </svg>
                                </button>
                                <button className="array-next">
                                    <svg width="37" height="19" viewBox="0 0 37 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36.7555 8.70292L28.3466 0.293945C28.0445 -0.0587769 27.5136 -0.0998951 27.1609 0.202242C26.8082 0.504307 26.7671 1.03516 27.0692 1.38788C27.0974 1.42076 27.128 1.45148 27.1609 1.47959L34.1319 8.45902H0.840868C0.376497 8.45902 0 8.83552 0 9.29996C0 9.76441 0.376497 10.1408 0.840868 10.1408H34.1319L27.1609 17.1118C26.8082 17.4139 26.7671 17.9447 27.0692 18.2975C27.3714 18.6502 27.9021 18.6913 28.2549 18.3892C28.2877 18.361 28.3185 18.3303 28.3466 18.2975L36.7555 9.88848C37.0815 9.56062 37.0815 9.03092 36.7555 8.70292Z" fill="#808080" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}