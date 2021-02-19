import { tvApi } from 'api';
import { useState, useEffect } from 'react';

import TVPresenter from './TVPresenter';
const TVContainer = () => {
  const [topRated, setTopRated] = useState();
  const [popular, setPopular] = useState();
  const [airingToday, setAiringToday] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getData = async () => {
    try {
      const {
        data: { results: topRated },
      } = tvApi.topRated();
      setTopRated(topRated);
      const {
        data: { results: popular },
      } = tvApi.popular();
      setPopular(popular);
      const {
        data: { results: airingToday },
      } = tvApi.airingToday();
      setAiringToday(airingToday);
    } catch {
      setError("Can't not result");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <TVPresenter topRated={topRated} popular={popular} airingToday={airingToday} loading={loading} error={error}></TVPresenter>;
};

export default TVContainer;
