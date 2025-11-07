import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="navigation clearfix">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services1">Services</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
