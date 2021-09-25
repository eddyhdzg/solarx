import * as dayjs from "dayjs";
import { Timestamp } from "types";
import i18next from "i18next";
import localizedFormat from "dayjs/plugin/localizedFormat";

var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(localizedFormat);
// @ts-ignore
dayjs.tz.guess();

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

// Fri, Sep 24, 2021 1:00 AM
export const fomatTimeStampWithMinAndSec = (date: Timestamp) => {
  // @ts-ignore
  return dayjs.unix(date.seconds)?.tz()?.format("llll");
};

export const fomatNumInYears = (num: number) => {
  return `${num.toLocaleString(undefined, {
    maximumFractionDigits: 1,
  })} ${i18next.t("dates.year", { count: num })}`;
};
