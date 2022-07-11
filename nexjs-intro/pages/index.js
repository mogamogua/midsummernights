import NavBar from "../components/NavBar";
import css from "styled-jsx/css";

export const divStyle = css`
  .back {
    background-color: lightgrey;
    padding: 2rem;
  }
`;
export default function Home() {
  return (
    <>
    <div className="back">
      <h1>HOME.</h1>
    </div>
    <style jsx>{divStyle}</style>
    </>
  )
}

