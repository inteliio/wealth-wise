import Layout from "@/components/layout/Layout";
import { services } from "@/types/services";
import Link from "next/link";

export default function ServicePage() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Сервис">
        <div>
          <section className="service-details p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Sidebar */}
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="service-sidebar mr_40">
                    <div className="sidebar-widget category-widget">
                      <h3>Сите услуги</h3>
                      <ul className="category-list clearfix">
                        {services.map((service, index) => {
                          return (
                            <li key={index}>
                              <Link href={service.link || "#"}>{service.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Контакт бокси */}
                    <div className="sidebar-widget contact-widget centred">
                      <div className="widget-content">
                        <div
                          className="bg-layer"
                          style={{
                            backgroundImage: "url(assets/images/service/service-7.jpg)",
                          }}></div>
                        <h3>
                          Ви треба <br />
                          <span>помош?</span>
                        </h3>
                        <div className="icon-box">
                          <i className="icon-29"></i>
                        </div>
                        <div className="inner-box">
                          <p>
                            <Link href="mailto:info@wealthwise.mk">info@wealthwise.mk</Link>
                          </p>
                          <h3>
                            <Link href="tel:+38970123456">+389 70 123 456</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="service-details-content">
                    <div className="content-one mb_90">
                      <figure className="image-box">
                        <img src="assets/images/service/service-10.jpg" alt="Финансиско планирање" />
                      </figure>
                      <div className="text">
                        <h2>Финансиско планирање и стратегија</h2>
                        <p>
                          Во Wealth Wise креираме персонализирани стратегии за управување со финансиите, кои ви овозможуваат стабилност, сигурност и раст на долгорочен план. Нашите експерти внимателно ги анализираат вашите цели и пазарните трендови за да изработат оптимален план што ќе одговара на
                          вашите потреби.
                        </p>
                        <p>Без разлика дали станува збор за осигурување, инвестирање или управување со ризик, нашиот пристап е секогаш стратешки, базиран на податоци и фокусиран на резултати.</p>
                      </div>
                    </div>

                    {/* Overview */}
                    <div className="content-two mb_90">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                          <div className="text-box">
                            <h3>Преглед</h3>
                            <p>Нашите консултантски услуги опфаќаат детална анализа, развој на стратегија и имплементација на планови за финансиска ефикасност. Со Wealth Wise добивате партнер кој се грижи за секој детал.</p>
                            <ul className="list-style-one clearfix">
                              <li>Изработка на индивидуални финансиски планови</li>
                              <li>Советување за инвестиции и ризици</li>
                              <li>Оптимизација на осигурителни решенија</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image-box">
                            <img src="assets/images/service/service-9.jpg" alt="Финансиски консалтинг" />
                          </figure>
                        </div>
                      </div>
                    </div>

                    {/* Solutions */}
                    <div className="content-three mb_85">
                      <div className="text mb_100">
                        <h3>Наши решенија</h3>
                        <p>Во Wealth Wise веруваме дека секој клиент заслужува прилагодена стратегија. Нудиме решенија кои ги комбинираат најдобрите финансиски практики со современи технологии, за да го постигнете вашиот целосен потенцијал.</p>
                      </div>

                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="icon-8"></i>
                            </div>
                            <h3>Стратегија за осигурување</h3>
                            <p>Развиваме прилагодени осигурителни решенија за физички и правни лица, кои обезбедуваат сигурност и заштита на вашиот капитал.</p>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="icon-13"></i>
                            </div>
                            <h3>Инвестициски совети</h3>
                            <p>Нашите консултанти ви помагаат да ги изберете вистинските фондови и стратегии за долгорочен раст и стабилност.</p>
                          </div>
                        </div>
                      </div>

                      <div className="text mt_50">
                        <p>Без разлика дали барате нови начини за раст, намалување на ризикот или подобра организација на вашите финансии — Wealth Wise е тука да ве води кон успех.</p>
                      </div>
                    </div>

                    {/* Downloads */}
                    <div className="content-four">
                      <h3>Преземете ресурси</h3>
                      <ul className="download-list clearfix">
                        <li>
                          <div className="icon-box">
                            <i className="icon-30"></i>
                          </div>
                          <h5>Годишен извештај и преглед на услугите</h5>
                          <span>PDF (160KB)</span>
                          <button type="button">Преземи</button>
                        </li>
                        <li>
                          <div className="icon-box">
                            <i className="icon-30"></i>
                          </div>
                          <h5>Водич за финансиско планирање</h5>
                          <span>PDF (200KB)</span>
                          <button type="button">Преземи</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
