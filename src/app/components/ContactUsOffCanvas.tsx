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
                                    <Link href="index-2.html">
                                        <Image src="/assets/img/logo/black-logo.svg" alt="logo-img" height={200} width={200} />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <h3 className="offcanvas-title">Hello There!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi natus quasi sunt eum ducimus. </p>
                            <div className="mobile-menu fix mt-15"></div>
                            <div className="social-icon d-flex align-items-center">
                                <Link href="javascript:void(0)"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="javascript:void(0)"><i className="fab fa-twitter"></i></Link>
                                <Link href="javascript:void(0)"><i className="fab fa-youtube"></i></Link>
                                <Link href="javascript:void(0)"><i className="fab fa-linkedin-in"></i></Link>
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
                                            <h4><Link href="tel:+4903983493999">+49 (03) 9834 939 99</Link></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="content">
                                            <p>Send Email</p>
                                            <h4><Link href="mailto:yordomain@gmial.com">yordomain@gmial.com</Link></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fal fa-map-marker-alt"></i>
                                        </div>
                                        <div className="content">
                                            <p>Location</p>
                                            <h4>
                                                Chicago 53755 NY, USA
                                            </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <Link href="contact.html" className="theme-btn">
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
