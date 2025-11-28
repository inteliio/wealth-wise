"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function WhyChooseUs() {
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
      {/* why-choose-us-style */}
      <section className="chooseus-style-two sec-pad">
        <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: "url(assets/wealth-wise/images/image.png)" }}></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-6 col-lg-12 offset-xl-6 content-column">
              <div className="content_block_six">
                <div className="content-box p_relative ml_30">
                  <div className="sec-title mb_50">
                    <span className="sub-title">Зошто Wealth Wise</span>
                    <h2 style={{ color: "white" }}>Причини зошто клиентите не избираат нас</h2>
                  </div>
                  <ul className="accordion-box">
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                        <div className="icon-box"></div>
                        <h3>Брз и професионален одговор</h3>
                      </div>
                      <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">Нашиот тим секогаш реагира навремено — без долги чекања и комплицирани процеси. Добивате брз одговор и решение прилагодено на вашите финансиски или осигурителни потреби.</div>
                        </div>
                      </div>
                    </li>

                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                        <div className="icon-box"></div>
                        <h3>Искуствен и доверлив тим</h3>
                      </div>
                      <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">Во Wealth Wise работиме со искусни консултанти кои ве водат низ целиот процес — од инвестиции до избор на осигурување, со максимална транспарентност и грижа за клиентот.</div>
                        </div>
                      </div>
                    </li>

                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                        <div className="icon-box"></div>
                        <h3>Флексибилни и достапни решенија</h3>
                      </div>
                      <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">Ви овозможуваме флексибилни начини на плаќање и решенија прилагодени на вашиот буџет, без компромис на квалитетот на услугата.</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why-choose-us-style end */}
    </>
  );
}
