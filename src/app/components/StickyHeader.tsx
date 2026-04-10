import Image from "next/image";

export default function StickyHeader() {
    return (
        <header id="header-sticky" className="header-1">
            <div className="container">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <form action="#" className="search-form">
                            <a href="/home" className="top-logo flex items-center">
                                <Image src="/assets/img/logo/black-logo-top.svg" alt="Top Logo" height={50} width={100} />
                                {/* <Image src="/assets/img/logo/black-logo-bottom.svg" alt="Bottom Logo" height={50} width={220} className="-ml-4 mt-2" /> */}
                            </a>
                        </form>

                        <a href="/home" className="header-logo">
                            <Image src="/assets/img/logo/black-logo.svg" alt="img" height={50} width={50} />
                        </a>

                        <div className="mean__menu-wrapper">
                            <div className="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/team">Our Team</a></li>
                                        <li><a href="/shop">Shop</a></li>
                                        <li><a href="/faqs">FAQs</a></li>
                                        <li><a href="/contact-us">Contact Us</a></li>
                                        <li><a href="/about-us">About Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center">
                            <a href="/contact-us" className="theme-btn">
                                Let&apos;s Talk
                                <i className="far fa-arrow-right"></i>
                            </a>
                            <div className="header__hamburger my-auto">
                                <div className="sidebar__toggle">
                                    <div className="header-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
