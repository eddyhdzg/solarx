import * as dayjs from "dayjs";
import { Timestamp } from "types";
import i18next from "i18next";

export const convertBreadcrumb = (string: string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü");
};

// 1000 => 1,000
// 1000.505 => 1,000.51
export const formatNumber = (num: number) => {
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

// 1000 => 1,000 MXN
export const formatMoney = (num: number) => {
  return `$${num.toLocaleString(undefined, { maximumFractionDigits: 2 })} MXN`;
};

// 1000 => 1,000%
// 1000.505 => 1,001%
export const formatPercentage = (num: number) => {
  return `${num.toLocaleString(undefined, { maximumFractionDigits: 0 })}%`;
};

// 1000 => 1,000%
// 1000.505 => 1,000.51%
export const formatPercentage2Dec = (num: number) => {
  return `${num.toLocaleString(undefined, { maximumFractionDigits: 2 })}%`;
};

// 4-Jul-2021
export const fomatTimeStamp = (date: Timestamp) =>
  dayjs.unix(date.seconds).format("D-MMM-YYYY");

export const fomatNumInYears = (num: number) => {
  return `${num.toLocaleString(undefined, {
    maximumFractionDigits: 1,
  })} ${i18next.t("dates.year", { count: num })}`;
};
