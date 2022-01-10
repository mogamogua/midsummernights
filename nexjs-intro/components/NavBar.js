import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        {/* <a style={{color: router.pathname === "/" ? "red" : "blue"}}>Home</a> */} 
        {/* <a className={router.pathname === "/" ? styles.active : ""}>Home</a> */}
        <a className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}>Home</a>
      </Link>
      <Link href="/about">
        {/* <a style={{color: router.pathname === "/about" ? "red" : "blue"}}>About</a> */}
        {/* <a className={router.pathname === "/about" ? styles.active : ""}>About</a> */}
        <a
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}>About</a>
      </Link>
    </nav>
  )
}