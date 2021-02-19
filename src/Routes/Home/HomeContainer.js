import { useState, useEffect } from 'react';
import { movieApi } from 'api';
import HomePresenter from './HomePresenter';

const TVContainer = () => {
  const [nowPlaying, setNowPlaying] = useState();
  const [upcomming, setUpcomming] = useState();
  const [popular, setPopular] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getData = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      setNowPlaying(nowPlaying);
      const {
        data: { results: upcomming },
      } = await movieApi.upcomming();
      setUpcomming(upcomming);
      const {
        data: { results: popular },
      } = await movieApi.popular();
      setPopular(popular);
      setLoading(false);
    } catch {
      setError("Can't not result");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <HomePresenter nowPlaying={nowPlaying} upcomming={upcomming} popular={popular} loading={loading} error={error}></HomePresenter>;
};

export default TVContainer;
