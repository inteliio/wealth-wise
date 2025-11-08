import Link from "next/link";

export default function Cta() {
  return (
    <>
      <section className="cta-section p_relative">
        <div className="bg-layer parallax-bg" data-parallax={{ y: 100 }} style={{ backgroundImage: "url(assets/wealth-wise/images/image2.png)" }}></div>
        <div className="auto-container">
          <div className="inner-box">
            <h2>
              Да <span>започнеме со разговор</span> уште сега за следниот проект
            </h2>
            <h3>
              <Link href="tel:38971447436">+389 71447436</Link>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
