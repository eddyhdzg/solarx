export const convertBreadcrumb = (string: string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü");
};

export const formatNumber = (num: number) => {
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export const formatMoney = (num: number) => {
  return `$${num.toLocaleString(undefined, { maximumFractionDigits: 2 })} MXN`;
};

export const formatPercentage = (num: number) => {
  return `$${num.toLocaleString(undefined, { maximumFractionDigits: 2 })}%`;
};
