"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,

  // Навигација
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Пагинација
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const bannerImages = ["assets/wealth-wise/images/image3.png", "assets/wealth-wise/images/image4.png", "assets/wealth-wise/images/image2.png"];

export default function Banner() {
  return (
    <>
      <section className="banner-style-two p_relative centred">
        <Swiper {...swiperOptions} className="banner-carousel">
          {bannerImages.map((image, index) => (
            <SwiperSlide key={index} className="slide-item p_relative">
              <div className="image-layer p_absolute" style={{ backgroundImage: `url(${image})` }}></div>
              <div className="auto-container">
                <div className="content-box">
                  <h2>Tвојот партнер за финансиска слобода</h2>
                  <p>Прецизни совети, персонализирани решенија и практична поддршка за твојот финансиски успех. Со вистинска стратегија, секоја финансиска одлука станува чекор поблиску до сигурна иднина. Ние сме тука да ја претвориме твојата визија во реалност.</p>
                  <div className="btn-box">
                    <Link href="/about-us" className="theme-btn-one">
                      Дознај повеќе
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="owl-nav">
            <button type="button" className="owl-prev h1p">
              <span className="icon-5"></span>
            </button>
            <button type="button" className="owl-next h1n">
              <span className="icon-6"></span>
            </button>
          </div>
        </Swiper>
      </section>
    </>
  );
}
