import styled from 'styled-components';
import propTypes from 'prop-types';
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => {
  return loading ? null : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title={'topRated TV Show'}>
          {topRated.map((value) => (
            <Poster
              key={value.id}
              id={value.id}
              imgUrl={value.backdrop_path}
              votes={value.vote_average}
              title={value.original_name}
              year={value.first_air_date}
              isMovies={false}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title={'popular TV Show'}>
          {popular.map((value) => (
            <Poster
              key={value.id}
              id={value.id}
              imgUrl={value.backdrop_path}
              votes={value.vote_average}
              title={value.original_name}
              year={value.first_air_date}
              isMovies={false}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title={'airingToday TV Show'}>
          {airingToday.map((value) => (
            <Poster
              key={value.id}
              id={value.id}
              imgUrl={value.backdrop_path}
              votes={value.vote_average}
              title={value.original_name}
              year={value.first_air_date}
              isMovies={false}
            />
          ))}
        </Section>
      )}
    </Container>
  );
};

TVPresenter.propTypes = {
  topRated: propTypes.array,
  popular: propTypes.array,
  airingToday: propTypes.array,
  loading: propTypes.bool.isRequired,
  error: propTypes.string,
};
export default TVPresenter;
