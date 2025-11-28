import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle }) {
  return (
    <>
      <section className="page-title centred">
        <div className="bg-layer" style={{ backgroundColor: "#0b0b0b" }}></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>{breadcrumbTitle}</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Дома</Link>
              </li>
              <li>{breadcrumbTitle}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
