import { MobileAppbar, MobileHeader } from "components";
import useStyles from "./mobileLayout.jss";

const MobileLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mobileLayout_notch} />
      <MobileHeader />
      <main className={classes.mobileLayout_main}>
        {children}
        <div className={classes.mobileLayout_offset} />
      </main>
      <MobileAppbar />
    </>
  );
};

export default MobileLayout;
