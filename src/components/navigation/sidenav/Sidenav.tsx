import { List, ListItem, ListItemIcon } from "@material-ui/core";
import { Tooltip } from "components";
import { routes, more } from "constant";
import { useCopywriting } from "hooks";
import useStyles from "./sidenav.jss";
// import Image from "next/image";

const Sidenav: React.FC = () => {
  const classes = useStyles();
  // const { query, push } = useRouter();
  // const { section } = query;
  const copy = useCopywriting();

  const handleClick = (section: string) => {
    // push({
    //   pathname: "/[section]",
    //   query: { section },
    // });
  };

  return (
    <div className={classes.sidenav_root}>
      <div className={classes.sidenav_toolbar}>
        {/* <Image
          src="/images/logo.svg"
          height={24}
          width={24}
          onClick={() => handleClick("home")}
          className={classes.sidenav_logo}
        /> */}
      </div>
      <div className={classes.sidenav_content}>
        <div>
          <List>
            {routes.map(({ route, Icon }) => (
              <Tooltip
                key={route}
                title={copy.routes[route].title}
                placement="right"
              >
                <ListItem
                  button
                  selected={"home" === route}
                  onClick={() => handleClick(route)}
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
                  selected={"more" === route}
                  onClick={() => handleClick(route)}
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
