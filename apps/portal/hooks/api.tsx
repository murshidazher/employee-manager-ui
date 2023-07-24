import { useCallback, useState } from "react";

import useError from "./error";

export interface UseApiReturnType<T> {
  isLoading: boolean;
  isError: boolean;
  execute: Function;
  error?: string;
  result?: T;
}

function useApi<T>(dataFunction: Function): UseApiReturnType<T> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [result, setResult] = useState<T>();
  const [error, setError] = useState<string>();

  useError(error, isLoading);

  const execute = useCallback(
    async (...args: any): Promise<any> => {
      setIsLoading(true);
      // eslint-disable-next-line no-underscore-dangle
      const _result = await dataFunction(...args);
      const [_isError, data] = _result;
      if (_isError && typeof data === "string") {
        setIsError(true);
        setError(data);
      } else if (data) {
        setResult(data);
        setError(undefined);
      }

      setIsLoading(false);

      return _result;
    },
    [dataFunction]
  );

  return { isLoading, isError, execute, result };
}

export default useApi;
