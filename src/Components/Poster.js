import React from 'react';
import styled from 'styled-components';
import noneImage from '../assets/noneImage.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 212px;
`;
const Image = styled.div`
  border-radius: 15px;
  background-size: cover;
  background-position: center center;
  height: 180px;
  background-image: url(${(props) => props.url});
  transition: opacity 0.3s linear;
`;
const Votes = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
`;
const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Votes} {
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 3px;
`;
const Year = styled.div`
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imgUrl, votes, title, year, isMovies = true }) => (
  <Link to={isMovies ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image url={imgUrl ? `https://image.tmdb.org/t/p/w300/${imgUrl}` : noneImage}></Image>
        <Votes>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {votes} / 10
        </Votes>
      </ImageContainer>
      <Title>{title.length > 15 ? title.substring(0, 15) + '...' : title}</Title>
      <Year>{year.substring(0, 4)}</Year>
    </Container>
  </Link>
);

export default Poster;
