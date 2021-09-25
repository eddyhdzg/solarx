export * from "./mexicanCities.constant";
export * from "./mexicanStates.constant";
export * from "./others.constant";
export * from "./projects.constant";
export * from "./users.constant";

// Erase later
export const demoWalletData: {
  name: string;
  Stocks: number;
  Cash: number;
}[] = [
  {
    name: "Oct. 2010",
    Stocks: 0,
    Cash: 0,
  },
  {
    name: "Jan. 2020",
    Stocks: 10200,
    Cash: 411.22,
  },
  {
    name: "Apr. 2020",
    Stocks: 10200,
    Cash: 841.87,
  },
  {
    name: "Jul. 2020",
    Stocks: 10200,
    Cash: 1291.11,
  },
  {
    name: "Oct. 2020",
    Stocks: 10200,
    Cash: 1803.7,
  },
  {
    name: "Jan. 2021",
    Stocks: 10200,
    Cash: 2219.45,
  },
  {
    name: "Apr. 2021",
    Stocks: 10200,
    Cash: 2613.18,
  },
  {
    name: "Jul 2021",
    Stocks: 10200,
    Cash: 3043.96,
  },
];

export const demoTransactions: {
  month: string;
  transactions: {
    color: "red" | "deposit";
    title: string;
    description: string;
    value: string;
    date: string;
  }[];
}[] = [
  {
    month: "October 2021",
    transactions: [
      {
        color: "deposit",
        title: "Deposit",
        description: "Cash added to wallet",
        value: "+ 2,000 MXN",
        date: "Oct 10, 2021 - 17:23 CT",
      },
      {
        color: "red",
        title: "Adquisition",
        description: "Bought 1 share from GE Apodaca",
        value: "- 200 MXN",
        date: "Oct 4, 2021 - 11:12",
      },
      {
        color: "deposit",
        title: "Monthly revenue",
        description: "Investment cap payment of Sep.",
        value: "+ 148.11 MXN",
        date: "Oct 1, 2021 - 8:30",
      },
    ],
  },
  {
    month: "September 2021",
    transactions: [
      {
        color: "red",
        title: "Withdraw",
        description: "Withdraw to Eddy HeyBanco",
        value: "-5,000 MXN",
        date: "Sep 17, 2021 - 20.11",
      },
      {
        color: "red",
        title: "Adquisition",
        description: "Bought 4 share from AMHSA",
        value: "- 8,000 MXN",
        date: "Sep 16, 2021 - 9:15",
      },
    ],
  },
];
