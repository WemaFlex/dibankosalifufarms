"use client";
export default function Home() {
  return (
    <div>
      {/* <!-- Preloader Start --> */}
      {/* <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner">
          </div>
          <div className="txt-loading">
            <span data-text-preloader="A" className="letters-loading">
              A
            </span>
            <span data-text-preloader="G" className="letters-loading">
              G
            </span>
            <span data-text-preloader="R" className="letters-loading">
              R
            </span>
            <span data-text-preloader="O" className="letters-loading">
              O
            </span>
            <span data-text-preloader="N" className="letters-loading">
              N
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Back To Top Start --> */}
      <button id="back-top" className="back-to-top">
        <i className="far fa-arrow-up"></i>
      </button>

      {/* <!-- MouseCursor Start --> */}
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>

      {/* <!-- Offcanvas Area Start --> */}
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="index-2.html">
                    <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                  </a>
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
                <a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a>
                <a href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
                <a href="javascript:void(0)"><i className="fab fa-youtube"></i></a>
                <a href="javascript:void(0)"><i className="fab fa-linkedin-in"></i></a>
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
                      <h4><a href="tel:+4903983493999">+49 (03) 9834 939 99</a></h4>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="content">
                      <p>Send Email</p>
                      <h4><a href="mailto:yordomain@gmial.com">yordomain@gmial.com</a></h4>
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
              <a href="contact.html" className="theme-btn">
                Let’s Talk
                <i className="far fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>

      {/* <!-- Header Top Start --> */}
      <div className="header-top-section">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="header-contact-list">
              <li>
                <i className="fal fa-envelope"></i>
                <a href="mailto:agron@gmial.com">
                  agron@gmial.com
                </a>
              </li>
              <li>
                <i className="far fa-phone-alt"></i>
                <a href="tel:+00479394888">
                  +00 (47) 939 4888
                </a>
              </li>
            </ul>
            <a href="index-2.html" className="top-logo">
              <img src="/assets/img/logo/black-logo.svg" alt="img" />
            </a>
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
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-dribbble"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" className="header-1">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <form action="#" className="search-form">
                <input type="text" placeholder="Search anything..." />
                <button type="submit"><i className="fal fa-search"></i></button>
              </form>
              <a href="index-2.html" className="header-logo">
                <img src="/assets/img/logo/black-logo.svg" alt="img" />
              </a>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown menu-thumb">
                        <a href="javascript:void(0)">
                          Home
                          <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="submenu has-homemenu">
                          <li>
                            <div className="homemenu-items">
                              <div className="row row-cols-xl-5 row-cols-md-2 row-cols-2">
                                <div className="col homemenu">
                                  <div className="homemenu-thumb">
                                    <a href="index-2.html">
                                      <img src="/assets/img/header/home-1.jpg" alt="img" />
                                    </a>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">
                                      <a href="index-2.html">
                                        Home 01
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                                <div className="col homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <a href="index-3.html">
                                      <img src="/assets/img/header/home-2.jpg" alt="img" />
                                    </a>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">
                                      <a href="index-3.html">
                                        Home 02
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                                <div className="col homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <a href="index-4.html">
                                      <img src="/assets/img/header/home-3.jpg" alt="img" />
                                    </a>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">
                                      <a href="index-4.html">
                                        Home 03
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                                <div className="col homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <a href="index-5.html">
                                      <img src="/assets/img/header/home-4.jpg" alt="img" />
                                    </a>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">
                                      <a href="index-5.html">
                                        Home 04
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                                <div className="col homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <a href="index-6.html">
                                      <img src="/assets/img/header/home-5.jpg" alt="img" />
                                    </a>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">
                                      <a href="index-6.html">
                                        Home 05
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown active d-xl-none">
                        <a href="javascript:void(0)" className="border-none">
                          Home
                        </a>
                        <ul className="submenu">
                          <li><a href="index-2.html">Home 01</a></li>
                          <li><a href="index-3.html">Home 02</a></li>
                          <li><a href="index-4.html">Home 03</a></li>
                          <li><a href="index-5.html">Home 04</a></li>
                          <li><a href="index-6.html">Home 05</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">
                          About Us
                        </a>
                      </li>
                      <li className="has-dropdown">
                        <a href="javascript:void(0)">
                          Pages
                          <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li className="has-dropdown">
                            <a href="javascript:void(0)">
                              Projects
                              <i className="fas fa-angle-right"></i>
                            </a>
                            <ul className="submenu">
                              <li><a href="project.html">Our Projects</a></li>
                              <li><a href="project-details.html">Project Details</a></li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="javascript:void(0)">
                              Our Team
                              <i className="fas fa-angle-right"></i>
                            </a>
                            <ul className="submenu">
                              <li><a href="team.html">Our Team</a></li>
                              <li><a href="team-details.html">Team Details</a></li>
                            </ul>
                          </li>
                          <li><a href="pricing.html">Pricing Plan</a></li>
                          <li><a href="gallery.html">Our Gallery</a></li>
                          <li><a href="testimonial.html">Testimonails</a></li>
                          <li><a href="history.html">Our History</a></li>
                          <li><a href="faq.html">Faqs</a></li>
                          <li><a href="comming-soon.html">Comming Soon</a></li>
                          <li><a href="404.html">404 Error</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          Services
                          <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="service.html">Our Services</a></li>
                          <li><a href="service-details.html">Service Details</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          News
                          <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="news-grid.html">News Gird</a></li>
                          <li><a href="news.html">News Standard</a></li>
                          <li><a href="news-details.html">News Details</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          Shop
                          <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="shop.html">Shop Page</a></li>
                          <li><a href="shop-details.html">Shop Details</a></li>
                          <li><a href="shop-cart.html">Shop Cart</a></li>
                          <li><a href="checkout.html">CheckOut</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a href="contact.html" className="theme-btn">
                  Let’s Talk
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

      {/* <!-- Hero Section Start --> */}
      <section className="hero-section hero-1 fix">
        <div className="array-button">
          <button className="array-prev">
            <svg width="55" height="28" viewBox="0 0 55 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.363503 12.9368L12.8632 0.436946C13.3122 -0.087371 14.1013 -0.148493 14.6257 0.30063C15.15 0.749646 15.2111 1.53875 14.762 2.06307C14.7201 2.11195 14.6745 2.1576 14.6257 2.19939L4.26339 12.5742H53.7501C54.4403 12.5742 55 13.1339 55 13.8243C55 14.5147 54.4403 15.0742 53.7501 15.0742H4.26339L14.6257 25.4365C15.15 25.8855 15.2111 26.6746 14.762 27.1989C14.3129 27.7232 13.5238 27.7844 12.9995 27.3352C12.9507 27.2933 12.905 27.2478 12.8632 27.1989L0.363396 14.6991C-0.121178 14.2117 -0.121174 13.4243 0.363503 12.9368Z" fill="white" />
            </svg>
          </button>
          <button className="array-next">
            <svg width="55" height="28" viewBox="0 0 55 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M54.6365 12.9368L42.1368 0.436946C41.6878 -0.087371 40.8987 -0.148493 40.3743 0.30063C39.85 0.749646 39.7889 1.53875 40.238 2.06307C40.2799 2.11195 40.3255 2.1576 40.3743 2.19939L50.7366 12.5742H1.24994C0.559658 12.5742 0 13.1339 0 13.8243C0 14.5147 0.559658 15.0742 1.24994 15.0742H50.7366L40.3743 25.4365C39.85 25.8855 39.7889 26.6746 40.238 27.1989C40.6871 27.7232 41.4762 27.7844 42.0005 27.3352C42.0493 27.2933 42.095 27.2478 42.1368 27.1989L54.6366 14.6991C55.1212 14.2117 55.1212 13.4243 54.6365 12.9368Z" fill="white" />
            </svg>
          </button>
        </div>
        <div className="swiper banner-active">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="hero-height">
                <div className="hero-bg bg-cover" style={{ backgroundImage: "url('assets/img/home-1/hero/hero-01.png')" }}></div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="hero-content">
                        <span>
                          <img src="/assets/img/home-1/hero/hero-title.svg" alt="img" />
                          We’re Distributors of Quality 100%
                        </span>
                        <h1>farming</h1>
                        <h2>best agricultural</h2>
                      </div>
                      <div className="hero-button">
                        <a href="shop.html" className="theme-btn">
                          View Our Products
                          <i className="far fa-arrow-right"></i>
                        </a>
                        <a href="service.html" className="theme-btn style-2">
                          Our Services
                          <i className="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-height">
                <div className="hero-bg bg-cover" style={{ backgroundImage: "url('/assets/img/home-1/hero/hero-02.png')" }}></div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="hero-content">
                        <span>
                          <img src="/assets/img/home-1/hero/hero-title.svg" alt="img" />
                          We’re Distributors of Quality 100%
                        </span>
                        <h1>farming</h1>
                        <h2>best agricultural</h2>
                      </div>
                      <div className="hero-button">
                        <a href="shop.html" className="theme-btn">
                          View Our Products
                          <i className="far fa-arrow-right"></i>
                        </a>
                        <a href="service.html" className="theme-btn style-2">
                          Our Services
                          <i className="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Feature Section Start --> */}
      <section className="feature-section section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="feature-box-items">
                <div className="feature-icon">
                  <img src="/assets/img/home-1/feature/feature-01.png" alt="img" />
                </div>
                <div className="feature-content">
                  <h3>100% Organic Products</h3>
                  <p>Elders is headquartered in Adelaide, South Australia, where our story began in 1839, but our expansive.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="feature-box-items">
                <div className="feature-icon">
                  <img src="/assets/img/home-1/feature/feature-02.png" alt="img" />
                </div>
                <div className="feature-content">
                  <h3>Clean Vegetables</h3>
                  <p>Elders is headquartered in Adelaide, South Australia, where our story began in 1839, but our expansive.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="feature-box-items">
                <div className="feature-icon">
                  <img src="/assets/img/home-1/feature/feature-03.png" alt="img" />
                </div>
                <div className="feature-content">
                  <h3>Fertilizer Products</h3>
                  <p>Elders is headquartered in Adelaide, South Australia, where our story began in 1839, but our expansive.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="feature-box-items">
                <div className="feature-icon">
                  <img src="/assets/img/home-1/feature/feature-04.png" alt="img" />
                </div>
                <div className="feature-content">
                  <h3>Awesome Harvest</h3>
                  <p>Elders is headquartered in Adelaide, South Australia, where our story began in 1839, but our expansive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Section Start --> */}
      <section className="about-section section-padding fix pt-0">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-7">
                <div className="about-left-content">
                  <div className="section-title mb-0">
                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />About Our Company</span>
                    <h2 className="text-anim">Agron is the Largest Global Organic Farm Since 2011.</h2>
                  </div>
                  <p className="about-text wow fadeInUp" data-wow-delay=".2s">
                    Lorem ipsum dolor sit amet, porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt. Lorem ipsum dolor sit amet, porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
                  </p>
                  <div className="list-items wow fadeInUp" data-wow-delay=".4s">
                    <ul>
                      <li>
                        <i className="far fa-check"></i>
                        Real-Time Tracking
                      </li>
                      <li>
                        <i className="far fa-check"></i>
                        On-Time Delivery
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i className="far fa-check"></i>
                        Customizable Fruits Solutions
                      </li>
                      <li>
                        <i className="far fa-check"></i>
                        24/7 Customer Support
                      </li>
                    </ul>
                  </div>
                  <div className="about-bottom-area">
                    <a href="about.html" className="theme-btn wow fadeInUp" data-wow-delay=".6s">
                      More About Us <i className="far fa-arrow-right"></i>
                    </a>
                    <div className="phone-box-items wow fadeInUp" data-wow-delay=".8s">
                      <div className="icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="content">
                        <p>Phone:</p>
                        <a href="tel:704555-0127">(704) 555-0127</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-right-items">
                  <div className="about-top-box wow fadeInUp" data-wow-delay=".3s">
                    <p>Trust By Clients</p>
                    <h2><span className="odometer" data-count="1286644">00</span>+</h2>
                    <p className="text">
                      Duis eleifend euismod arcu, nec faucibus mauris finibus id. Integer mattis, tellus non finibus rutrum.
                    </p>
                  </div>
                  <div className="about-image wow fadeInUp" data-wow-delay=".5s">
                    <img src="/assets/img/home-1/about/about-01.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Service Section Start --> */}
      <section className="service-section section-padding section-bg">
        <div className="top-shape">
          <img src="/assets/img/home-1/service/top-shape.png" alt="img" />
        </div>
        <div className="service-left-shape d-none d-xxl-block float-bob-y">
          <img src="/assets/img/home-1/service/left-shape.png" alt="img" />
        </div>
        <div className="service-right-shape d-none d-xxl-block float-bob-x">
          <img src="/assets/img/home-1/service/right-shape.png" alt="img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Our Services</span>
            <h2 className="text-anim">Services We Offer</h2>
            <p className="wow fadeInUp" data-wow-delay=".2s">
              Lorem ipsum dolor sit amet, porro quisquam est, qui dolorem ipsum quia <br /> dolor sit amet, consectetur, adipisci velit, sed quia non.
            </p>
          </div>
          <div className="service-wrapper">
            <ul className="nav">
              <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                <a href="#thumb1" data-bs-toggle="tab" className="nav-link active">
                  Agricultural Products
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                <a href="#thumb2" data-bs-toggle="tab" className="nav-link">
                  Pure Cow's Milk
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                <a href="#thumb3" data-bs-toggle="tab" className="nav-link">
                  Tubers And Fruits
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
                <a href="#thumb4" data-bs-toggle="tab" className="nav-link">
                  Meat Of Cattle
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="thumb1" className="tab-pane fade show active">
                <div className="row align-items-center g-4">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="service-content-area">
                      <div className="icon">
                        <i className="flaticon-agriculture"></i>
                      </div>
                      <div className="content">
                        <h3><a href="service-details.html">Agriculture Products</a></h3>
                        <p>Wendell Berry said it best when he said that “eating is an agricultural act.” Our mission is to change the food system by providing a healthy, fresh alternative to industrial food.</p>
                        <a href="service-details.html" className="theme-btn">
                          View Details <i className="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                    <div className="service-image">
                      <img src="/assets/img/home-1/service/service-01.jpg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="thumb2" className="tab-pane fade">
                <div className="row align-items-center g-4">
                  <div className="col-lg-6">
                    <div className="service-content-area">
                      <div className="icon">
                        <i className="flaticon-agriculture"></i>
                      </div>
                      <div className="content">
                        <h3><a href="service-details.html">Agriculture Products</a></h3>
                        <p>Wendell Berry said it best when he said that “eating is an agricultural act.” Our mission is to change the food system by providing a healthy, fresh alternative to industrial food.</p>
                        <a href="service-details.html" className="theme-btn">
                          View Details <i className="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-image">
                      <img src="/assets/img/home-1/service/service-01.jpg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="thumb3" className="tab-pane fade">
                <div className="row align-items-center g-4">
                  <div className="col-lg-6">
                    <div className="service-content-area">
                      <div className="icon">
                        <i className="flaticon-agriculture"></i>
                      </div>
                      <div className="content">
                        <h3><a href="service-details.html">Agriculture Products</a></h3>
                        <p>Wendell Berry said it best when he said that “eating is an agricultural act.” Our mission is to change the food system by providing a healthy, fresh alternative to industrial food.</p>
                        <a href="service-details.html" className="theme-btn">
                          View Details <i className="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-image">
                      <img src="/assets/img/home-1/service/service-01.jpg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="thumb4" className="tab-pane fade">
                <div className="row align-items-center g-4">
                  <div className="col-lg-6">
                    <div className="service-content-area">
                      <div className="icon">
                        <i className="flaticon-agriculture"></i>
                      </div>
                      <div className="content">
                        <h3><a href="service-details.html">Agriculture Products</a></h3>
                        <p>Wendell Berry said it best when he said that “eating is an agricultural act.” Our mission is to change the food system by providing a healthy, fresh alternative to industrial food.</p>
                        <a href="service-details.html" className="theme-btn">
                          View Details <i className="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-image">
                      <img src="/assets/img/home-1/service/service-01.jpg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Counter Section Start --> */}
      <section className="counter-section section-padding section-bg pt-0">
        <div className="bottom-shape">
          <img src="/assets/img/home-1/service/bottom-shape.png" alt="img" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="counter-box-items-area">
                <div className="icon">
                  <i className="flaticon-delivery"></i>
                </div>
                <div className="content">
                  <h2><span className="odometer" data-count="6984">00</span>+</h2>
                  <p>Agriculture Products</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="counter-box-items-area">
                <div className="icon">
                  <i className="flaticon-leaf"></i>
                </div>
                <div className="content">
                  <h2><span className="odometer" data-count="69">00</span>K+</h2>
                  <p>Agriculture Products</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="counter-box-items-area">
                <div className="icon">
                  <i className="flaticon-like"></i>
                </div>
                <div className="content">
                  <h2><span className="odometer" data-count="98">00</span>%</h2>
                  <p>Agriculture Products</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="counter-box-items-area">
                <div className="icon">
                  <i className="flaticon-farmer"></i>
                </div>
                <div className="content">
                  <h2><span className="odometer" data-count="34">00</span>+</h2>
                  <p>Agriculture Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- Choose Us Section Start --> */}
      <section className="choose-us-section section-padding pt-0">
        <div className="shape-1 float-bob-x">
          <img src="/assets/img/home-1/choose/shape-1.png" alt="img" />
        </div>
        <div className="container">
          <div className="choose-us-wrapper">
            <div className="row align-items-center g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="choose-left-image-items">
                  <img src="/assets/img/home-1/choose/choose-01.jpg" alt="img" />
                  <div className="image-2">
                    <img src="/assets/img/home-1/choose/choose-02.jpg" alt="img" />
                  </div>
                  <div className="organic-shape">
                    <img src="/assets/img/home-1/choose/organic-icon.png" alt="img" />
                  </div>
                  <div className="ratting-box">
                    <div className="ratting-image">
                      <img src="/assets/img/home-1/choose/ratting-icon.png" alt="img" />
                    </div>
                    <h4>We’re a award <br /> wining company</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-content-items">
                  <div className="section-title mb-0">
                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Why Choose Us</span>
                    <h2 className="text-anim">Currently We’re Growing and Selling Organic Food</h2>
                  </div>
                  <p className="choose-text wow fadeInUp" data-wow-delay=".2s">
                    Lorem ipsum dolor sit amet, porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    At Capital Gardens we believe that we have a duty to adhere to good environmental practice, and operate in a sustainable manner. As lovers of plants and the environment it is only natural for us to want to reduce man’s impact.
                  </p>
                  <div className="progress-wrap">
                    <div className="pro-items wow fadeInUp" data-wow-delay=".6s">
                      <div className="pro-head">
                        <h6 className="title">
                          Organic Products
                        </h6>
                        <span className="point">
                          99%
                        </span>
                      </div>
                      <div className="progress">
                        <div className="progress-value style-two"></div>
                      </div>
                    </div>
                    <div className="pro-items wow fadeInUp" data-wow-delay=".8s">
                      <div className="pro-head">
                        <h6 className="title">
                          Absolute Quality
                        </h6>
                        <span className="point">
                          90%
                        </span>
                      </div>
                      <div className="progress">
                        <div className="progress-value style-two"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Brand Section Start --> */}
      <div className="brand-section section-padding pt-0">
        <div className="container">
          <div className="top-text text-center wow fadeInUp">
            <p>Agron is used by over 60,000+ companies across the world</p>
          </div>
          <div className="swiper brand-slide">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/home-1/brand/brand-01.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/home-1/brand/brand-02.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/home-1/brand/brand-03.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/home-1/brand/brand-04.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/home-1/brand/brand-05.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/home-1/brand/brand-06.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Gallery Section Start --> */}
      <section className="gallery-section section-padding section-bg">
        <div className="top-shape">
          <img src="/assets/img/home-1/service/top-shape.png" alt="img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Our Gallery Image</span>
            <h2 className="text-anim">Gallery of our Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
            <div className="gallery-image-items">
              <img src="/assets/img/home-1/gallery/gallery-01.jpg" alt="img" />
              <div className="content">
                <p>Gallery</p>
                <h3><a href="project-details.html">Eco and Agriculture</a></h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="gallery-image-items">
              <img src="/assets/img/home-1/gallery/gallery-02.jpg" alt="img" />
              <div className="content">
                <p>Gallery</p>
                <h3><a href="project-details.html">Eco and Agriculture</a></h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="gallery-image-items">
              <img src="/assets/img/home-1/gallery/gallery-03.jpg" alt="img" />
              <div className="content">
                <p>Gallery</p>
                <h3><a href="project-details.html">Eco and Agriculture</a></h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="gallery-image-items">
              <img src="/assets/img/home-1/gallery/gallery-04.jpg" alt="img" />
              <div className="content">
                <p>Gallery</p>
                <h3><a href="project-details.html">Eco and Agriculture</a></h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
            <div className="gallery-image-items">
              <img src="/assets/img/home-1/gallery/gallery-05.jpg" alt="img" />
              <div className="content">
                <p>Gallery</p>
                <h3><a href="project-details.html">Eco and Agriculture</a></h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
            <div className="gallery-image-items">
              <img src="/assets/img/home-1/gallery/gallery-06.jpg" alt="img" />
              <div className="content">
                <p>Gallery</p>
                <h3><a href="project-details.html">Eco and Agriculture</a></h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Cta Section Start --> */}
      <section className="cta-section section-padding pt-0">
        <div className="bottom-shape d-none d-lg-block">
          <img src="/assets/img/home-1/service/bottom-shape.png" alt="img" />
        </div>
        <div className="container">
          <div className="cta-wrapper bg-cover" style={{ backgroundImage: "url('assets/img/home-1/cta/cta-bg.jpg')" }}>
            <div className="row align-items-center g-4">
              <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
                <div className="cta-content">
                  <div className="section-title mb-0">
                    <span className="text-white"><img src="/assets/img/sub-title.svg" alt="img" />Why Choose Us</span>
                    <h2 className="text-white text-anim">Currently We’re Growing and Selling Organic Food</h2>
                  </div>
                  <p className="cta-text">
                    Lorem ipsum dolor sit amet, porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                  </p>
                  <div className="cta-bottom-area">
                    <a href="contact.html" className="theme-btn">
                      Contact Today <i className="far fa-arrow-right"></i>
                    </a>
                    <div className="phone-box-items">
                      <div className="icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="content">
                        <p>Phone:</p>
                        <a href="tel:704555-0127">(704) 555-0127</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                <div className="cta-image">
                  <img src="/assets/img/home-1/cta/cta-01.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Shop Section Start --> */}
      <section className="shop-section section-padding fix pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Best Selling Products</span>
            <h2 className="text-anim">Our Best Selling Products</h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="shop-box-items">
                <div className="shop-image">
                  <img src="/assets/img/home-1/shop/shop-01.png" alt="img" />
                  <span className="sale-icon">Sale</span>
                  <span className="discount-icon">45%</span>
                  <ul className="shop-icon d-flex justify-content-center align-items-center">
                    <li>
                      <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="shop-cart.html">
                        <i className="far fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="shop-details.html"><i className="far fa-eye"></i></a>
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
                  <h5><a href="shop-details.html">Natural Carrots</a></h5>
                  <ul>
                    <li>
                      $344
                    </li>
                    <li>
                      <del>$389</del>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="shop-box-items">
                <div className="shop-image">
                  <img src="/assets/img/home-1/shop/shop-02.png" alt="img" />
                  <span className="sale-icon">Sale</span>
                  <ul className="shop-icon d-flex justify-content-center align-items-center">
                    <li>
                      <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="shop-cart.html">
                        <i className="far fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="shop-details.html"><i className="far fa-eye"></i></a>
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
                  <h5><a href="shop-details.html">Organic Sweet Corn</a></h5>
                  <ul>
                    <li>
                      $344
                    </li>
                    <li>
                      <del>$389</del>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="shop-box-items">
                <div className="shop-image">
                  <img src="/assets/img/home-1/shop/shop-03.png" alt="img" />
                  <span className="sale-icon">Sale</span>
                  <span className="discount-icon">56%</span>
                  <ul className="shop-icon d-flex justify-content-center align-items-center">
                    <li>
                      <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="shop-cart.html">
                        <i className="far fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="shop-details.html"><i className="far fa-eye"></i></a>
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
                  <h5><a href="shop-details.html">Organic Carrot</a></h5>
                  <ul>
                    <li>
                      $344
                    </li>
                    <li>
                      <del>$389</del>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="shop-box-items">
                <div className="shop-image">
                  <img src="/assets/img/home-1/shop/shop-04.png" alt="img" />
                  <span className="sale-icon">Sale</span>
                  <ul className="shop-icon d-flex justify-content-center align-items-center">
                    <li>
                      <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="shop-cart.html">
                        <i className="far fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="shop-details.html"><i className="far fa-eye"></i></a>
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
                  <h5><a href="shop-details.html">Organic Carrot Zin</a></h5>
                  <ul>
                    <li>
                      $344
                    </li>
                    <li>
                      <del>$389</del>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonial Section Start --> */}
      <section className="testimonial-section section-padding fix pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Our Testimonial</span>
            <h2 className="text-anim">What Our Customers Say <br /> About Agron</h2>
          </div>
          <div className="testimonial-wrapper">
            <div className="row align-items-center g-4">
              <div className="col-xl-4 col-lg-4 col-md-5 wow fadeInUp">
                <div className="testimonial-image">
                  <img src="/assets/img/home-1/testimonial/testimonial-01.jpg" alt="img" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-8 col-md-7">
                <div className="swiper testimonial-slide">
                  <div className="swiper-wrapper">
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
                          “I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!”
                        </h3>
                        <div className="client-info-area">
                          <div className="client-info">
                            <div className="client-image">
                              <img src="/assets/img/home-1/testimonial/client-image.png" alt="img" />
                            </div>
                            <div className="content">
                              <p>Formal Farmer</p>
                              <h5>Benjamin Taylor</h5>
                            </div>
                          </div>
                          <div className="icon">
                            <i className="flaticon-quote"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* <!-- Contact Section Start --> */}
      <section className="contact-section section-bg fix">
        <div className="shape-1 float-bob-y">
          <img src="/assets/img/home-1/contact-shape.png" alt="img" />
        </div>
        <div className="container">
          <div className="contact-wrapper">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title mb-0">
                    <span className="wow fadeInUp"><img src="/assets/img/sub-title.svg" alt="img" />Contact With Us</span>
                    <h2 className="text-anim">Contact Us for Organic <br /> and Natural Products</h2>
                  </div>
                  <form action="#" id="contact-form" className="contact-form-box">
                    <div className="row g-4 align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="form-clt">
                          <input type="text" placeholder="Enter email" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="form-clt">
                          <input type="text" placeholder="Enter name" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="form-clt">
                          <input type="text" placeholder="Your name" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="form-clt">
                          <input type="text" placeholder="Phone number" />
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="form-clt">
                          <input type="text" placeholder="Your subject" />
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8s">
                        <div className="form-clt">
                          <textarea name="message" id="message" placeholder="Write a message..."></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                        <div className="contact-button">
                          <button type="submit" className="theme-btn">
                            Send Your Message
                            <i className="far fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-image">
                  <img src="/assets/img/home-1/contact-img-01.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Video Section Start --> */}
      <div className="video-section parallaxie fix">
        <div className="video-wrapper">
          <div className="video">
            <img src="/assets/img/home-1/video.png" alt="img" />
            <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- News Section Start --> */}
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

      {/* <!-- Footer Section Start --> */}
      <footer className="footer-section fix section-padding bg-cover pb-0" style={{ backgroundImage: "url('assets/img/home-1/footer-bg.jpg')" }}>
        <div className="container">
          <div className="footer-widget-top">
            <a href="index-2.html" className="logo-img wow fadeInUp">
              <img src="/assets/img/logo/white-logo.svg" alt="img" />
            </a>
            <div className="content-items wow fadeInUp" data-wow-delay=".2s">
              <h3>Subscrive Our Newsletter To Get More Updates</h3>
              <form action="#">
                <input type="text" placeholder="Your email" />
                <button className="theme-btn" type="submit">
                  Subscribe
                  <i className="far fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="footer-widget-wrapper">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-8 wow fadeInUp" data-wow-delay=".2s">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h5>Contact Us</h5>
                  </div>
                  <ul className="contact-list">
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="content">
                        <h5>Email us:</h5>
                        <p><a href="mailto:agron@gmail.com">agron@gmail.com</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="content">
                        <h5>Location:</h5>
                        <p>San Francisco 88/90 NY</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="content">
                        <h5>Phone:</h5>
                        <p><a href="tel:+69009494094">+69 009 494 094</a></p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h5>
                      Useful Link
                    </h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="about.html">
                        <i className="far fa-chevron-double-right"></i> About Company
                      </a>
                    </li>
                    <li>
                      <a href="team.html">
                        <i className="far fa-chevron-double-right"></i> Meet Member
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i className="far fa-chevron-double-right"></i> Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i className="far fa-chevron-double-right"></i> 24/7 Support
                      </a>
                    </li>
                    <li>
                      <a href="faq.html">
                        <i className="far fa-chevron-double-right"></i> Our FAQs
                      </a>
                    </li>
                    <li>
                      <a href="pricing.html">
                        <i className="far fa-chevron-double-right"></i> Pricing Plan
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".6s">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h5>
                      Our Services
                    </h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="service-details.html">
                        <i className="far fa-chevron-double-right"></i> Agriculture Foods
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html">
                        <i className="far fa-chevron-double-right"></i> Organic Vegetables
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html">
                        <i className="far fa-chevron-double-right"></i> Pond & Sea Fish
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html">
                        <i className="far fa-chevron-double-right"></i> Cow Milk & Meat
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html">
                        <i className="far fa-chevron-double-right"></i> Modern Equipment
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html">
                        <i className="far fa-chevron-double-right"></i> Eggs & Meat
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h5>
                      Our News
                    </h5>
                  </div>
                  <ul className="recent-post">
                    <li>
                      <div className="thumb">
                        <img src="/assets/img/home-1/footer-post-1.jpg" alt="img" />
                      </div>
                      <div className="content">
                        <p>12 January, 2025</p>
                        <h4><a href="news-details.html">Holistic Healing: Exploring Health Coaching Techniques</a></h4>
                      </div>
                    </li>
                    <li>
                      <div className="thumb">
                        <img src="/assets/img/home-1/footer-post-2.jpg" alt="img" />
                      </div>
                      <div className="content">
                        <p>09 May, 2025</p>
                        <h4><a href="news-details.html">How Can You Growing Your Agriculture Products</a></h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-wrapper">
              <p className="text-1 wow fadeInUp">© 2025 Agron. All Rights Reserved</p>
              <div className="social-icon wow fadeInUp" data-wow-delay=".2s">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-dribbble"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="bottom-img wow fadeInUp" data-wow-delay=".4s">
                <img src="/assets/img/home-1/footer-bottom.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
