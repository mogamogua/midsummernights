import NavBar from "../components/NavBar";
import "../styles/globals.css"; //custom App컴포넌트에서는 globalCss를 불러옰 ㅜ 있다.

//global style 쓰고싶다면 _app.js를 직접 만들어 커스터마이징하기.

//App 컴포넌트의 첫 prop은 component, 다른 하나는 pageProps이다.
export default function MyApp({Component, pageProps}) {
  return (
    <> 
    <NavBar />
    <Component {...pageProps} />
    </>
  )
}