import { Chip } from "@material-ui/core";
import {
  GridCellParams,
  GridColDef,
  GridValueFormatterParams,
} from "@material-ui/data-grid";
import { Project } from "types";
import { formatNumber } from "utils";

// NEW
export const getPanels = ({ sharesSold, totalShares }: Project) => {
  return `${sharesSold?.toLocaleString()} / ${totalShares?.toLocaleString()}`;
};

export const getProgress = ({ sharesSold, totalShares }: Project) => {
  return `${formatNumber((sharesSold / totalShares) * 100)} %`;
};

// OLD
const formatPanels = (params: GridValueFormatterParams) => {
  const [sold, total] = params.value as [number, number];
  return `${sold?.toLocaleString()} / ${total?.toLocaleString()}`;
};

const sortPanels = (v1: [number, number], v2: [number, number]) => {
  const a = v1[0] / v1[1];
  const b = v2[0] / v2[1];
  return a - b;
};

const renderFunded = (params: GridCellParams) => {
  return params.value ? (
    <Chip color="primary" size="small" label="Funded" />
  ) : (
    " "
  );
};

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", hide: true },
  { field: "name", headerName: "Name", width: 150 },
  { field: "location", headerName: "Location", width: 150 },
  {
    field: "funded",
    headerName: "Funded",
    type: "boolean",
    width: 140,
    renderCell: renderFunded,
  },
  {
    field: "shares",
    headerName: "Shares (funded/total)",
    width: 250,
    type: "number",
    // valueGetter: getPanels,
    valueFormatter: formatPanels,
    // @ts-ignore
    sortComparator: sortPanels,
  },
  {
    field: "progress",
    headerName: "Progress",
    width: 150,
    type: "number",
    // valueGetter: getProgress,
    // valueFormatter: formatProgress,
  },
];

export const rows: Project[] = [
  {
    id: 1,
    name: "Servidima",
    location: "Yucatán",
    funded: false,
    sharePrice: 8000,
    sharesSold: 281,
    totalShares: 1000,
    ror: 17.8,
    img: "https://www.thekickassentrepreneur.com/wp-content/uploads/2019/12/solar-farm-business.jpg",
  },
  {
    id: 2,
    name: "Juan Carlos",
    location: "Chihuahua",
    funded: false,
    sharePrice: 790,
    sharesSold: 8532,
    totalShares: 9000,
    ror: 18.1,
    img: "https://ensia.com/wp-content/uploads/2018/05/Feature_SolarFarms_inline.jpg",
  },
  {
    id: 3,
    name: "Héctor M.",
    location: "Estado de México",
    funded: true,
    sharePrice: 820,
    sharesSold: 747,
    totalShares: 1200,
    ror: 18.0,
    img: "https://s3-prod.rubbernews.com/s3fs-public/NEWS_181209965_AR_-1_RXVAQCDNBWGE.jpg",
  },
  {
    id: 4,
    name: "Jorge V.",
    location: "Jalisco",
    funded: false,
    sharePrice: 4100,
    sharesSold: 500,
    totalShares: 500,
    ror: 18.555,
    img: "https://belectric.com/wp-content/uploads/2019/05/02_BELECTRIC_India_Roof-top-project.jpg",
  },
];

export const tileData = [
  {
    title: "Image1",
    img: "https://reneweconomy.com.au/wp-content/uploads/2020/07/Canva-Commercial-building-factory-rooftop-installed-photovoltaic-solar-panels-1-optimised-1280x720.jpg",
  },
  {
    title: "Image2",
    img: "https://www.solarfeeds.com/mag/wp-content/uploads/2019/08/solar-energy-3297945_1280.jpg",
  },
  {
    title: "Image3",
    img: "https://iaa-network.com/wp-content/uploads/2020/09/Solar-Panel-Arbitration.jpg",
  },
  {
    title: "Image4",
    img: "https://www.hisour.com/wp-content/uploads/2018/09/Nominal-power-in-photovoltaic-1280x720.jpg",
  },
];
