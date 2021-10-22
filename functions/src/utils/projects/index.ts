export const funCalcMoney = (
  sharePrice: number = 1,
  quantity: number = 1,
  discount: number = 1
) => Math.floor(sharePrice * quantity * (discount / 100));
