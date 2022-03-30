import { useMemo } from "react";
import { UserHistory } from "solarx-types";
import {
  formatMonthAndYear,
  formatDisplayDate,
  formatAbsoluteWithCurreny,
} from "utils";

interface DisplayUserHistory {
  id?: string;
  avatar?: string;
  date?: string;
  description?: string;
  green?: boolean;
  title?: string;
  value?: string;
}

export default function useFormatedUserHistory(userHistory: UserHistory[]) {
  const displayUserHistory = useMemo(() => {
    return userHistory.reduce<Map<string, DisplayUserHistory[]>>(
      (prev, { amount = 0, ...curr }) => {
        const month = formatMonthAndYear(curr.date?.seconds || 0);

        if (!prev.has(month)) {
          prev.set(month, []);
        }

        const transaction: DisplayUserHistory = {
          id: curr?.id,
          avatar: curr?.avatar,
          green: Boolean(amount > 0),
          title: curr.title,
          description: curr.description,
          value: formatAbsoluteWithCurreny(amount, curr.currency),
          date: formatDisplayDate(curr.date?.seconds || 0),
        };

        prev.get(month)?.push(transaction);
        return prev;
      },
      new Map()
    );
  }, [userHistory]);

  return Array.from(displayUserHistory.entries());
}
