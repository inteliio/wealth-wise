import Link from "next/link";
import Image from "next/image";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
  return (
    <>
      {/* <header className="main-header header-style-three"> */}

      <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
        {/* header-lower */}
        <div className="header-lower">
          <div className="outer-container">
            <div className="outer-box">
              <div className="logo-box">
                <Link href="/">
                  <Image src="/assets/wealth-wise/logo/logo-wealth-wise.svg" alt="logo" width={100} height={100} />
                </Link>
              </div>
              {/* Free Consulting Button - Left of Menu Icon */}
              <div className="consulting-btn-wrapper">
                <Link href="/contact" className="theme-btn-one">
                  Бесплатна консултација
                </Link>
              </div>
              <div className="menu-area clearfix">
                {/* Mobile Navigation Toggler */}
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
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <Link href="/">
                  <Image src="/assets/wealth-wise/logo/logo-wealth-wise.svg" alt="logo" width={100} height={100} />
                </Link>
              </div>
              {/* Free Consulting Button - Left of Menu Icon */}
              <div className="consulting-btn-wrapper">
                <Link href="/contact" className="theme-btn-one">
                  Бесплатна консултација
                </Link>
              </div>
              <div className="menu-area clearfix">
                {/* Mobile Navigation Toggler */}
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
            </div>
          </div>
        </div>
      </header>

      <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
    </>
  );
}
