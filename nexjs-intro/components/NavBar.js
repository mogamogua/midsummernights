import Link from "next/link";
import {useRouter} from "next/router";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  //css module을 사용하여 스타일을 줄 땐 프로퍼티 사용하듯이 가져오면 된다.

  //두개의 클래스네임을 주는 방법은 2가지가 있다.
  // (1) {}안에 백틱을 사용하여 각각의 스타일을 불러오고 문자열로 만들기.
  // (2) 배열 안에 넣은 후 join(" ")하여 문자열로 만들기.
  return (
    <nav>
      <Link href="/">
        {/* <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a> */}
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">        
        {/* <a
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}>
          About
        </a> */}
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
      //style jsx로 css 코드삽입 : class이름은 랜덤으로 바뀌어서 중복된 이름도 사용가능.
      //각 컴포넌트 별로 독립적이다. 
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>  )
}