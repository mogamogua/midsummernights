import NavBar from "./NavBar";

//Layout컴포넌트가 위치한 곳 안쪽에있는 컴포넌트들은 
//children prop으로 받아와서 div 안에 들어간다.
export default function Layout({children}) {
  return (
    <>
    <NavBar />
    <div>{children}</div>
    </>
  )
}