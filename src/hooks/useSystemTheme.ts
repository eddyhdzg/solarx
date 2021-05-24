import { useState, useEffect } from "react";
import { PaletteType } from "@material-ui/core";

const useSystemTheme = (): PaletteType => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const listener = (event: MediaQueryListEvent) => {
    setIsDarkTheme(event.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", listener);
    return () => {
      darkThemeMq.removeEventListener("change", listener);
    };
  }, []);

  return isDarkTheme ? "dark" : "light";
};

export default useSystemTheme;
