import Seo from "../components/Seo";
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
    <Seo title="about" />
    <div className="back">
      <h1>HOME.</h1>
    </div>
    <style jsx>{divStyle}</style>
    </>
  )
}

