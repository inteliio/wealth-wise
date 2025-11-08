"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import TestimonialSlider0 from "@/components/slider/TestimonialSlider0";
import AwardSlider1 from "@/components/slider/AwardSlider1";
import Link from "next/link";
import { useState } from "react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
export default function Home() {
  const [isOpen, setOpen] = useState(false);
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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
        {/* about-section */}
        <section className="team-details p_relative">
          <div className="auto-container">
            <div className="biography-box mb_80">
              <h3>За wealthwise</h3>
              <p>
                Wealth Wise е ваш доверлив партнер во светот на финансиската стабилност и сигурност. Нашата мисија е едноставна – да ви помогнеме да управувате со вашите пари паметно, одговорно и со јасна стратегија. Без разлика дали правите први чекори во инвестирањето или веќе имате изграден
                капитал, ние сме тука да ве насочиме кон раст, стабилност и исполнување на вашите финансиски цели. Но нашата грижа за вас не завршува тука. Со широк спектар на осигурителни решенија – и животно и неживотно – ние го штитиме она што најмногу ви значи: вашиот живот, семејството, домот,
                бизнисот, автомобилот и сè што е вредно за вас. Заедно ја избираме најдобрaтa понуда, прилагодена на вашите желби, визија и животен стил. Преку животното осигурување ви овозможуваме да обезбедите финансиска сигурност за себе и најблиските, а со неживотното – стабилност и заштита во
                непредвидени ситуации. И најважно, во моментите кога е потребно, ние не ве оставаме сами – со нашата експертиза и целосна поддршка, брзо и ефикасно го решаваме секој осигурителен случај. Со Wealth Wise, сигурноста и растот одат рака под рака.
              </p>
            </div>

            <div className="team-details-content mb_90">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <figure className="image-box mr_30">
                    <img src="assets/wealth-wise/images/me.jpeg" alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box ml_30">
                    <h2>Андреј Цветковски</h2>
                    <span className="designation">Консултант</span>
                    <p>
                      Како внатрешен менаџер за продажба, го водам мојот тим со фокус на стратешки раст, задоволство на клиентите и оперативна ефикасност. Мојот пристап комбинира длабоко разбирање на маркетингот со резултатски ориентиран менталитет, овозможувајќи одржлив развој на бизнисот преку
                      силни односи со клиентите и прецизна изведба.
                    </p>
                    <ul className="info-list clearfix">
                      <li>
                        <span>Област на експертиза: </span>Финансии, Стратегија
                      </li>
                      <li>
                        <span>Искуство: </span>10 години
                      </li>
                      <li>
                        <span>Е-пошта: </span>
                        <Link href="mailto:anrej.cvetkovski@gmail.com">anrej.cvetkovski@gmail.com</Link>
                      </li>
                      <li>
                        <span>Телефон: </span>
                        <Link href="tel:38971447436">+389 71447436</Link>
                      </li>
                    </ul>
                    <ul className="social-links clearfix">
                      <li>
                        <Link href="/team-details">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/team-details">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/team-details">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
