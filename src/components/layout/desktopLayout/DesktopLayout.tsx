import clsx from "clsx";
import { Header, DesktopAppbar } from "components";
import useStyles from "./desktopLayout.jss";
import { useStore } from "providers";
import shallow from "zustand/shallow";

const DesktopLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const { dispatch, drawer } = useStore(
    ({ dispatch, drawer }) => ({ dispatch, drawer }),
    shallow
  );

  const handleDrawerToggle = () => {
    dispatch({ type: "DRAWER_TOGGLE_DRAWER", payload: !drawer });
  };

  return (
    <div className={classes.layout}>
      <Header open={drawer} toggleDrawer={handleDrawerToggle} />
      <DesktopAppbar open={drawer} />
      <main
        className={clsx(classes.layout_main, {
          [classes.layout_main__shift]: drawer,
        })}
      >
        <div className={classes.layout_toolbar} />
        {children}
      </main>
    </div>
  );
};

export default DesktopLayout;
