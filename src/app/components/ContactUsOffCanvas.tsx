import Image from "next/image";
import Link from "next/link";

export default function ContactUsOffCanvas() {
    return (
        <>
            <div className="fix-area">
                <div className="offcanvas__info">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    {/* FIX: Updated to Next.js standard home route */}
                                    <Link href="/">
                                        <Image src="/assets/img/logo/black-logo.svg" alt="Dibanko Salifu Farms" height={200} width={200} />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>

                            <h3 className="offcanvas-title">Welcome to Dibanko Salifu Farms!</h3>
                            <p>Your trusted partner for high-quality crops, well-bred livestock, and fortified animal feed in the Ashanti Region.</p>

                            <div className="mobile-menu fix mt-15"></div>

                            <div className="social-icon d-flex align-items-center">
                                {/* Changed javascript:void(0) to # to prevent React warnings */}
                                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                <Link href="#"><i className="fab fa-youtube"></i></Link>
                                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                            </div>

                            <div className="offcanvas__contact">
                                <h3>Contact Us</h3>
                                <ul className="contact-list">
                                    <li>
                                        <div className="icon">
                                            <i className="far fa-phone-alt"></i>
                                        </div>
                                        <div className="content">
                                            <p>Call Us</p>
                                            {/* Updated Phone */}
                                            <h4><Link href="tel:+233244522879">+233 24 452 2879</Link></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="content">
                                            <p>Send Email</p>
                                            {/* Updated Email */}
                                            <h4><Link href="mailto:dibankosalifu@gmail.com">dibankosalifu@gmail.com</Link></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fal fa-map-marker-alt"></i>
                                        </div>
                                        <div className="content">
                                            <p>Location</p>
                                            {/* Updated Location */}
                                            <h4>Ejura, Ashanti Region, Ghana</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* FIX: Updated to Next.js standard contact route */}
                            <Link href="/contact" className="theme-btn">
                                Let’s Talk
                                <i className="far fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas__overlay"></div>
        </>
    );
}