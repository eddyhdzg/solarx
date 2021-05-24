import { List, ListItem, ListItemIcon } from "@material-ui/core";
import { Tooltip } from "components";
import { routes, more } from "constant";
import { useCopywriting } from "hooks";
import useStyles from "./sidenav.jss";
import logo from "assets/images/Logo.svg";
import { Link, NavLink } from "react-router-dom";

const Sidenav: React.FC = () => {
  const classes = useStyles();
  const copy = useCopywriting();

  return (
    <div className={classes.sidenav_root}>
      <div className={classes.sidenav_toolbar}>
        <Link to="/home">
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
            {routes.map(({ route, Icon }) => (
              <Tooltip
                key={route}
                title={copy.routes[route].title}
                placement="right"
              >
                <ListItem
                  button
                  component={NavLink}
                  to={route}
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
            {more.map(({ route, Icon }) => (
              <Tooltip
                key={route}
                title={copy.routes[route].title}
                placement="right"
              >
                <ListItem
                  button
                  component={NavLink}
                  to={route}
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
