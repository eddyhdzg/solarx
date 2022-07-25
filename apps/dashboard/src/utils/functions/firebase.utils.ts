import { Timestamp } from "firebase/firestore";

export const toTimestamp = (date: Date) => {
  return Timestamp.fromDate(new Date(date));
};

// https://stackoverflow.com/a/66292255
export const getFirebseTime = (date?: Timestamp) => {
  const seconds = date?.seconds || 0;
  const nanoseconds = date?.nanoseconds || 0;
  return seconds * 1000 + nanoseconds / 1000000;
};
