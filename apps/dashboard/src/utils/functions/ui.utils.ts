import { formatUnits, formatUnitsWithDecimals } from "./format.utils";

export const toColor = (n: number) => {
  if (n < 0) return "red";
  if (n > 0) return "green";
  return undefined;
};

export const formatHistoryValue = (amount: number = 0, currency?: string) => {
  if (amount > 0) return `+${formatUnits(amount)} ${currency?.toUpperCase()}`;
  if (amount < 0)
    return `${formatUnits(amount).toLocaleString()} ${currency?.toUpperCase()}`;
  return `0 ${currency?.toUpperCase()}`;
};

export const formatAbsoluteWithCurreny = (
  amount: number = 0,
  currency?: string
) => {
  return `$${formatUnitsWithDecimals(
    Math.abs(amount)
  )} ${currency?.toUpperCase()}`;
};
