import React from 'react';
import styled from 'styled-components';
import { tvApi, movieApi } from '../../api';

const Container = styled.div`
  height: calc(100vh - 50px);
  position: relative;
  width: 100%;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.url});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const PosterImage = styled.div`
  width: 30%;
  height: 90%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const InformationContainer = styled.div`
  width: 60%;
  height: 90%;
`;

const InformationTitle = styled.div`
  font-size: 32px;
  margin-bottom: 15px;
`;

const InformationTime = styled.span``;
const Division = styled.span`
  margin: 0px 10px;
`;

const Overview = styled.p`
  margin-top: 15px;
  width: 50%;
  opacity: 0.6;
`;
const DetailPresenter = ({ result, loading, error }) => {
  return result === undefined ? null : (
    <Container>
      <Backdrop url={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}></Backdrop>
      <Contents>
        <PosterImage url={`https://image.tmdb.org/t/p/w300/${result.poster_path}`}></PosterImage>
        <InformationContainer>
          <InformationTitle>{result.title}</InformationTitle>
          <InformationTime>
            {result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}
          </InformationTime>
          <Division>•</Division>
          <InformationTime>{result.runtime ? result.runtime : result.episode_run_time[0]} min</InformationTime>
          {result.genres && <Division>•</Division>}
          <InformationTime>
            {result.genres && result.genres.map((genre, index) => (index === result.genres.length - 1 ? genre.name : `${genre.name} / `))}
          </InformationTime>
          <Overview>{result.overview}</Overview>
        </InformationContainer>
      </Contents>
    </Container>
  );
};

export default DetailPresenter;
