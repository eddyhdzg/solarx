import { NavLink } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon } from "@material-ui/core";
import { TBaseRoutes } from "types";
import { RouterTree } from "hooks/router/useRouterTree";
import { useCopywriting } from "hooks";
import { Tooltip } from "components";
import useStyles from "./desktopAppbar.jss";

import logo from "assets/images/Logo.svg";

interface IDesktopAppbarProps {
  routerTree: RouterTree;
  getMemoryRoute: (baseRoute: TBaseRoutes) => string;
}

const DesktopAppbar: React.FC<IDesktopAppbarProps> = ({
  routerTree,
  getMemoryRoute,
}: IDesktopAppbarProps) => {
  const classes = useStyles();
  const copy = useCopywriting();
  const routes = Object.entries(routerTree);
  const more = [routes.pop()!];

  return (
    <Drawer
      variant="permanent"
      className={classes.desktopAppbar_root}
      classes={{
        paper: classes.desktopAppbar_root,
      }}
      elevation={3}
    >
      <div className={classes.desktopAppbar_toolbar} />
      <div className={classes.desktopAppbar_content}>
        <div>
          <List className={classes.desktopAppbar_ul}>
            <ListItem
              button
              component={NavLink}
              to="/crowdfunding"
              className={classes.desktopAppbar_listItem}
            >
              <ListItemIcon className={classes.desktopAppbar_icon}>
                <img src={logo} height={24} width={24} alt="nav-logo" />
              </ListItemIcon>
            </ListItem>
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
                  className={classes.desktopAppbar_listItem}
                >
                  <ListItemIcon className={classes.desktopAppbar_icon}>
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
                  className={classes.desktopAppbar_listItem}
                >
                  <ListItemIcon className={classes.desktopAppbar_icon}>
                    {<Icon />}
                  </ListItemIcon>
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </div>
      </div>
    </Drawer>
  );
};

export default DesktopAppbar;
