import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      medium_cover_image
      rating
      isLiked @client 
    }
  }
`;
//apollo의 cache기능 덕분에, 한번 들어갔던 페이지에서는 쿼리를 보내지 않고 저장된 데이터를 사용한다.
//apollo devtool을 사용하면 캐시된 데이터 확인 가능, 매번 쿼리를 보낼 때 어떤 쿼리를 보냈는지 확인 가능.
//@client를 붙여서 클라이언트 측에서의 local데이터임을 전해줄 수 있다.
//이 로컬 데이터도 remote 데이터를 사용하는 방식과 동일하게 사용하면된다!
function Movie() {
  const param = useParams();
  const {
    loading, 
    data, 
    client: { cache }, 
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: param.id
    },
  });


  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${param.id}`, //어떤 데이터를 변경할지 특정할 수 있어야함. => id로 찾기
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : `${data.movie?.title}`}</Title>
        <Subtitle>⭐️ {data?.movie?.rating}</Subtitle>
        <button onClick={onClick}>{data?.movie?.isLiked ? "unlike" : "like"}</button>
      </Column>
      <Image bg={data?.movie?.medium_cover_image} />
    </Container>
  );
}

export default Movie

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Image = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;