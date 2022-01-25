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
