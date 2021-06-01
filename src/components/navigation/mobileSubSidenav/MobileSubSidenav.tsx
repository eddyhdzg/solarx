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
import { useBreadcrumbs, useCopywriting } from "hooks";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import { NavLink } from "react-router-dom";
import useStyles from "./mobileSubSidenav.jss";

const IndexPage = () => {
  const classes = useStyles();
  const breadcrumbs = useBreadcrumbs();
  const route = breadcrumbs[0]?.href as TBaseRoutes | undefined;
  const copy = useCopywriting();

  return (
    <div>
      {route &&
        routesTree[route].sections.map(({ subHeader, subRoutes }, index) => {
          return (
            <Fragment key={subHeader}>
              <List>
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
                      <ListItemText primary={copy.router[title]} />
                      <ChevronRightRoundedIcon
                        className={classes.desktopAppbar_icon}
                      />
                    </ListItem>
                  );
                })}
              </List>
              {index < routesTree[route].sections.length - 1 && <Divider />}
            </Fragment>
          );
        })}
    </div>
  );
};

export default IndexPage;
