import React, { useState, useEffect } from 'react'; // eslint-disable-line

type UseApiOptionsType = {
  loadingOnRefetch: boolean;
};

const defaultOptions = { loadingOnRefetch: true };

const useApi = (service: Function, params?: any, options?: UseApiOptionsType) => {
  const [loading, handleLoading] = useState(true);
  const [data, handleData] = useState(null);
  const [error, handleError] = useState(null);

  const { loadingOnRefetch } = options || defaultOptions;

  const fetchApi = async () => {
    if (loadingOnRefetch) handleLoading(true);
    const res = await service(params);

    if (res.status !== 'KO') {
      handleData(res.data);
    } else {
      handleError(res.error);
    }
    handleLoading(false);
  };

  const refetch = () => {
    fetchApi();
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { data, loading, error, refetch };
};

export default useApi;
