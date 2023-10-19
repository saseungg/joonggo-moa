import { useState, useEffect } from 'react';

import { CustomError } from '@utils/index';

const RESPONSE_STATE = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
} as const;

const REQUEST_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;

export { RESPONSE_STATE, REQUEST_METHOD };

interface ErrorResponse {
  code: number;
  message: string;
}

type ResponseState = (typeof RESPONSE_STATE)[keyof typeof RESPONSE_STATE];
type DataState<T> = T | null;
type ErrorState = CustomError | null;

interface UseFetchProps {
  url: string;
  options: RequestInit;
  skip?: boolean;
}

const useFetch = <T>({ url, options: optionsProp, skip = false }: UseFetchProps) => {
  const [responseState, setResponseState] = useState<ResponseState>(RESPONSE_STATE.IDLE);
  const [data, setData] = useState<DataState<T>>(null);
  const [error, setError] = useState<ErrorState>(null);

  const fetchData = async (body?: string | FormData) => {
    try {
      setResponseState(RESPONSE_STATE.LOADING);

      const options = body ? { ...optionsProp, body } : optionsProp;
      const response = await fetch(url, options);

      if (!response.ok) {
        const { code, message }: ErrorResponse = await response.json();
        throw new CustomError(code, message);
      }

      const result = await response.json();

      setResponseState(RESPONSE_STATE.SUCCESS);
      setData(result.data);
      setError(null);
    } catch (error) {
      const err = error as CustomError;

      setResponseState(RESPONSE_STATE.ERROR);
      setData(null);
      setError(err);
    }
  };

  useEffect(() => {
    if (!skip) fetchData();
  }, []);

  return { fetchData, responseState, data, error };
};

export default useFetch;
