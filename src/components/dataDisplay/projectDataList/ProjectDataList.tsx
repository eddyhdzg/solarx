import { useMemo } from "react";
import { SvgIconTypeMap, Typography } from "@material-ui/core";
import InfoTooltip from "../infoTooltip/InfoTooltip";
import useStyles from "./projectDataList.jss";
// Icons
import SellOutlinedIcon from "@material-ui/icons/SellOutlined";
import SavingsOutlinedIcon from "@material-ui/icons/SavingsOutlined";
import GavelRoundedIcon from "@material-ui/icons/GavelRounded";
import StoreIcon from "@material-ui/icons/Store";
import WorkIcon from "@material-ui/icons/Work";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PaidIcon from "@material-ui/icons/Paid";

interface ProjectDataListItem {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text?: string | number;
  caption: string;
  info?: string;
}

export default function ProjectDataList({
  sharePrice = 0,
  ror = 0,
  ppa = 0,
  company,
  businessType,
}: {
  sharePrice?: number;
  ror?: number;
  ppa?: number;
  company?: string;
  businessType?: string;
}) {
  const classes = useStyles();

  const projectDataList1: ProjectDataListItem[] = useMemo(() => {
    return [
      {
        icon: SellOutlinedIcon,
        text: sharePrice,
        caption: "Share Price",
      },
      {
        icon: SavingsOutlinedIcon,
        text: ror,
        caption: "RoR (rate of return)",
      },
      {
        icon: PaidIcon,
        text: "118.66",
        caption: "Monthly revenue",
      },
      {
        icon: InsertChartIcon,
        text: "See Graph",
        caption: "Yearly Return Graph",
      },
      {
        icon: GavelRoundedIcon,
        text: ppa,
        caption: "PPA?",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna risus, pretium in ante id, lacinia hendrerit nisi.",
      },
    ];
  }, [sharePrice, ror, ppa]);

  const projectDataList2: ProjectDataListItem[] = useMemo(() => {
    return [
      {
        icon: SupervisedUserCircleIcon,
        text: "0%",
        caption: "Beneficiary Participation?",
      },
      {
        icon: AccountBalanceWalletIcon,
        text: "0%",
        caption: "SolarX Participation?",
      },
      {
        icon: StoreIcon,
        text: company,
        caption: "Company",
      },
      {
        icon: WorkIcon,
        text: businessType,
        caption: "Business Type",
      },
    ];
  }, [company, businessType]);
  return (
    <>
      <Typography variant="h6" className={classes.projectGeneralInfo_header}>
        General Info
      </Typography>
      <div className={classes.projectGeneralInfo_ulContainer}>
        <div className={classes.projectGeneralInfo_ul}>
          {projectDataList1.map(({ icon: Icon, text, caption, info }) => {
            return (
              <li key={caption} className={classes.projectGeneralInfo_li}>
                <div className={classes.projectGeneralInfo_icon}>
                  <Icon />
                </div>
                <div className={classes.projectGeneralInfo_listText}>
                  <Typography variant="subtitle1">{text}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {caption}
                  </Typography>
                </div>
                {info && (
                  <InfoTooltip
                    title={info}
                    className={classes.projectGeneralInfo_infoTooltip}
                  />
                )}
              </li>
            );
          })}
        </div>
        <div className={classes.projectGeneralInfo_ul}>
          {projectDataList2.map(({ icon: Icon, text, caption }) => {
            return (
              <li key={caption} className={classes.projectGeneralInfo_li}>
                <div className={classes.projectGeneralInfo_icon}>
                  <Icon />
                </div>
                <div className={classes.projectGeneralInfo_listText}>
                  <Typography variant="subtitle1">{text}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {caption}
                  </Typography>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}
