import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { formatMoney } from "utils";
import { useSigninCheck } from "reactfire";
import { Counter } from "components";
import {
  Accordion,
  AccordionSummary,
  AccordionSummaryContent,
  Chips,
  StyledChip,
  InnerContent,
  StyledAccordionDetails,
  Ul,
  Li,
} from "./ProjectBuyingOption.styled";
import RadioButtonGradientChecked from "assets/icons/RadioButtonGradientChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import GroupsIcon from "@mui/icons-material/Groups";
import SellIcon from "@mui/icons-material/Sell";
import { BuyingOption, Project } from "types";
import { formatNumber } from "utils";

interface TProjectBuyingOptionProps
  extends Pick<
    BuyingOption,
    | "id"
    | "description"
    | "discount"
    | "investors"
    | "quantity"
    | "sharesSold"
    | "subtitle"
    | "title"
  > {
  onClick: (id: string | undefined) => void;
  expanded: boolean;
  roi: Project["roi"];
}

export default function ProjectBuyingOption({
  id,
  description,
  discount = 0,
  investors = 0,
  quantity = 0,
  sharesSold = 0,
  subtitle,
  title,
  onClick,
  expanded,
  roi = 0,
}: TProjectBuyingOptionProps) {
  const { t } = useTranslation();
  const { data: signinResult } = useSigninCheck();
  const [shares, setShares] = useState(1);

  const handleChangeShares = (num: number) => {
    setShares(shares + num);
  };

  const sharePrice = 1000;
  const max = Math.min(quantity - sharesSold, 500);
  const error = shares < 1 || shares > max;
  const rest = quantity - sharesSold;
  const newSharePrice = sharePrice - (sharePrice * discount) / 100;
  const discountedMoney = (shares * sharePrice * discount) / 100;
  const price = newSharePrice * shares;
  const newRoi = (sharePrice * roi) / newSharePrice;

  return (
    <Accordion expanded={expanded} onChange={() => onClick(id)}>
      <AccordionSummary
        expandIcon={
          expanded ? (
            <RadioButtonGradientChecked />
          ) : (
            <RadioButtonUncheckedIcon color="disabled" />
          )
        }
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{
          pointerEvents: expanded ? "none" : undefined,
          userSelect: "text",
        }}
      >
        <AccordionSummaryContent>
          <InnerContent>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              component="p"
              sx={{
                marginBottom: 3,
              }}
            >
              {subtitle}
            </Typography>
          </InnerContent>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
            }}
          >
            {description}
          </Typography>
          <Chips>
            {Boolean(investors) && (
              <StyledChip
                label={`${investors} investors`}
                variant="yellow"
                icon={<GroupsIcon />}
                size="small"
              />
            )}
            <StyledChip
              label={
                discount
                  ? `Limited (${rest} left of ${quantity})`
                  : `${quantity} left`
              }
              variant="blue"
              icon={<SellIcon />}
              size="small"
            />
            <StyledChip
              label={`ROI ${formatNumber(newRoi)}%`}
              variant="green"
              icon={<SellIcon />}
              size="small"
            />
          </Chips>
        </AccordionSummaryContent>
      </AccordionSummary>
      <StyledAccordionDetails>
        <Ul>
          <Li>
            <Typography variant="body2" color="textSecondary">
              {t("projects.shares")}
            </Typography>
            <Counter
              shares={shares}
              onChangeShares={handleChangeShares}
              setShares={setShares}
              error={error}
              max={max}
            />
          </Li>
          {Boolean(discount) && (
            <Li>
              <Typography
                variant="body2"
                sx={{
                  color: "success.main",
                }}
              >
                {`Discount ${discount}%`}
              </Typography>
              <Typography
                variant="subtitle1"
                noWrap
                sx={{
                  color: "success.main",
                }}
              >
                {formatMoney(discountedMoney)}
              </Typography>
            </Li>
          )}
          <Li>
            <Typography variant="body2" color="textSecondary">
              {t("pages.crowdfunding.project.price")}
            </Typography>
            <Typography variant="subtitle1" noWrap>
              {formatMoney(price)}
            </Typography>
          </Li>
        </Ul>

        <Button
          color="primary"
          variant="contained"
          size="large"
          disabled={!signinResult?.signedIn}
          fullWidth
        >
          {signinResult?.signedIn
            ? t("pages.crowdfunding.project.goToCheckout")
            : t("pages.crowdfunding.project.signInToProceedToPayment")}
        </Button>
      </StyledAccordionDetails>
    </Accordion>
  );
}
