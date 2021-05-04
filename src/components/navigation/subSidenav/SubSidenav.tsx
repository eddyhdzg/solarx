import { FC, Fragment } from "react";
import {
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { routesTree } from "constant";
import { Query } from "types";
import { useCopywriting } from "hooks";
import useStyles from "./subSidenav.jss";

const SubSidenav: FC = () => {
  const classes = useStyles();
  // const { query, push, isReady } = useRouter();
  // const { section, subSection } = query as Query;
  const copy = useCopywriting();

  const title = () => {
    // if (!isReady) return "Loading...";
    // if (!section) return "Error";
    // return copy.routes[section].title;
    return "Loading...";
  };

  const handleClick = (subSection: string) => {
    // push({
    //   pathname: "/[section]/[subSection]",
    //   query: { section, subSection },
    // });
  };

  return (
    <div className={classes.desktopAppbar_subnav}>
      <div className={classes.desktopAppbar_subnavHeader}>
        <h2 className={classes.desktopAppbar_title}>{title()}</h2>
      </div>
      <Divider />

      <div className={classes.desktopAppbar_lists}>
        {/* {section &&
          section in routesTree &&
          routesTree[section].map(({ subHeader, subRoutes }, index) => {
            return (
              <Fragment key={subHeader}>
                <List key={subHeader}>
                  <ListSubheader className={classes.desktopAppbar_subheader}>
                    {subHeader}
                  </ListSubheader>

                  {subRoutes.map(({ route, title }) => {
                    return (
                      <ListItem
                        key={route}
                        button
                        className={classes.desktopAppbar_listItem}
                        selected={subSection === route}
                        onClick={() => handleClick(route)}
                      >
                        <ListItemText primary={title} />
                      </ListItem>
                    );
                  })}
                </List>
                {index < routesTree[section].length - 1 && <Divider />}
              </Fragment>
            );
          })} */}
      </div>
    </div>
  );
};

export default SubSidenav;
