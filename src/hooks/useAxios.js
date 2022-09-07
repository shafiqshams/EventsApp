import {useEffect, useState} from 'react';
import {BASE_URL} from '../services/helpers/config';
import axios from 'axios';

export const useAxios = urlPath => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const cancelToken = axios.CancelToken.source();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const {
          data: {data},
        } = await axios.get(BASE_URL + urlPath, {
          cancelToken: cancelToken.token,
        });
        isMounted && setResponse(data);
      } catch (error) {
        isMounted && setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    //Clean up func, cancelling pending requests.
    return () => {
      isMounted = false;
      cancelToken.cancel();
    };
  }, [urlPath]);

  return {response, isLoading, fetchError};
};
