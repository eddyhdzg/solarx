import { Timestamp } from "firebase/firestore";

export const toTimestamp = (date: Date) => {
  return Timestamp.fromDate(new Date(date));
};

// https://stackoverflow.com/a/66292255
export const getFirebseTime = (date?: Timestamp) => {
  return (date?.seconds || 0) * 1000 + (date?.nanoseconds || 0) / 1000000;
};
