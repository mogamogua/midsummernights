import Seo from "../components/Seo";
import css from "styled-jsx/css";
import { useEffect, useState } from "react";

const API_KEY = "cf004ab885196276ebc4a6fddfb9cf18";

export const divStyle = css`
  .back {
    background-color: lightgrey;
    padding: 2rem;
  }
`;
export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      (async () => {
        const {results} = await (
          await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
          )
        ).json();
        setMovies(results)
      })();
    }, []);
  return (
    <>
    <Seo title="about" />
    <div className="back">
      <h1>HOME.</h1>
      {!movies && <h4>Loading ...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}><h4>{movie.original_title}</h4></div>
      ))}
    </div>
    <style jsx>{divStyle}</style>
    </>
  )
}

