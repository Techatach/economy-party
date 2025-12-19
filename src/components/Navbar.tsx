import Link from "next/link";
import Script from "next/script";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <title>Charitize - Charity Organization Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@600;700&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        {/* Icon Font Stylesheet */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* Libraries Stylesheet */}
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        {/* Customized Bootstrap Stylesheet */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
        {/* Spinner Start */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          />
        </div>
        {/* Spinner End */}
        {/* Topbar Start */}
        <div
          className="container-fluid bg-secondary top-bar wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="row align-items-center h-100">
            <div className="col-lg-4 text-center text-lg-start">
              <a href="/">
                <h1 className="display-5 text-warning m-0">พรรคเศรษฐกิจ</h1>
              </a>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-flex justify-content-end">
                    <div className="flex-shrink-0 btn-square bg-warning">
                      <i className="fa fa-phone-alt text-dark" />
                    </div>
                    <div className="ms-2">
                      <h6 className="text-warning mb-0">Call Us</h6>
                      <span className="text-white">+012 345 6789</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex justify-content-end">
                    <div className="flex-shrink-0 btn-square bg-warning">
                      <i className="fa fa-envelope-open text-dark" />
                    </div>
                    <div className="ms-2">
                      <h6 className="text-warning mb-0">Mail Us</h6>
                      <span className="text-white">info@domain.com</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex justify-content-end">
                    <div className="flex-shrink-0 btn-square bg-warning">
                      <i className="fa fa-map-marker-alt text-dark" />
                    </div>
                    <div className="ms-2">
                      <h6 className="text-primary mb-0">Address</h6>
                      <span className="text-white">123 Street, NY, USA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <div
          className="container-fluid bg-secondary px-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="nav-bar">
            <nav className="navbar navbar-expand-lg bg-warning navbar-dark px-4 py-lg-0">
              <h4 className="d-lg-none m-0">Menu</h4>
              <button
                type="button"
                className="navbar-toggler me-0"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav me-auto">
                  <a href="/" className="nav-item nav-link">
                    หน้าหลัก
                  </a>
                  <a href="/about" className="nav-item nav-link">
                    เกี่ยวกับ
                  </a>
                  <a href="/service" className="nav-item nav-link">
                    บริการ
                  </a>
                  <a href="policy" className="nav-item nav-link">
                    นโยบายพรรคเศรษฐกิจ
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="#!"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      เปลี่ยนประเทศไทยไร้คอร์รัปชัน
                    </a>
                    <div className="dropdown-menu bg-light m-0">
                      <a href="/event" className="dropdown-item">
                        รวมพลังต่อต้านคอร์รัปชัน
                      </a>
                      <a href="/feature" className="dropdown-item">
                        แจ้งเบาะแสการคอร์รัปชัน
                      </a>
                      <a href="/team" className="dropdown-item">
                        ทีมงาน
                      </a>
                      <a href="/testimonial" className="dropdown-item">
                        ปรัชญาการทำงาน
                      </a>
                      {/* <a href="404.html" className="dropdown-item">
                        404 Page
                      </a> */}
                    </div>
                  </div>
                  <a href="/contact" className="nav-item nav-link">
                    ติดต่อ
                  </a>
                </div>
                <div className="d-none d-lg-flex ms-auto">
                  <a className="btn btn-square btn-dark ms-2" href="#!">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square btn-dark ms-2" href="#!">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square btn-dark ms-2" href="#!">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}

        {/* JavaScript Libraries */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="lib/wow/wow.min.js"></Script>
        <Script src="lib/easing/easing.min.js"></Script>
        <Script src="lib/waypoints/waypoints.min.js"></Script>
        <Script src="lib/owlcarousel/owl.carousel.min.js"></Script>
        <Script src="lib/counterup/counterup.min.js"></Script>
        {/* Template Javascript */}
        <Script src="js/main.js"></Script>
      </>
    </div>
  );
}
