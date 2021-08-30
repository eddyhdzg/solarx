import { Fragment } from "react";
import {
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { TBaseRoutes } from "types";
import { useBreadcrumbs, useCopywriting, useRouterTree } from "hooks";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import { NavLink } from "react-router-dom";
import useStyles from "./mobileSubSidenav.jss";

export default function MobileSubSidenav() {
  const classes = useStyles();
  const breadcrumbs = useBreadcrumbs();
  const route = breadcrumbs[0]?.href as TBaseRoutes | undefined;
  const copy = useCopywriting();
  const routerTree = useRouterTree();

  return (
    <div className={classes.mobileSubSidenav_root}>
      {route &&
        routerTree[route]?.sections?.map(({ subHeader, subRoutes }, index) => {
          return (
            <Fragment key={subHeader}>
              <List>
                <ListSubheader className={classes.mobileSubSidenav_subheader}>
                  {copy?.router[subHeader]}
                </ListSubheader>

                {subRoutes.map(({ subRoute, title }) => {
                  return (
                    <ListItem
                      key={subRoute}
                      button
                      component={NavLink}
                      to={route + subRoute}
                      activeClassName="Mui-selected"
                      className={classes.mobileSubSidenav_listItem}
                    >
                      <ListItemText primary={copy?.router[title]} />
                      <ChevronRightRoundedIcon
                        className={classes.mobileSubSidenav_icon}
                      />
                    </ListItem>
                  );
                })}
              </List>
              {index < routerTree[route]?.sections?.length - 1 && <Divider />}
            </Fragment>
          );
        })}
    </div>
  );
}
