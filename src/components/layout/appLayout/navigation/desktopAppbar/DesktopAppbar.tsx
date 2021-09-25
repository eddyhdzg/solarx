import { NavLink } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, Box } from "@mui/material";
import { TBaseRoutes } from "types";
import { RouterTree } from "hooks/router/useRouterTree";
import { DesktopTooltip } from "components";
import logo from "assets/images/Logo.svg";

interface IDesktopAppbarProps {
  routerTree: RouterTree;
  getMemoryRoute: (baseRoute: TBaseRoutes) => string;
}

const DesktopAppbar: React.FC<IDesktopAppbarProps> = ({
  routerTree,
  getMemoryRoute,
}: IDesktopAppbarProps) => {
  const routes = Object.entries(routerTree);
  const more = [routes.pop()!];

  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: (theme) => theme.palette.grey[900],
          borderColor: "transparent",
          boxShadow: 3,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "auto",
          justifyContent: "space-between",
          width: `calc(56px + env(safe-area-inset-left))`,
          px: 0.5,
          pt: "env(safe-area-inset-top)",
          pb: "env(safe-area-inset-bottom)",
          overflowY: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <div>
          <List
            sx={{
              "& .MuiListItem-button": {
                my: 1,
                "&:first-child": {
                  mt: 0,
                },
                "&:last-child": {
                  mb: 0,
                },
              },
            }}
          >
            <ListItem
              button
              component={NavLink}
              to="/wallet"
              sx={{
                justifyContent: "center",
                py: 2,
                borderRadius: 1,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "auto",
                }}
              >
                <img src={logo} height={24} width={24} alt="nav-logo" />
              </ListItemIcon>
            </ListItem>
            {routes.map(([route, { icon: Icon, title }]) => (
              <DesktopTooltip key={route} title={title} placement="right">
                <ListItem
                  button
                  component={NavLink}
                  to={getMemoryRoute(route as TBaseRoutes)}
                  activeClassName="Mui-selected"
                  sx={{
                    justifyContent: "center",
                    py: 2,
                    borderRadius: 1,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                    }}
                  >
                    {<Icon />}
                  </ListItemIcon>
                </ListItem>
              </DesktopTooltip>
            ))}
          </List>
        </div>
        <div>
          <List
            sx={{
              "& .MuiListItem-button": {
                my: 1,
                "&:first-child": {
                  mt: 0,
                },
                "&:last-child": {
                  mb: 0,
                },
              },
            }}
          >
            {more?.map(([route, { icon: Icon, title }]) => (
              <DesktopTooltip key={route} title={title} placement="right">
                <ListItem
                  button
                  component={NavLink}
                  to={getMemoryRoute(route as TBaseRoutes)}
                  activeClassName="Mui-selected"
                  sx={{
                    justifyContent: "center",
                    py: 2,
                    borderRadius: 1,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                    }}
                  >
                    {<Icon />}
                  </ListItemIcon>
                </ListItem>
              </DesktopTooltip>
            ))}
          </List>
        </div>
      </Box>
    </Drawer>
  );
};

export default DesktopAppbar;
