import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes } from "types";

type TBreadcrumb = {
  breadcrumb: Routes | string;
  href: string;
}[];

export default function useBreadcrumbs() {
  const { pathname } = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<TBreadcrumb>([]);

  useEffect(() => {
    const linkPath = pathname.split("/");
    linkPath.shift();
    const pathArray = linkPath.map((path, i) => {
      return {
        breadcrumb: path,
        href: "/" + linkPath.slice(0, i + 1).join("/"),
      };
    });
    setBreadcrumbs(pathArray);
  }, [pathname]);

  return breadcrumbs;
}
