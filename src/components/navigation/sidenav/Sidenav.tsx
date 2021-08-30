import { List, ListItem, ListItemIcon } from "@material-ui/core";
import { Tooltip } from "components";
import { useCopywriting, useRouterTree } from "hooks";
import useStyles from "./sidenav.jss";
import logo from "assets/images/Logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useRouterMemo } from "hooks";
import { TBaseRoutes } from "types";
import shallow from "zustand/shallow";

const Sidenav: React.FC = () => {
  const classes = useStyles();
  const copy = useCopywriting();
  const routerTree = useRouterTree();
  const routes = Object.entries(routerTree);
  const more = [routes.pop()!];
  const { pathname } = useLocation();

  const { routerMemo } = useRouterMemo(
    ({ routerMemo }) => ({ routerMemo }),
    shallow
  );

  const getMemoryRoute = (baseRoute: TBaseRoutes) => {
    if (pathname.includes(baseRoute)) {
      return pathname.substring(0, pathname.lastIndexOf("/")) || baseRoute;
    }
    return routerMemo[baseRoute];
  };

  return (
    <div className={classes.sidenav_root}>
      <div className={classes.sidenav_toolbar}>
        <Link to="/portfolio">
          <img
            src={logo}
            height={24}
            width={24}
            className={classes.sidenav_logo}
            alt="nav-logo"
          />
        </Link>
      </div>
      <div className={classes.sidenav_content}>
        <div>
          <List className={classes.sidenav_ul}>
            {routes.map(([route, { icon: Icon, title }]) => (
              <Tooltip
                key={route}
                title={copy?.router[title]}
                placement="right"
              >
                <ListItem
                  button
                  component={NavLink}
                  to={getMemoryRoute(route as TBaseRoutes)}
                  activeClassName="Mui-selected"
                  className={classes.sidenav_listItem}
                >
                  <ListItemIcon className={classes.sidenav_icon}>
                    {<Icon />}
                  </ListItemIcon>
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </div>
        <div>
          <List>
            {more?.map(([route, { icon: Icon, title }]) => (
              <Tooltip
                key={route}
                title={copy?.router[title]}
                placement="right"
              >
                <ListItem
                  button
                  component={NavLink}
                  to={getMemoryRoute(route as TBaseRoutes)}
                  activeClassName="Mui-selected"
                  className={classes.sidenav_listItem}
                >
                  <ListItemIcon className={classes.sidenav_icon}>
                    {<Icon />}
                  </ListItemIcon>
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
