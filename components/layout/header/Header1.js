import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
  return (
    <>
      <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
        {/* Горен дел на хедерот */}
        <div className="header-top">
          <div className="auto-container">
            <div className="top-inner" style={{ padding: "10px 50px 10px 50px" }}>
              <div className="top-left">
                <ul className="info clearfix">
                  <li>
                    <i className="icon-2"></i>
                    <Link href="tel:+38971347436">+389 71 447 436</Link>
                  </li>
                  <li>
                    <i className="icon-3"></i>
                    <Link href="mailto:andrej.cvetkovski@example.com">andrej.cvetkovski@example.com</Link>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <ul className="social-links clearfix">
                  <li>
                    <Link href="https://www.instagram.com/wealth.wise.official/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/p/Wealth-Wise-Official-61575524496076/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/andrej-cvetkovski-52ba7a230/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Главен дел на хедерот */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img src="/assets/wealth-wise/logo/logo.svg" alt="Wealth Wise" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                {/* Мобилно мени */}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <Menu />
                  </div>
                </nav>
              </div>
              <ul className="menu-right-content">
                <li className="btn-box">
                  <Link href="/contact">Бесплатна консултација</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Фиксен хедер при скролање */}
        <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img src="/assets/wealth-wise/logo/logo.svg" alt="Wealth Wise" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                <nav className="main-menu clearfix">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <Menu />
                  </div>
                </nav>
              </div>
              <ul className="menu-right-content">
                <li className="search-box-outer search-toggler" onClick={handlePopup}>
                  <i className="icon-4"></i>
                </li>
                <li className="btn-box">
                  <Link href="/contact">Бесплатна консултација</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Мобилно мени */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
}
