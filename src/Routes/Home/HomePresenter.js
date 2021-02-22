import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import { useEffect } from 'react';
import Poster from '../../Components/Poster';

const Container = styled.div`
  padding: 20px;
`;
const HomePresenter = ({ nowPlaying, upcomming, popular, loading, error }) => {
  useEffect(() => {
    console.log(nowPlaying);
  }, [nowPlaying]);
  return loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title={'Now Playing'}>
          {nowPlaying.map((value, index) => (
            <Poster
              key={value.id}
              id={value.id}
              imgUrl={value.backdrop_path}
              votes={value.vote_average}
              title={value.original_title}
              year={value.release_date}
            />
          ))}
        </Section>
      )}

      {upcomming && upcomming.length > 0 && (
        <Section title={'upcomming Movies'}>
          {upcomming.map((value, index) => (
            <Poster
              key={value.id}
              id={value.id}
              imgUrl={value.backdrop_path}
              votes={value.vote_average}
              title={value.original_title}
              year={value.release_date}
            />
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title={'popular Movies'}>
          {popular.map((value, index) => (
            <Poster
              key={value.id}
              id={value.id}
              imgUrl={value.backdrop_path}
              votes={value.vote_average}
              title={value.original_title}
              year={value.release_date}
            />
          ))}
        </Section>
      )}
    </Container>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcomming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
