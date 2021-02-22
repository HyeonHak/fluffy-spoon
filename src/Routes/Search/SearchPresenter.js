import propTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';

const Container = styled.div`
  height: 83px;
  padding: 20px;
`;
const Form = styled.form``;
const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 28px;
`;

const SearchContainer = styled.div`
  padding: 20px;
`;
const SearchPresenter = ({ searchHandler, searchTerms, movieResult, tvshowResult, loading, error, updateTerms }) => {
  return (
    <>
      <Container>
        <Form onSubmit={searchHandler}>
          <Input placeholder="Search Movies or TV Shows..." value={searchTerms} onChange={updateTerms} />
        </Form>
      </Container>
      {loading
        ? null
        : movieResult &&
          movieResult.length > 0 && (
            <SearchContainer>
              <Section title={'Movie Results'}>
                {movieResult.map((value) => (
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
              {tvshowResult && tvshowResult.length > 0 && (
                <Section title={'TV Result'}>
                  {tvshowResult &&
                    tvshowResult.length > 0 &&
                    tvshowResult.map((value) => (
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
            </SearchContainer>
          )}
    </>
  );
};

SearchPresenter.propTypes = {
  searchHandler: propTypes.func.isRequired,
  searchTerms: propTypes.string,
  movieResult: propTypes.array,
  tvshowResult: propTypes.array,
  loading: propTypes.bool,
  error: propTypes.string,
  updateTerms: propTypes.func.isRequired,
};
export default SearchPresenter;
