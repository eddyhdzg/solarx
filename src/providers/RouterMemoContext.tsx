import { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TRouterMemo } from "types";

const RouterMemoContext = createContext<TRouterMemo>({
  "/home": "/",
  "/portfolio": "/",
  "/trading": "/",
  "/projects": "/",
  "/more": "/",
});

const RouterMemoProvider: React.FC = ({ children }) => {
  const location = useLocation();
  const [routerMemo, setRouterMemo] = useState<TRouterMemo>({
    "/home": "/home",
    "/portfolio": "/portfolio",
    "/trading": "/trading",
    "/projects": "/projects",
    "/more": "/more",
  });

  useEffect(() => {
    const baseRoute =
      location.pathname.substring(0, location.pathname.indexOf("/", 1)) ||
      location.pathname;

    if (baseRoute in routerMemo) {
      setRouterMemo({
        ...routerMemo,
        [baseRoute]: location.pathname,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <RouterMemoContext.Provider value={routerMemo}>
      {children}
    </RouterMemoContext.Provider>
  );
};

export { RouterMemoContext, RouterMemoProvider };
