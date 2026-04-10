import Link from "next/link";

export default function ShopSection() {
    return (
        <section className="shop-section section-padding fix pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Direct From Ejura</span>
                    <h2 className="text-anim">Our Featured Farm Products</h2>
                </div>
                <div className="row">

                    {/* PRODUCT 1: MAIZE */}
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="shop-box-items">
                            <div className="shop-image">
                                <img src="/assets/img/home-1/shop/shop-01.png" alt="Premium Maize" />
                                <span className="sale-icon">Fresh</span>
                                <ul className="shop-icon d-flex justify-content-center align-items-center">
                                    <li>
                                        <Link href="/shop/cart">
                                            <i className="far fa-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shop?q=maize"><i className="far fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h5><Link href="/shop/maize">Premium White Maize</Link></h5>
                                <ul>
                                    <li>GH¢ 350.00</li>
                                    {/* Optional: Add a slashed out price if you want to show a discount */}
                                    {/* <li><del>GH¢ 400.00</del></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCT 2: ANIMAL FEED */}
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="shop-box-items">
                            <div className="shop-image">
                                <img src="/assets/img/home-1/shop/shop-02.png" alt="Poultry Feed" />
                                <span className="sale-icon">Top Seller</span>
                                <ul className="shop-icon d-flex justify-content-center align-items-center">
                                    <li>
                                        <Link href="/shop/cart">
                                            <i className="far fa-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shop?q=feed"><i className="far fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h5><Link href="/shop/feed">Fortified Poultry Feed (25kg)</Link></h5>
                                <ul>
                                    <li>GH¢ 220.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCT 3: LIVESTOCK (GOAT) */}
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="shop-box-items">
                            <div className="shop-image">
                                <img src="/assets/img/home-1/shop/shop-03.png" alt="Healthy Goat" />
                                <ul className="shop-icon d-flex justify-content-center align-items-center">
                                    <li>
                                        <Link href="/shop/cart">
                                            <i className="far fa-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shop?q=livestock"><i className="far fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h5><Link href="/shop/livestock">Healthy Farm-Raised Goat</Link></h5>
                                <ul>
                                    <li>GH¢ 1,200.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCT 4: SOYBEANS */}
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="shop-box-items">
                            <div className="shop-image">
                                <img src="/assets/img/home-1/shop/shop-04.png" alt="Fresh Soybeans" />
                                <span className="sale-icon">Sale</span>
                                <span className="discount-icon">10% Off</span>
                                <ul className="shop-icon d-flex justify-content-center align-items-center">
                                    <li>
                                        <Link href="/shop/cart">
                                            <i className="far fa-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shop?q=soybeans"><i className="far fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h5><Link href="/shop/soybeans">Fresh Farm Soybeans</Link></h5>
                                <ul>
                                    <li>GH¢ 450.00</li>
                                    <li>
                                        <del>GH¢ 500.00</del>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}