import { useMemo } from "react";
import { InvestorHistory } from "solarx-types";
import {
  formatMonthAndYear,
  toColor,
  toDot,
  formatllll,
  formatHistoryValue,
} from "utils";

interface DisplayInvestorHistory {
  color?: "red" | "teal";
  dot?: "red" | "cash";
  title?: string;
  description?: string;
  value?: string;
  date?: string;
}

export default function useDisplayInvestorHistory(
  investorHistory: InvestorHistory[]
) {
  const displayInvestorHistory = useMemo(() => {
    return investorHistory.reduce<Map<string, DisplayInvestorHistory[]>>(
      (prev, curr) => {
        const month = formatMonthAndYear(curr.date?.seconds || 0);

        if (!prev.has(month)) {
          prev.set(month, []);
        }

        const transaction: DisplayInvestorHistory = {
          color: toColor(Number(curr.amount)),
          dot: toDot(Number(curr.amount)),
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
  }, [investorHistory]);

  return Array.from(displayInvestorHistory.entries());
}
