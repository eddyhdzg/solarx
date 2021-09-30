import { ChangeEvent } from "react";
import { useHistory, useLocation } from "react-router-dom";
// @ts-ignore
import queryString from "query-string";

const useRouterState = () => {
  const history = useHistory();
  const { search, pathname } = useLocation();
  const searchParams = queryString.parse(search);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQueries = {
      ...searchParams,
      [e?.target.name]: e?.target.value || undefined,
    };
    history.replace({
      pathname,
      search: queryString.stringify(newQueries),
    });
  };

  const onReset = (names: string[]) => {
    const reset: { [key: string]: undefined } = {};
    const resetObject = names.reduce((acc, cur) => {
      acc[cur] = undefined;
      return acc;
    }, reset);

    const newQueries = { ...searchParams, ...resetObject };
    history.replace({
      pathname,
      search: queryString.stringify(newQueries),
    });
  };

  return { values: searchParams, onChange, onReset };
};

export default useRouterState;
