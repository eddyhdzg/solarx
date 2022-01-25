import { useIsAdmin } from "hooks";
import { AdminRoute, CrowdfundingRoute, MoreRoute, WalletMemo } from "router";
import { useTranslation } from "react-i18next";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import WalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import StoreMallDirectoryRounded from "@mui/icons-material/StoreMallDirectoryRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

export type RouterTree = {
  [key: string]: {
    title: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    };
    component(): JSX.Element;
  };
};

const useRouterTree = () => {
  const { isAdmin, status } = useIsAdmin();
  const { t } = useTranslation();

  const routerTree: RouterTree = {
    "/wallet": {
      title: t("router.wallet"),
      icon: WalletRoundedIcon,
      component: WalletMemo,
    },
    "/crowdfunding": {
      title: t("router.crowdfunding"),
      icon: StoreMallDirectoryRounded,
      component: CrowdfundingRoute,
    },
    "/more": {
      title: t("router.more"),
      icon: MoreHorizRoundedIcon,
      component: MoreRoute,
    },
  };

  const adminRouterTree: RouterTree = {
    "/wallet": {
      title: t("router.wallet"),
      icon: WalletRoundedIcon,
      component: WalletMemo,
    },
    "/crowdfunding": {
      title: t("router.crowdfunding"),
      icon: StoreMallDirectoryRounded,
      component: CrowdfundingRoute,
    },
    "/admin": {
      title: t("router.admin"),
      icon: AdminPanelSettingsOutlinedIcon,
      component: AdminRoute,
    },
    "/more": {
      title: t("router.more"),
      icon: MoreHorizRoundedIcon,
      component: MoreRoute,
    },
  };

  return { routerTree: isAdmin ? adminRouterTree : routerTree, status };
};

export default useRouterTree;
