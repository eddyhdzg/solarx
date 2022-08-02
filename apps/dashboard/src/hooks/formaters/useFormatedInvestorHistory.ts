import { useMemo } from "react";
import { InvestorHistory } from "solarx-types";
import {
  formatMonthAndYear,
  formatDisplayDate,
  formatAbsoluteWithCurreny,
} from "utils";

interface DisplayInvestorHistory {
  id?: string;
  avatar?: string;
  date?: string;
  description?: string;
  green?: boolean;
  title?: string;
  value?: string;
}

export default function useFormatedInvestorHistory(
  investorHistory: InvestorHistory[]
) {
  const displayInvestorHistory = useMemo(() => {
    return investorHistory.reduce<Map<string, DisplayInvestorHistory[]>>(
      (prev, { amount = 0, ...curr }) => {
        const month = formatMonthAndYear(curr.date?.seconds || 0);

        if (!prev.has(month)) {
          prev.set(month, []);
        }

        const transaction: DisplayInvestorHistory = {
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
  }, [investorHistory]);

  return Array.from(displayInvestorHistory.entries());
}
