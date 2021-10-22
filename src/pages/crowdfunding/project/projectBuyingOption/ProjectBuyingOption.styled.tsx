import {
  styled,
  Accordion as MuiAccordion,
  accordionClasses,
  AccordionSummary as MuiAccordionSummary,
  accordionSummaryClasses,
  AccordionProps,
  Chip,
  AccordionDetails,
} from "@mui/material";

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters {...props} />
))(({ theme, expanded }) => ({
  [`&.${accordionClasses.root}`]: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: theme.custom.elevation[2],
    boxShadow: theme.shadows[8],
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.grey[800],
    borderRadius: theme.spacing(1),
    "&:not(:last-child)": {
      marginBottom: theme.spacing(4),
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    ...(expanded && {
      borderWidth: 2,
      borderColor: "transparent",
      overflow: "visible",
      position: "relative",
      backgroundClip: "padding-box",
      "& > ::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: "-1",
        margin: "-2px",
        borderRadius: theme.spacing(1),
        background: theme.custom.gradient,
      },
    }),
  },
}));

export const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: theme.spacing(3),
  alignItems: "flex-start",
  [`& .${accordionSummaryClasses.content}`]: {
    margin: theme.spacing(0),
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    position: "absolute",
    right: "24px",
    top: "24px",
  },
}));

export const AccordionSummaryContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingLeft: 0,
  flexGrow: 1,
}));

export const InnerContent = styled("div")(({ theme }) => ({
  paddingRight: theme.spacing(4),
}));

export const Chips = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

export const StyledChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(2, 1),
  margin: theme.spacing(0.5),
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  borderEndEndRadius: theme.spacing(1),
  borderEndStartRadius: theme.spacing(1),
  backgroundImage: theme.custom.elevation[1],
  padding: theme.spacing(3),
  flexDirection: "column",
  alignItems: "stretch",
}));

export const Ul = styled("ul")(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const Li = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textTransform: "capitalize",
  flexWrap: "wrap",
  "&:not(:last-child)": {
    marginBottom: theme.spacing(2),
  },
}));
