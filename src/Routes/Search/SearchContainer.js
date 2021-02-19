import { useState, useEffect } from 'react';
import { tvApi, movieApi } from 'api';

import SearchPresenter from './SearchPresenter';
const SearchContainer = () => {
  const [movieResult, setMovieResult] = useState();
  const [tvshowResult, setTvshowResult] = useState();
  const [inputData, setInputData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const searchHandler = (terms) => {
    setInputData(terms);
  };

  const getData = async () => {
    try {
      const {
        data: { results: movieResult },
      } = await movieApi.searchMovie(inputData);
      setMovieResult(movieResult);
      const {
        data: { results: tvshowResult },
      } = await tvApi.searchMovie(inputData);
      setTvshowResult(tvshowResult);
    } catch {
      setError("Can't not result");
    }
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [inputData]);

  return (
    <SearchPresenter
      searchHandler={searchHandler}
      movieResult={movieResult}
      tvshowResult={tvshowResult}
      loading={loading}
      error={error}
    ></SearchPresenter>
  );
};

export default SearchContainer;
