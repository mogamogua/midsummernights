import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;
//apollo의 cache기능 덕분에, 한번 들어갔던 페이지에서는 쿼리를 보내지 않고 저장된 데이터를 사용한다.
function Movie() {
  const param = useParams();
  const {loading, data} = useQuery(GET_MOVIE, {
    variables: {
      movieId: param.id
    },
  });

  console.log(data)
  if (loading) {
    return <h2>loading...</h2>
  }
  return (
    <>
    <h1>{data.movie.title}</h1>
    <div>Movie Detail Page</div>
    </>
  )
}

export default Movie