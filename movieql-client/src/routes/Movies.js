import { gql, useQuery } from '@apollo/client';
import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
      medium_cover_image
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
      <Container>
      <Header>
        <Title>Apollo Movies</Title>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <MoviesGrid>
        {data?.allMovies?.map((movie) => (
          <PosterContainer key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <PosterBg background={movie.medium_cover_image} />
            </Link>
          </PosterContainer>
        ))}
      </MoviesGrid>
    </Container>

    )
  }
}

export default Movies

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;


const PosterContainer = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const PosterBg = styled.div`
  background-image: url(${(props) => props.background});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;
