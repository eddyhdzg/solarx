import { Timestamp } from "firebase/firestore";

export const toTimestamp = (date: Date) => {
  return Timestamp.fromDate(new Date(date));
};
