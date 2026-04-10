import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
    return (
        <div className="header-top-section p-1">
            <div className="container">
                <div className="header-top-wrapper">
                    <ul className="header-contact-list">
                        <li>
                            <i className="fal fa-envelope"></i>
                            <Link href="mailto:dibankosalifu@gmail.com">
                                dibankosalifu@gmail.com
                            </Link>
                        </li>
                        <li>
                            <i className="far fa-phone-alt"></i>
                            <Link href="tel:+233 24 452 2879">
                                +233 24 452 2879
                            </Link>
                        </li>
                    </ul>
                    <Link href="/home" className="top-logo flex items-center">
                        <Image src="/assets/img/logo/black-logo-top.svg" alt="Top Logo" height={43} width={50} />
                        <Image src="/assets/img/logo/black-logo-bottom.svg" alt="Bottom Logo" height={50} width={220} className="-ml-4 mt-2" />
                    </Link>
                    <div className="head-right">
                        <div className="flag-wrap">
                            <div className="flag">
                                <img src="/assets/img/flag.png" alt="flag" />
                            </div>
                            <select className="single-select w-100">
                                <option>EN</option>
                                <option>AU</option>
                                <option>NZ</option>
                            </select>
                        </div>
                        <div className="line-shape"></div>
                        <div className="social-icon">
                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                            <Link href="#"><i className="fab fa-dribbble"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
