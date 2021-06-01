import { FC, Fragment } from "react";
import {
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { routesTree } from "constant";
import { useCopywriting } from "hooks";
import useStyles from "./subSidenav.jss";
import { NavLink } from "react-router-dom";
import { useBreadcrumbs } from "hooks";
import { TBaseRoutes } from "types";

const SubSidenav: FC = () => {
  const classes = useStyles();
  const copy = useCopywriting();
  const breadcrumbs = useBreadcrumbs();
  const route = breadcrumbs[0]?.href as TBaseRoutes | undefined;

  return (
    <>
      {route && (
        <div className={classes.desktopAppbar_subnav}>
          <div className={classes.desktopAppbar_subnavHeader}>
            <Typography variant="h6" className={classes.desktopAppbar_title}>
              {copy.router[route]}
            </Typography>
          </div>
          <Divider />

          <div className={classes.desktopAppbar_lists}>
            {routesTree[route].sections.map(
              ({ subHeader, subRoutes }, index) => {
                return (
                  <Fragment key={subHeader}>
                    <List>
                      <ListSubheader
                        className={classes.desktopAppbar_subheader}
                      >
                        {copy.router[subHeader]}
                      </ListSubheader>

                      {subRoutes.map(({ subRoute, title }) => {
                        return (
                          <ListItem
                            key={subRoute}
                            button
                            component={NavLink}
                            to={route + subRoute}
                            activeClassName="Mui-selected"
                            className={classes.desktopAppbar_listItem}
                          >
                            <ListItemText primary={copy.router[title]} />
                          </ListItem>
                        );
                      })}
                    </List>
                    {index < routesTree[route].sections.length - 1 && (
                      <Divider />
                    )}
                  </Fragment>
                );
              }
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SubSidenav;
