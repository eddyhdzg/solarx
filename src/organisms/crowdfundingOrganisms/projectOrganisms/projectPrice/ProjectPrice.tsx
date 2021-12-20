import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { formatMoney } from "utils";
import { Counter } from "components";
import RadioButtonGradientChecked from "assets/icons/RadioButtonGradientChecked";
import { Project, ProjectPrice } from "types";
import { formatNumber } from "utils";
import { useSigninCheck } from "reactfire";
import { Link, useLocation, useHistory } from "react-router-dom";
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
} from "./ProjectPrice.styled";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import GroupsIcon from "@mui/icons-material/Groups";
import SellIcon from "@mui/icons-material/Sell";

interface TProjectPriceCardProps
  extends Pick<
    ProjectPrice,
    | "id"
    | "description"
    | "investors"
    | "quantity"
    | "sharesSold"
    | "sharePrice"
    | "unit_amount"
  > {
  onClick: (id: string | undefined) => void;
  expanded: boolean;
  roi: Project["roi"];
}

const ProjectPriceCard = ({
  id,
  description,
  investors = [],
  quantity = 0,
  sharesSold = 0,
  sharePrice = 1,
  unit_amount = 0,
  onClick,
  expanded,
  roi = 0,
}: TProjectPriceCardProps) => {
  const { t } = useTranslation();
  const [shares, setShares] = useState(1);
  const { data: signinResult } = useSigninCheck();
  const { pathname } = useLocation();
  const history = useHistory();

  const handleChangeShares = (num: number) => {
    setShares(shares + num);
  };

  const rest = quantity - sharesSold;
  const disabled = rest <= 0;
  const max = Math.min(rest, 500);
  const error = shares < 1 || shares > max;
  const discount = Math.round((1 - unit_amount / sharePrice) * 100);
  const discountedMoney = (sharePrice - unit_amount) * shares;
  const totalDisplayPrice = unit_amount * shares;
  const newRoi = (sharePrice * roi) / unit_amount;

  return (
    <Accordion
      expanded={expanded}
      onChange={() => onClick(id)}
      disabled={disabled}
    >
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
        expanded={expanded}
      >
        <AccordionSummaryContent>
          <InnerContent>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
              }}
            >
              {formatMoney(unit_amount)}
              {" / "}
              {t("common.share")}
            </Typography>
          </InnerContent>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
            }}
          >
            {description}
          </Typography>
          <Chips>
            <StyledChip
              label={
                discount
                  ? t("pages.crowdfunding.project.limited", { rest, quantity })
                  : t("pages.crowdfunding.project.notlimited", {
                      rest,
                      quantity,
                    })
              }
              variant="yellow"
              icon={<SellIcon />}
              size="small"
            />

            {Boolean(investors.length) && (
              <StyledChip
                label={`${investors.length} Investors`}
                variant="blue"
                icon={<GroupsIcon />}
                size="small"
              />
            )}

            <StyledChip
              label={`ROI ${formatNumber(newRoi)}%`}
              variant="green"
              icon={<SellIcon />}
              size="small"
            />
          </Chips>
        </AccordionSummaryContent>
      </AccordionSummary>
      <StyledAccordionDetails disabled={disabled}>
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
                {t("pages.crowdfunding.project.discount", { discount })}
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
              {formatMoney(totalDisplayPrice)}
            </Typography>
          </Li>
        </Ul>

        <Button
          color="primary"
          variant="contained"
          size="large"
          disabled={!signinResult?.signedIn || rest <= 0}
          fullWidth
          component={Link}
          to={{
            pathname: `${pathname}/checkout`,
            search: `?qty=${shares}&pid=${id}`,
          }}
          onKeyPress={(e: any) => {
            if (e.key === " ") {
              history.push({
                pathname: `${pathname}/checkout`,
                search: `?qty=${shares}&pid=${id}`,
              });
            }
          }}
        >
          {signinResult?.signedIn
            ? t("pages.crowdfunding.project.goToCheckout")
            : t("pages.crowdfunding.project.signInToProceedToPayment")}
        </Button>
      </StyledAccordionDetails>
    </Accordion>
  );
};

export default ProjectPriceCard;
