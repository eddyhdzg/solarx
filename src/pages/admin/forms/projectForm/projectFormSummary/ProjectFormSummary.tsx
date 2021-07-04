import { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import {
  FormState,
  UseFormClearErrors,
  UseFormTrigger,
  UseFormWatch,
} from "react-hook-form";
import { useProjectFormSchema } from "hooks/forms/schema.project";
import { formatPercentage2Dec, formatMoney, formatNumber } from "utils";
import { Button } from "components";
import useStyles from "./projectFormSummary.jss";

interface IProjectFormSummaryProps {
  watch: UseFormWatch<useProjectFormSchema>;
  formState: FormState<useProjectFormSchema>;
  trigger: UseFormTrigger<useProjectFormSchema>;
  clearErrors: UseFormClearErrors<useProjectFormSchema>;
  title: "Edit" | "Create";
}

export default function ProjectFormSummary({
  watch,
  formState: { isValid, errors, touchedFields },
  trigger,
  clearErrors,
  title,
}: IProjectFormSummaryProps) {
  const classes = useStyles();
  const {
    name,
    state,
    city,
    company,
    businessType,
    ror,
    sharePrice,
    totalShares,
    ppa,
  } = watch();

  useEffect(() => {
    trigger().then(() => {
      clearErrors();
    });
  }, [trigger, clearErrors]);

  return (
    <Card className={classes.projectFormSummary_root}>
      <CardContent>
        <Typography variant="h6" className={classes.projectFormSummary_header}>
          {title} Project Summary
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          General
        </Typography>
        <ul className={classes.projectFormSummary_ul}>
          <li>
            <Typography
              variant="body2"
              color={errors.name && touchedFields.name && "error"}
            >
              <strong>Name: </strong>
              {name}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              color={
                errors?.state && touchedFields?.state ? "error" : undefined
              }
            >
              <strong>State: </strong>
              {state?.name}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              color={errors.city && touchedFields.city && "error"}
            >
              <strong>City: </strong>
              {city}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              color={errors.company && touchedFields.company && "error"}
            >
              <strong>Company: </strong>
              {company}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              color={
                errors.businessType && touchedFields.businessType && "error"
              }
            >
              <strong>Business Type: </strong>
              {businessType}
            </Typography>
          </li>
        </ul>

        <Divider className={classes.projectFormSummary_divider} />
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Numeric
        </Typography>
        <ul className={classes.projectFormSummary_ul}>
          <li>
            <Typography
              variant="body2"
              color={errors.ror && touchedFields.ror && "error"}
            >
              <strong>Rate of Return: </strong>
              {typeof ror === "number" && formatPercentage2Dec(ror)}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              color={errors.sharePrice && touchedFields.sharePrice && "error"}
            >
              <strong>Share Price: </strong>
              {typeof sharePrice === "number" && formatMoney(sharePrice)}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              color={errors.totalShares && touchedFields.totalShares && "error"}
            >
              <strong>Total Shares: </strong>
              {typeof totalShares === "number" && formatNumber(totalShares)}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              color={errors.ppa && touchedFields.ppa && "error"}
            >
              <strong>PPA: </strong>
              {typeof ppa === "number" && formatNumber(ppa)}
            </Typography>
          </li>
        </ul>
      </CardContent>
      <CardActions className={classes.projectFormSummary_cardActions}>
        <Button
          size="large"
          variant="contained"
          disabled={!isValid}
          type="submit"
        >
          {title} Project
        </Button>
      </CardActions>
    </Card>
  );
}
