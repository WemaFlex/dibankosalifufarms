import Image from "next/image";
import Link from "next/link";

export default function StickyHeader() {
    return (
        <header id="header-sticky" className="header-1">
            <div className="container">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <form action="#" className="search-form">
                            <Link href="/home" className="top-logo flex items-center">
                                <Image src="/assets/img/logo/black-logo-top.svg" alt="Top Logo" height={50} width={100} />
                                {/* <Image src="/assets/img/logo/black-logo-bottom.svg" alt="Bottom Logo" height={50} width={220} className="-ml-4 mt-2" /> */}
                            </Link>
                        </form>
                        <Link href="/home" className="header-logo">
                            <Image src="/assets/img/logo/black-logo.svg" alt="img" height={50} width={50} />
                        </Link>

                        <div className="mean__menu-wrapper">
                            <div className="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/team">Our Team</Link></li>
                                        <li><Link href="/shop">Shop</Link></li>
                                        <li><Link href="/contact-us">Contact Us</Link></li>
                                        <li><Link href="/about-us">About Us</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center">
                            <Link href="contact.html" className="theme-btn">
                                Let’s Talk
                                <i className="far fa-arrow-right"></i>
                            </Link>
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
