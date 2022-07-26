export default function useIsLocal() {
  return process.env.REACT_APP_ENV === "local";
}
