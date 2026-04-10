
export default function NewsSection() {
    return (
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Our News</span>
                    <h2 className="text-anim">Latest News & Articles</h2>
                    <p className="mt-2 wow fadeInUp" data-wow-delay=".2s">
                        Lorem ipsum dolor sit amet, porro quisquam est, qui dolorem ipsum quia dolor sit amet, <br /> consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                    </p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-box-items">
                            <div className="news-image">
                                <img src="/assets/img/home-1/news/news-01.jpg" alt="img" />
                                <div className="post-date">
                                    <h4>23</h4>
                                    <p>JAN</p>
                                </div>
                            </div>
                            <div className="news-content">
                                <span>Agricultural</span>
                                <h3><a href="news-details.html">Minuter highest technic clothes trainer observe that</a></h3>
                                <p>
                                    Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet.
                                </p>
                                <a href="news-details.html" className="link-btn">More Details <i className="far fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="news-box-items">
                            <div className="news-image">
                                <img src="/assets/img/home-1/news/news-02.jpg" alt="img" />
                                <div className="post-date">
                                    <h4>30</h4>
                                    <p>JAN</p>
                                </div>
                            </div>
                            <div className="news-content">
                                <span>Agricultural</span>
                                <h3><a href="news-details.html">Breaking Down Barriers to Crop Insurance</a></h3>
                                <p>
                                    Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet.
                                </p>
                                <a href="news-details.html" className="link-btn">More Details <i className="far fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="news-box-items">
                            <div className="news-image">
                                <img src="/assets/img/home-1/news/news-03.jpg" alt="img" />
                                <div className="post-date">
                                    <h4>12</h4>
                                    <p>JAN</p>
                                </div>
                            </div>
                            <div className="news-content">
                                <span>Agricultural</span>
                                <h3><a href="news-details.html">How to Care for Cows to have the Best Quality Meat</a></h3>
                                <p>
                                    Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet.
                                </p>
                                <a href="news-details.html" className="link-btn">More Details <i className="far fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
