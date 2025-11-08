import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer">
        <div className="widget-section">
          <div className="pattern-layer">
            <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
            <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              {/* Лого и опис */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="logo-widget footer-widget">
                  <figure className="footer-logo">
                    <Link href="#">
                      <img src="/assets/wealth-wise/logo/logo.svg" alt="Wealth Wise Logo" />
                    </Link>
                  </figure>
                  <div className="text">
                    <p>Wealth Wise е ваш сигурен партнер во финансиско планирање, инвестиции и осигурување. Нашата цел е да ви помогнеме да изградите стабилна и сигурна иднина.</p>
                    <p>Со нас, добивате професионален пристап, доверба и резултати што траат.</p>
                  </div>
                </div>
              </div>

              {/* Брзи линкови */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="links-widget footer-widget ml_50">
                  <div className="widget-title">
                    <h3>Брзи линкови</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/about-us">За нас</Link>
                      </li>
                      <li>
                        <Link href="/services1">Услуги</Link>
                      </li>
                      <li>
                        <Link href="/contact">Контакт</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Корисни линкови */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="links-widget footer-widget ml_30">
                  <div className="widget-title">
                    <h3>Корисни информации</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="#">Политика за приватност</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Контакт */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="contact-widget footer-widget">
                  <div className="widget-title">
                    <h3>Контакт</h3>
                  </div>
                  <div className="widget-content">
                    <p>Секогаш достапни за консултација и поддршка.</p>
                    <ul className="info-list clearfix">
                      <li>
                        <i className="icon-23"></i>Скопје, Македонија
                      </li>
                      <li>
                        <i className="icon-3"></i>
                        <Link href="mailto:info@wealthwise.mk">info@wealthwise.mk</Link>
                      </li>
                      <li>
                        <i className="icon-2"></i>
                        <Link href="tel:+38970123456">+389 70 123 456</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Долен дел */}
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright">
              <p>
                © 2025 Inteliio. Сите права задржани. Овозможено од{" "}
                <Link target="_blank" href="https://inteliio.com/">
                  Inteliio
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
