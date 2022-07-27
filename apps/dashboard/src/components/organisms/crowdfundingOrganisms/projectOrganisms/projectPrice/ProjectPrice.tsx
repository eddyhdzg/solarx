import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { formatMoney } from "utils";
import { Counter } from "components";
import RadioButtonGradientChecked from "assets/icons/RadioButtonGradientChecked";
import { Project, ProjectPrice } from "solarx-types";
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
    | "panelsSold"
    | "basePrice"
    | "unit_amount"
  > {
  onClick: (id: string | undefined) => void;
  expanded: boolean;
  roi: Project["roi"];
}

const ProjectPriceCard = ({
  id,
  description,
  investors,
  quantity = 0,
  panelsSold = 0,
  basePrice = 1,
  unit_amount = 0,
  onClick,
  expanded,
  roi = 0,
}: TProjectPriceCardProps) => {
  const { t } = useTranslation();
  const [panels, setPanels] = useState(1);
  const { data: signinResult } = useSigninCheck();
  const { pathname } = useLocation();
  const history = useHistory();

  const handleChangePanels = (num: number) => {
    setPanels(panels + num);
  };

  const rest = quantity - panelsSold;
  const disabled = rest <= 0;
  const max = Math.min(rest, 500);
  const error = panels < 1 || panels > max;
  const discount = Math.round((1 - unit_amount / basePrice) * 100);
  const discountedMoney = (basePrice - unit_amount) * panels;
  const totalDisplayPrice = unit_amount * panels;
  const newRoi = (basePrice * roi) / unit_amount;

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
              {t("common.panel")}
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

            {Boolean(investors) && (
              <StyledChip
                label={t("pages.admin.project.investorCount", {
                  count: investors,
                })}
                variant="blue"
                icon={<GroupsIcon />}
                size="small"
              />
            )}

            <StyledChip
              label={`ROI ${formatNumber(newRoi)}%`}
              variant="teal"
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
              {t("projects.panels")}
            </Typography>
            <Counter
              panels={panels}
              onChangePanels={handleChangePanels}
              setPanels={setPanels}
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
            search: `?qty=${panels}&pid=${id}`,
          }}
          onKeyPress={(e: any) => {
            if (e.key === " ") {
              history.push({
                pathname: `${pathname}/checkout`,
                search: `?qty=${panels}&pid=${id}`,
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
