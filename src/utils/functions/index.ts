export const convertBreadcrumb = (string: string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü");
};

// 1000 => 1,000
// 1000.505 => 1,000.51
export const formatNumber = (num: number) => {
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

// 1000 => 1,000 MXN
export const formatMoney = (num: number) => {
  return `$${num.toLocaleString(undefined, { maximumFractionDigits: 2 })} MXN`;
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
