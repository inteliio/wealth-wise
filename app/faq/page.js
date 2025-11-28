"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="ЧПП">
        <div>
          <section className="faq-page-section p_relative sec-pad">
            <div className="auto-container">
              <div className="sec-title mb_50 centred">
                <span className="sub-title">Често поставувани прашања</span>
                <h2>Како можеме да ви помогнеме?</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <ul className="accordion-box">
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                        <div className="icon-box"></div>
                        <h3>Што правите?</h3>
                      </div>
                      <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">Ние нудиме финансиски консултации, осигурување и инвестициски решенија прилагодени на вашите потреби. Нашата цел е да ви помогнеме да постигнете финансиска стабилност и сигурност.</div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                        <div className="icon-box"></div>
                        <h3>Како можам безбедно да го користам мојот бизнис?</h3>
                      </div>
                      <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">Ние нудиме финансиски консултации, осигурување и инвестициски решенија прилагодени на вашите потреби. Нашата цел е да ви помогнеме да постигнете финансиска стабилност и сигурност.</div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                        <div className="icon-box"></div>
                        <h3>Кои индустрии се покриени?</h3>
                      </div>
                      <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">Ние нудиме финансиски консултации, осигурување и инвестициски решенија прилагодени на вашите потреби. Нашата цел е да ви помогнеме да постигнете финансиска стабилност и сигурност.</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <ul className="accordion-box">
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                        <div className="icon-box"></div>
                        <h3>Кој тип на компанија се мери?</h3>
                      </div>
                      <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">Ние нудиме финансиски консултации, осигурување и инвестициски решенија прилагодени на вашите потреби. Нашата цел е да ви помогнеме да постигнете финансиска стабилност и сигурност.</div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                        <div className="icon-box"></div>
                        <h3>Која е идната плана за Wealth Wise?</h3>
                      </div>
                      <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">Ние нудиме финансиски консултации, осигурување и инвестициски решенија прилагодени на вашите потреби. Нашата цел е да ви помогнеме да постигнете финансиска стабилност и сигурност.</div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                        <div className="icon-box"></div>
                        <h3>Како ги цените?</h3>
                      </div>
                      <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">Ние нудиме финансиски консултации, осигурување и инвестициски решенија прилагодени на вашите потреби. Нашата цел е да ви помогнеме да постигнете финансиска стабилност и сигурност.</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="contact-section sec-pad p_relative centred bg-color-1">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-40.png)" }}></div>
            <div className="auto-container">
              <div className="sec-title mb_50">
                <span className="sub-title">Контакт</span>
                <h2>
                  Дали имате <br />
                  прашања?
                </h2>
              </div>
              <div className="form-inner">
                <form action="faq.html" method="post">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="name" placeholder="Вашето име" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="email" name="email" placeholder="Е-пошта" required />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input type="text" name="phone" placeholder="Телефон" required />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea name="message" placeholder="Порака"></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <div className="message-btn">
                        <button type="submit" className="theme-btn-one">
                          Испрати барање
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
