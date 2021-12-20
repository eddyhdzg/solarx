import * as dayjs from "dayjs";
import { Timestamp } from "types";
import i18next from "i18next";
import localizedFormat from "dayjs/plugin/localizedFormat";
require("dayjs/locale/es");

var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.tz.guess();
dayjs.locale("es");

// 1000 => 1,000
// 1000.505 => 1,000.51
export const formatNumber = (num: number) => {
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

// 100,000 => 1,000
export const formatUnits = (num: number) => {
  return (num / 100).toLocaleString(undefined, { maximumFractionDigits: 2 });
};

// 100,000 => 1,000 MXN
export const formatMoney = (num: number = 0) => {
  return `$${(num / 100).toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })} MXN`;
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
export const fomaTimestamp = (date: Timestamp) =>
  dayjs.unix(date.seconds).format("D-MMM-YYYY");

export const formatStock1Y = (seconds: Timestamp["seconds"]) => {
  return dayjs.unix(seconds).format("MMM D YYYY");
};

export const formatStock1M = (seconds: Timestamp["seconds"]) => {
  return dayjs.unix(seconds).format("MMM D");
};

// Fri, Sep 24, 2021 1:00 AM
export const fomaTimestampWithMinAndSec = (date: Timestamp) => {
  return dayjs.unix(date.seconds)?.tz()?.format("llll");
};

export const fomatNumInYears = (num: number) => {
  return `${num.toLocaleString(undefined, {
    maximumFractionDigits: 1,
  })} ${i18next.t("dates.year", { count: num })}`;
};

// October 2021
export const formatMonthAndYear = (seconds: Timestamp["seconds"]) => {
  return dayjs.unix(seconds)?.tz()?.format("MMMM YYYY");
};

// Dic 21, 2021 5:15 PM
export const formatllll = (seconds: Timestamp["seconds"]) => {
  return dayjs.unix(seconds)?.tz()?.format("MMM D, YYYY h:mm A");
};

export const formatllllCST = (seconds: Timestamp["seconds"]) => {
  return dayjs
    .unix(seconds)
    ?.tz("America/Mexico_City")
    ?.format("MMM D, YYYY h:mm A CST");
};
