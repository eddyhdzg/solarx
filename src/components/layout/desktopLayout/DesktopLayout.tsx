import { useState } from "react";
import clsx from "clsx";
import { Routes } from "types";
import { Header, DesktopAppbar } from "components";
import useStyles from "./desktopLayout.jss";

const DesktopLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState<Routes>("home");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemClick = (
    _: React.MouseEvent<HTMLDivElement, MouseEvent>,
    newValue: Routes
  ) => {
    setValue(newValue);
  };

  return (
    <div className={classes.layout}>
      <Header open={open} toggleDrawer={handleDrawerToggle} />
      <DesktopAppbar
        open={open}
        value={value}
        handleListItemClick={handleListItemClick}
      />
      <main
        className={clsx(classes.layout_main, {
          [classes.layout_main__shift]: open,
        })}
      >
        <div className={classes.layout_toolbar} />
        {children}
      </main>
    </div>
  );
};

export default DesktopLayout;
