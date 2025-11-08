"use client";
import { services } from "@/types/services";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <section className="service-style-two p_relative bg-color-1">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">What We Do</span>
            <h2>
              Provide the Best Consulting <br />
              in This Industry
            </h2>
          </div>
          <div className="row clearfix">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src={service.image} alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="inner">
                        <div className="icon-box">
                          <img src={service.icon} alt="icon" width={50} height={50} />
                        </div>
                        <h3>
                          <Link href="/strategy-planning">{service.title}</Link>
                        </h3>
                        <p>{service.shortDescription}</p>
                        <div className="btn-box">
                          <Link href="/strategy-planning" className="theme-btn-one">
                            Прочитај повеќе
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
