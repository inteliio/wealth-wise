import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { services } from "@/types/services";

export default function ServiceDetails({ params }) {
  // ✅ params are available automatically in app router
  const { id } = params;
  const service = services.find((s) => s.id.toString() === id);

  if (!service) {
    // fallback if invalid id
    return (
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Сервис не е пронајден">
        <section className="p_relative">
          <div className="auto-container centred">
            <h2>Услугата не постои или е отстранета.</h2>
            <Link href="/services" className="theme-btn-one mt_20">
              Назад кон сите услуги
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={3} footerStyle={1} breadcrumbTitle={service.title}>
      <section className="service-details p_relative">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="service-sidebar mr_40">
                <div className="sidebar-widget category-widget">
                  <h3>Сите услуги</h3>
                  <ul className="category-list clearfix">
                    {services.map((s) => (
                      <li key={s.id} className={s.id.toString() === id ? "current" : ""}>
                        <Link href={`/services/${s.id}`}>{s.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Контакт */}
                <div className="sidebar-widget contact-widget centred">
                  <div className="widget-content">
                    <div
                      className="bg-layer"
                      style={{
                        backgroundImage: "url(/assets/images/service/service-7.jpg)",
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
                    <img src={service.image || "/assets/images/service/service-10.jpg"} alt={service.title} />
                  </figure>
                  <div className="text">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    {service.shortDescription && <p>{service.shortDescription}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
