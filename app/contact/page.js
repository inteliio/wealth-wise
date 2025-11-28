import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Контактирајте нè">
        <div>
          {/* Секција: Контакт информации */}
          <section className="feature-style-three p_relative centred">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-31.png)" }}></div>
            <div className="auto-container">
              <div className="sec-title mb_100">
                <span className="sub-title">Контакт информации</span>
                <h2>Со задоволство ќе ви помогнеме</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-three wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div
                        className="block-shape"
                        style={{
                          backgroundImage: "url(assets/images/shape/shape-32.png)",
                        }}></div>
                      <div className="icon-box">
                        <i className="icon-48"></i>
                      </div>
                      <h3>Локација</h3>
                      <p>
                        Скопје, Македонија <br />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-three wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-49"></i>
                      </div>
                      <h3>Е-пошта</h3>
                      <p>
                        <Link href="mailto:info@wealthwise.mk">info@wealthwise.mk</Link>
                        <br />
                        <Link href="mailto:support@wealthwise.mk">support@wealthwise.mk</Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-three wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div
                        className="block-shape"
                        style={{
                          backgroundImage: "url(assets/images/shape/shape-33.png)",
                        }}></div>
                      <div className="icon-box">
                        <i className="icon-50"></i>
                      </div>
                      <h3>Телефон</h3>
                      <p>
                        Контакт за клиенти <br />
                        <Link href="tel:+38970123456">+389 70 123 456</Link> (24/7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Крај на секцијата за контакт информации */}

          {/* Секција: Контакт форма */}
          <section className="contact-style-two sec-pad">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                  <div className="content-box mr_70">
                    <div className="sec-title mb_35">
                      <span className="sub-title">Порака</span>
                      <h2>Слободно контактирајте нè</h2>
                      <p className="mt_20">Пополнете ја формата и нашиот тим ќе ве контактира во најбрз можен рок. Тука сме за сите ваши прашања поврзани со инвестиции, осигурување и финансиски совети.</p>
                    </div>
                    <ul className="social-links clearfix">
                      <li>
                        <Link href="https://www.facebook.com/p/Wealth-Wise-Official-61575524496076/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/wealth.wise.official/" target="_blank">
                          <i className="fab fa-instagram"></i>
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

                <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                  <div className="form-inner">
                    <form method="post" action="sendemail.php" id="contact-form" className="default-form">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="text" name="username" placeholder="Вашето име" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="email" name="email" placeholder="Вашата е-пошта" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="text" name="phone" required placeholder="Телефон" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="text" name="subject" required placeholder="Наслов" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea name="message" placeholder="Вашата порака..."></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button className="theme-btn theme-btn-one" type="submit" name="submit-form">
                            Испрати порака
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Крај на контакт формата */}
        </div>
      </Layout>
    </>
  );
}
