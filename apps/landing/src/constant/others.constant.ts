import { SvgIcon } from "@mui/material";
import { Locales } from "solarx-types";
// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const localeOptions: Locales[] = ["en", "es"];

export const socialMediaLinks: {
  ariaLabel: string;
  Component: typeof SvgIcon;
  disabled?: boolean;
  href?: string;
}[] = [
  {
    ariaLabel: "facebook",
    Component: FacebookIcon,
    disabled: true,
  },
  {
    ariaLabel: "instagram",
    Component: InstagramIcon,
    href: "https://www.instagram.com/solarx.app",
  },
  {
    ariaLabel: "twitter",
    Component: TwitterIcon,
    href: "https://twitter.com/solarx_app",
  },
  {
    ariaLabel: "youtube",
    Component: YouTubeIcon,
    disabled: true,
  },
  {
    ariaLabel: "linkedin",
    Component: LinkedInIcon,
    disabled: true,
  },
];
