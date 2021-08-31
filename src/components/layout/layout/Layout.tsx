import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import useStyles from "./layout.jss";

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.layout_root}>
      <Header />
      <Navigation />
      <main className={classes.layout_content}>
        <div className={classes.layout_toolbar} />
        {children}
        <div className={classes.layout_offset} />
      </main>
    </div>
  );
};

export default Layout;
