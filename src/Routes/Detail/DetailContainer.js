import { tvApi, movieApi } from 'api';
import { useState, useEffect } from 'react';

import DetailPresenter from './DetailPresenter';
const DetailContainer = ({
  location: { pathname },
  match: {
    params: { id },
  },
  history: { push },
}) => {
  const [result, setResult] = useState();
  const [detailId] = useState(parseInt(id));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getData = async () => {
    if (isNaN(detailId)) return push('/');
    try {
      let result = null;
      if (pathname.includes('/movie/')) {
        ({ data: result } = await movieApi.movieDetail(detailId));
      } else {
        ({ data: result } = await tvApi.tvShowDetail(detailId));
      }
      setResult(result);
    } catch {
      setError("Can't not result");
    }
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);

  return <DetailPresenter result={result} loading={loading} error={error}></DetailPresenter>;
};

export default DetailContainer;
