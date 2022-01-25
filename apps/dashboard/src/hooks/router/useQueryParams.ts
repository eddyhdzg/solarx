import { useLocation } from "react-router-dom";
import qs from "query-string";

export default function useQueryParams() {
  const { search } = useLocation();
  return qs.parse(search);
}
