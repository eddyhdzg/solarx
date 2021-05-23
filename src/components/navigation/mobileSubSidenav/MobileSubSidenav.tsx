import { Fragment } from "react";
import {
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { routesTree } from "constant";
import { TBaseRoutes } from "types";
import { useBreadcrumbs } from "hooks";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "types";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopAppbar_subheader: {
      lineHeight: "unset",
      paddingTop: "8px",
      paddingBottom: "8px",
      fontSize: "0.75rem",
      color: theme.palette.text.hint,
      backgroundColor: theme.palette.background.default,
    },
    desktopAppbar_listItem: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    desktopAppbar_icon: {
      color: theme.palette.text.hint,
    },
  })
);

const IndexPage = () => {
  const classes = useStyles();
  const breadcrumbs = useBreadcrumbs();
  const route = breadcrumbs[0]?.href as TBaseRoutes | undefined;

  return (
    <div>
      {route &&
        routesTree[route].map(({ subHeader, subRoutes }, index) => {
          return (
            <Fragment key={subHeader}>
              <List key={subHeader}>
                <ListSubheader className={classes.desktopAppbar_subheader}>
                  {subHeader}
                </ListSubheader>

                {subRoutes.map(({ subRoute, title }) => {
                  return (
                    <ListItem
                      key={route}
                      button
                      component={NavLink}
                      to={route + subRoute}
                      activeClassName="Mui-selected"
                      className={classes.desktopAppbar_listItem}
                    >
                      <ListItemText primary={title} />
                      <ChevronRightRoundedIcon
                        className={classes.desktopAppbar_icon}
                      />
                    </ListItem>
                  );
                })}
              </List>
              {index < routesTree[route].length - 1 && <Divider />}
            </Fragment>
          );
        })}
    </div>
  );
};

export default IndexPage;
