import * as dayjs from "dayjs";
import { Timestamp } from "solarx-types";
import i18next from "i18next";

// 4-Jul-2021
export const formatTimestamp = (date?: Timestamp) =>
  dayjs.unix(date?.seconds || 0).format("D-MMM-YYYY");

export const formatStock1Y = (seconds: Timestamp["seconds"]) => {
  return dayjs.unix(seconds).format("MMM D YYYY");
};

export const formatStock1M = (seconds: Timestamp["seconds"]) => {
  return dayjs.unix(seconds).format("MMM D");
};

// Fri, Sep 24, 2021 1:00 AM
export const formatTimestampWithMinAndSec = (date: Timestamp) => {
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

// Dic 21, 2021 5:15 PM
export const formatDisplayDate = (seconds: Timestamp["seconds"] = 0) => {
  return dayjs.unix(seconds)?.tz()?.format("MMM D YYYY • h:mm A");
};

export const formatllllCST = (seconds: Timestamp["seconds"]) => {
  return dayjs
    .unix(seconds)
    ?.tz("America/Mexico_City")
    ?.format("MMM D, YYYY h:mm A CST");
};
