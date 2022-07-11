import Seo from "../components/Seo";
import css from "styled-jsx/css";
import { useEffect, useState } from "react";

export const divStyle = css`
  .back {
    background-color: lightgrey;
    padding: 2rem;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    gap: 20px;
  }
  .movie img {
    max-width: 100%;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .movie:hover img {
    transform: scale(1.05) translateY(-10px);
  }
  .movie h4 {
    font-size: 18px;
    text-align: center;
  }
`;
export default function Home({results}) {
    const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //   (async () => {
    //     const {results} = await (await fetch(`/api/movies`)).json(); //rewrite하기 전 url로 요청한다
    //     setMovies(results)
    //   })();
    // }, []);
    //data를 받아오는 것은 server쪽에서 한 후 rendering한다.
    //server-side rendering을 통해서 크롤러가 html을 크롤링할 때데이터 영역까지 모두ㅡ 볼 수 있도록.
    //하지만 SSR은 데이터를 받아오기 전까진 화면에 아무것도 안 보이게 된다.
  return (
    <div className="container" >
      <Seo title="Home" />
        {results?.map((movie) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
       <style jsx>{divStyle}</style>
    </div>
  )
}

//getServerSideProps라는 함수 이름은 고정적. 바꿀 수 없다.
//여기서 받아온 data들을 results라는 이름의 props로 page에 넘겨준다.
export async function getServerSideProps() {
  const {results} = await (
    await fetch(`http://localhost:3000/api/movies`) 
    //url은 client-side가 아니기 때문에 absolute URL만 가능하다. (/api/movies로 넣으면 X)
  ).json();
  return {
    props: {
      results,
    }
  }
}