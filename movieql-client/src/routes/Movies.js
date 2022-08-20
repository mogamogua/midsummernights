import { gql, useQuery } from '@apollo/client';
import React from 'react';
import {Link} from "react-router-dom";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;
function Movies() {
  const {data, loading, error} = useQuery(ALL_MOVIES);
  //useEffect, useState를 사용하지 않아도 useQuery를 사용하면 편리하게 gql로 데이터를 가져오고 관리할 수 있다.
  //useQuery는 결과로 data, loading상태, error여부, network status등등을 반환한다.
  if (loading) {
    return <h1>Loading...</h1>
  } 
  if (error) {
    return <h1>Could not fetch 🧨</h1>
  } else {
    return (
      <ul>
        <h1>Movies</h1>
        {data.allMovies.map(movie => (
          <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}> 
          {movie.title}
          </Link>
          </li>
        ))}
      
        <h1>Tweets</h1>
        {data.allTweets.map(tweet => (<li key={tweet.id}>{tweet.text}</li>))}
      </ul>

    )
  }
}

export default Movies