import { useEffect } from "react";
import * as dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
require("dayjs/locale/es");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

const DayjsProvider: React.FC = ({ children }) => {
  useEffect(() => {
    dayjs.extend(timezone);
    dayjs.extend(utc);
    dayjs.extend(localizedFormat);
    dayjs.tz.guess();
    dayjs.locale("es");
  }, []);
  return <>{children}</>;
};

export default DayjsProvider;
