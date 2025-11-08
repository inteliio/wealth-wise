"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 2 },
    1199: { slidesPerView: 3 },
    1350: { slidesPerView: 3 },
  },
};

export default function TestimonialSlider0() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        <SwiperSlide className="slide">
          <div className="testimonial-block-two">
            <div className="inner-box">
              <h3>Ивана Петровска</h3>
              <span className="designation">Клиент – Инвеститор</span>
              <p>“Со нивна помош конечно ја структурирав мојата инвестиција така што добив сигурност и раст. Тимот ми помогна да разберам каде најдобро да ги вложам средствата и како да постигнам баланс меѓу ризик и добивка.”</p>
              <ul className="rating clearfix">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="far fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="testimonial-block-two">
            <div className="inner-box">
              <h3>Марко Стојанов</h3>
              <span className="designation">Клиент – Приватно здравствено осигурување</span>
              <p>“Благодарение на приватното здравствено осигурување кое го договорив преку нив, добив брз пристап до прегледи и безгрижност за моето здравје и здравјето на моето семејство. Искрено препорачувам!”</p>
              <ul className="rating clearfix">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="testimonial-block-two">
            <div className="inner-box">
              <h3>Ана Јовановска</h3>
              <span className="designation">Клиент – Каско осигурување</span>
              <p>“Кога имав штета на возилото, процесот беше неверојатно брз и професионален. Сè беше решено без непотребен притисок. Навистина се грижат за своите клиенти.”</p>
              <ul className="rating clearfix">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="far fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="testimonial-block-two">
            <div className="inner-box">
              <h3>Горан Крстев</h3>
              <span className="designation">Клиент – Пензиски план</span>
              <p>“Ми помогнаа да креирам стабилен пензиски план кој ќе ми обезбеди сигурност во иднина. Се чувствувам мирно знаејќи дека мојата иднина е добро испланирана.”</p>
              <ul className="rating clearfix">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="testimonial-block-two">
            <div className="inner-box">
              <h3>Јелена Димитрова</h3>
              <span className="designation">Клиент – Инвестициски фонд</span>
              <p>“Со нивниот совет успеав да распределам средства во неколку фондови и да добијам поголема стабилност на инвестициите. Исклучително транспарентен и сигурен партнер.”</p>
              <ul className="rating clearfix">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="far fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
