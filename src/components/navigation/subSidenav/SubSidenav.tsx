import { FC, Fragment } from "react";
import {
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { routesTree } from "constant";
import { useCopywriting } from "hooks";
import useStyles from "./subSidenav.jss";
import { NavLink } from "react-router-dom";
import { useBreadcrumbs } from "hooks";
import { Routes } from "types";

const SubSidenav: FC = () => {
  const classes = useStyles();
  const copy = useCopywriting();
  const breadcrumbs = useBreadcrumbs();
  const route = breadcrumbs[0]?.breadcrumb as Routes | undefined;

  const title = () => {
    if (!route) return "Error";
    return copy.routes[route].title;
  };

  return (
    <>
      {route && (
        <div className={classes.desktopAppbar_subnav}>
          <div className={classes.desktopAppbar_subnavHeader}>
            <h2 className={classes.desktopAppbar_title}>{title()}</h2>
          </div>
          <Divider />

          <div className={classes.desktopAppbar_lists}>
            {routesTree[route].map(({ subHeader, subRoutes }, index) => {
              return (
                <Fragment key={subHeader}>
                  <List key={subHeader}>
                    <ListSubheader className={classes.desktopAppbar_subheader}>
                      {subHeader}
                    </ListSubheader>

                    {subRoutes.map(({ subRoute, title }) => {
                      return (
                        <ListItem
                          key={subRoute}
                          button
                          component={NavLink}
                          to={"/" + route + "/" + subRoute}
                          activeClassName="Mui-selected"
                          className={classes.desktopAppbar_listItem}
                        >
                          <ListItemText primary={title} />
                        </ListItem>
                      );
                    })}
                  </List>
                  {index < routesTree[route].length - 1 && <Divider />}
                </Fragment>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SubSidenav;
