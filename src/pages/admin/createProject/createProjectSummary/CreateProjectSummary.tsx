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
import { useCreateProjectFormSchema } from "hooks/forms/useCreateProjectForm";
import { formatPercentage2Dec, formatMoney, formatNumber } from "utils";
import { Button } from "components";
import useStyles from "./createProjectSummary.jss";

interface ICreateProjectFormProps {
  watch: UseFormWatch<useCreateProjectFormSchema>;
  formState: FormState<useCreateProjectFormSchema>;
  trigger: UseFormTrigger<useCreateProjectFormSchema>;
  clearErrors: UseFormClearErrors<useCreateProjectFormSchema>;
}

export default function CreateProjectSummary({
  watch,
  formState: { isValid, errors, touchedFields },
  trigger,
  clearErrors,
}: ICreateProjectFormProps) {
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
    <Card className={classes.createProjectSummary_root}>
      <CardContent>
        <Typography
          variant="h6"
          className={classes.createProjectSummary_header}
        >
          Project Summary
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          General
        </Typography>
        <ul className={classes.createProjectSummary_ul}>
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

        <Divider className={classes.createProjectSummary_divider} />
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Numeric
        </Typography>
        <ul className={classes.createProjectSummary_ul}>
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
      <CardActions className={classes.createProjectSummary_cardActions}>
        <Button
          size="large"
          variant="contained"
          disabled={!isValid}
          type="submit"
        >
          Create Project
        </Button>
      </CardActions>
    </Card>
  );
}
