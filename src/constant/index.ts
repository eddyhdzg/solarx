import { Timespan } from "types";
export * from "./mexicanCities.constant";
export * from "./mexicanStates.constant";
export * from "./others.constant";
export * from "./projects.constant";
export * from "./users.constant";

const oneMonthNanoSeconds = 2678400000;
const threeMonthNanoSeconds = 8000000000;
const oneYearNanoSeconds = 31062204000;

export const nanosecondsHash: {
  [key in Timespan]: number;
} = {
  "1M": oneMonthNanoSeconds,
  "3M": threeMonthNanoSeconds,
  "1Y": oneYearNanoSeconds,
  H: Infinity,
};

export const demoWalletData: {
  Stocks: number;
  Cash: number;
  "SolarX Points": number;
  nanoseconds: number;
}[] = [
  {
    Stocks: 0,
    Cash: 0,
    "SolarX Points": 1000,
    nanoseconds: 1594962000000,
  },
  {
    Stocks: 0,
    Cash: 1000,
    "SolarX Points": 1000,
    nanoseconds: 1614578400000,
  },
  {
    Stocks: 10200,
    Cash: 411.22,
    "SolarX Points": 0,
    nanoseconds: 1617256800000,
  },
  {
    Stocks: 10200,
    Cash: 841.87,
    "SolarX Points": 0,
    nanoseconds: 1619845200000,
  },
  {
    Stocks: 10200,
    Cash: 1291.11,
    "SolarX Points": 0,
    nanoseconds: 1622523600000,
  },
  {
    Stocks: 10200,
    Cash: 1803.7,
    "SolarX Points": 0,
    nanoseconds: 1625115600000,
  },
  {
    Stocks: 10200,
    Cash: 2219.45,
    "SolarX Points": 0,
    nanoseconds: 1627794000000, // AGO 1
  },
  {
    Stocks: 10200,
    Cash: 2613.18,
    "SolarX Points": 200,
    nanoseconds: 1630472400000, // SEP 1
  },
  {
    Stocks: 10200,
    Cash: 10013.18,
    "SolarX Points": 200,
    nanoseconds: 1631768400000, // SEP 16
  },
  {
    Stocks: 10200,
    Cash: 5013.18,
    "SolarX Points": 200,
    nanoseconds: 1631854800000, // SEP 17
  },
  {
    Stocks: 10200,
    Cash: 3043.96,
    "SolarX Points": 200,
    nanoseconds: 1633064400000, // OCT 1
  },
  {
    Stocks: 10200,
    Cash: 3192.07,
    "SolarX Points": 200,
    nanoseconds: 1633064400000, // OCT 1
  },
  {
    Stocks: 10200,
    Cash: 2992.07,
    "SolarX Points": 200,
    nanoseconds: 1633323600000, // OCT 4
  },
  {
    Stocks: 10200,
    Cash: 4992.07,
    "SolarX Points": 200,
    nanoseconds: 1633842000000, // OCT 10
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
        title: "Deposit ",
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

export type CurrencyType = "stocks" | "solarX points";
export type TransactionKey = CurrencyType | "nanoseconds";

export const demoTransactions2: {
  [key in TransactionKey]: number;
}[] = [
  {
    stocks: 0,
    "solarX points": 1000,
    nanoseconds: 1594962000000,
  },
  {
    stocks: 0,
    "solarX points": 1000,
    nanoseconds: 1614578400000,
  },
  {
    stocks: 10200,
    "solarX points": 0,
    nanoseconds: 1617256800000,
  },
  {
    stocks: 10200,
    "solarX points": 0,
    nanoseconds: 1619845200000,
  },
  {
    stocks: 10200,
    "solarX points": 0,
    nanoseconds: 1622523600000,
  },
  {
    stocks: 10200,
    "solarX points": 0,
    nanoseconds: 1625115600000,
  },
  {
    stocks: 10200,
    "solarX points": 0,
    nanoseconds: 1627794000000, // AGO 1
  },
  {
    stocks: 10200,
    "solarX points": 200,
    nanoseconds: 1630472400000, // SEP 1
  },
  {
    stocks: 10200,
    "solarX points": 200,
    nanoseconds: 1631768400000, // SEP 16
  },
  {
    stocks: 10200,
    "solarX points": 200,
    nanoseconds: 1631854800000, // SEP 17
  },
  {
    stocks: 10200,
    "solarX points": 200,
    nanoseconds: 1633064400000, // OCT 1
  },
  {
    stocks: 10200,
    "solarX points": 200,
    nanoseconds: 1633064400000, // OCT 1
  },
  {
    stocks: 10200,
    "solarX points": 200,
    nanoseconds: 1633323600000, // OCT 4
  },
  {
    stocks: 10200,
    "solarX points": 200,
    nanoseconds: 1633842000000, // OCT 10
  },
];
