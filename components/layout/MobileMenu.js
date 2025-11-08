"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false });
    } else {
      setIsActive({ status: true, key });
    }
  };

  // ✅ Close menu when a link is clicked
  const handleLinkClick = () => {
    if (typeof handleMobileMenu === "function") {
      handleMobileMenu();
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="far fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/" onClick={handleLinkClick}>
              <img src="/assets/wealth-wise/logo/logo.svg" alt="Wealth Wise Logo" />
            </Link>
          </div>
          <div className="menu-outer">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li>
                  <Link href="/" onClick={handleLinkClick}>
                    Дома
                  </Link>
                </li>
                <li>
                  <Link href="/services" onClick={handleLinkClick}>
                    Услуги
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" onClick={handleLinkClick}>
                    За нас
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={handleLinkClick}>
                    Контакт
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay for sidebar */}
      <div className="nav-overlay" style={{ display: isSidebar ? "block" : "none" }} onClick={handleSidebar} />
    </>
  );
}
