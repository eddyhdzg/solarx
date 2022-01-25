import { useMemo } from "react";
import { UserHistory } from "solarx-types";
import {
  formatMonthAndYear,
  toColor,
  formatllll,
  formatHistoryValue,
} from "utils";

interface DisplayUserHistory {
  color?: "red" | "green";
  title?: string;
  description?: string;
  value?: string;
  date?: string;
}

export default function useDisplayUserHistory(userHistory: UserHistory[]) {
  const displayUserHistory = useMemo(() => {
    return userHistory.reduce<Map<string, DisplayUserHistory[]>>(
      (prev, curr) => {
        const month = formatMonthAndYear(curr.date?.seconds || 0);

        if (!prev.has(month)) {
          prev.set(month, []);
        }

        const transaction: DisplayUserHistory = {
          color: toColor(Number(curr.amount)),
          title: curr.title,
          description: curr.description,
          value: formatHistoryValue(curr.amount, curr.currency),
          date: formatllll(curr.date?.seconds || 0),
        };

        prev.get(month)?.push(transaction);
        return prev;
      },
      new Map()
    );
  }, [userHistory]);

  return Array.from(displayUserHistory.entries());
}
