import { useState, useEffect } from 'react';
import { tvApi, movieApi } from 'api';

import SearchPresenter from './SearchPresenter';
const SearchContainer = () => {
  const [movieResult, setMovieResult] = useState([]);
  const [tvshowResult, setTvshowResult] = useState([]);
  const [inputData, setInputData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const searchHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    await getData();
    setLoading(false);
  };

  const updateTerms = (event) => {
    setInputData(event.target.value);
  };

  const getData = async () => {
    try {
      const {
        data: { results: movieResult },
      } = await movieApi.searchMovie(inputData);
      setMovieResult(movieResult);
      const {
        data: { results: tvshowResult },
      } = await tvApi.searchTVshow(inputData);
      setTvshowResult(tvshowResult);
    } catch {
      setError("Can't not result");
    }
  };

  return (
    <SearchPresenter
      searchHandler={searchHandler}
      searchTerms={inputData}
      movieResult={movieResult}
      tvshowResult={tvshowResult}
      loading={loading}
      error={error}
      updateTerms={updateTerms}
    ></SearchPresenter>
  );
};

export default SearchContainer;
