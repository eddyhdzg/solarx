import { Fragment } from "react";
// import { useRouter } from "next/router";
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
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "types";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";

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
  // const { query, push } = useRouter();
  // const { section, subSection } = query as Query;

  const handleClick = (subSection: string) => {
    // push({
    //   pathname: "/[section]/[subSection]",
    //   query: { section, subSection },
    // });
  };

  return (
    <div>
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
                      <ChevronRightRoundedIcon
                        className={classes.desktopAppbar_icon}
                      />
                    </ListItem>
                  );
                })}
              </List>
              {index < routesTree[section].length - 1 && <Divider />}
            </Fragment>
          );
        })} */}
    </div>
  );
};

export default IndexPage;
