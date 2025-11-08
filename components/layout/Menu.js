import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="navigation clearfix">
        <li>
          <Link href="/">Дома</Link>
        </li>
        <li>
          <Link href="/services">Сервиси</Link>
        </li>
        <li>
          <Link href="/about-us">За Нас</Link>
        </li>

        <li>
          <Link href="/contact">Контакт</Link>
        </li>
      </ul>
    </>
  );
}
