"use client";

import BreadCrum from "./components/BreadCrum";
import Layout from "./(website)/layout";

export default function CustomMouseCursor() {
    return (
        <Layout>
            <BreadCrum slug="404 Page" />

            <section className="error-section fix section-padding">
                <div className="container">
                    <div className="error-items">
                        <div className="thumb wow fadeInUp" data-wow-delay=".2s">
                            <img src="/assets/img/404.png" alt="img" />
                        </div>
                        <div className="content">
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">Page Not Found</h2>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                                Something went wrong, looks like this page doesn&apos;t exist anymore.
                            </p>
                            <a href="/" className="theme-btn wow fadeInUp" data-wow-delay=".6s">
                                Go To Homepage
                                <i className="far fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
