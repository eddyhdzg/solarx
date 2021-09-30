import { useLocation } from "react-router-dom";
// @ts-ignore
import queryString from "query-string";

export default function useQueryParams() {
  const { search } = useLocation();
  return queryString.parse(search);
}
