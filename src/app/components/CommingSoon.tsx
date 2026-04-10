
export default function CommingSoon() {
    return (
        <section className="coming-soon-section pb-0 fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="cooming-soon-items">
                            <a href="/home" className="coming-soon-logo wow fadeInUp ">
                                <img width={300} height={300} src="/assets/img/logo/black-logo.svg" alt="img" className="-mt-5" />
                            </a>
                            <p className="wow fadeInUp" data-wow-delay=".2s">
                                UNDER CONSTRUCTION
                            </p>
                            <h2 className="text wow fadeInUp" data-wow-delay=".4s">
                                COMING SOON!
                            </h2>
                            <form action="#">
                                <div className="form-clt">
                                    <input type="text" name="email" id="email" placeholder="Enter email" />
                                    <button type="submit" className="icon">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                            <div className="social-icon d-flex align-items-center mb-3">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fas fa-basketball-ball"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
