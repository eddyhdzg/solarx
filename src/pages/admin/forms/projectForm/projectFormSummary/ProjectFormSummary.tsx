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
  formState: { isValid, errors, dirtyFields, isDirty, touchedFields },
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
    softDelete,
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
              className={
                dirtyFields.name
                  ? errors.name
                    ? classes.projectFormSummary_error
                    : classes.projectFormSummary_success
                  : undefined
              }
            >
              <strong>Name: </strong>
              {name}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              className={
                dirtyFields.state
                  ? errors.state
                    ? classes.projectFormSummary_error
                    : classes.projectFormSummary_success
                  : undefined
              }
            >
              <strong>State: </strong>
              {state?.name}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              className={
                touchedFields.city && dirtyFields.city
                  ? errors.city
                    ? classes.projectFormSummary_error
                    : classes.projectFormSummary_success
                  : undefined
              }
            >
              <strong>City: </strong>
              {city}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              className={
                dirtyFields.company
                  ? errors.company
                    ? classes.projectFormSummary_error
                    : classes.projectFormSummary_success
                  : undefined
              }
            >
              <strong>Company: </strong>
              {company}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              className={
                dirtyFields.businessType
                  ? errors.businessType
                    ? classes.projectFormSummary_error
                    : classes.projectFormSummary_success
                  : undefined
              }
            >
              <strong>Business Type: </strong>
              {businessType}
            </Typography>
          </li>
          {title === "Edit" && (
            <li>
              <Typography
                variant="body2"
                className={
                  dirtyFields.softDelete
                    ? errors.softDelete
                      ? classes.projectFormSummary_error
                      : classes.projectFormSummary_success
                    : undefined
                }
              >
                <strong>Soft Delete: </strong>
                {softDelete?.toString()}
              </Typography>
            </li>
          )}
        </ul>

        <Divider className={classes.projectFormSummary_divider} />
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Numeric
        </Typography>
        <ul className={classes.projectFormSummary_ul}>
          <li>
            <Typography
              variant="body2"
              className={
                dirtyFields.ror
                  ? errors.ror
                    ? classes.projectFormSummary_error
                    : classes.projectFormSummary_success
                  : undefined
              }
            >
              <strong>Rate of Return: </strong>
              {typeof ror === "number" && formatPercentage2Dec(ror)}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              className={
                dirtyFields.sharePrice
                  ? errors.sharePrice
                    ? classes.projectFormSummary_error
                    : classes.projectFormSummary_success
                  : undefined
              }
            >
              <strong>Share Price: </strong>
              {typeof sharePrice === "number" && formatMoney(sharePrice)}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              className={
                dirtyFields.totalShares
                  ? errors.totalShares
                    ? classes.projectFormSummary_error
                    : classes.projectFormSummary_success
                  : undefined
              }
            >
              <strong>Total Shares: </strong>
              {typeof totalShares === "number" && formatNumber(totalShares)}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              className={
                dirtyFields.ppa
                  ? errors.ppa
                    ? classes.projectFormSummary_error
                    : classes.projectFormSummary_success
                  : undefined
              }
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
          disabled={!isValid || !isDirty}
          type="submit"
        >
          {title} Project
        </Button>
      </CardActions>
    </Card>
  );
}
