import { NavLink } from "react-router-dom";
import { TBaseRoutes } from "solarx-types";
import { RouterTree } from "hooks/router/useRouterTree";
import { DesktopTooltip } from "components";
import logo from "assets/images/logo.svg";
import {
  DesktopAppBarDrawer,
  DesktopAppBarContent,
  DesktopAppBarUl,
  DesktopAppBarLi,
  DesktopAppBarLiIcon,
} from "./DesktopAppBar.styled";

interface IDesktopAppBarProps {
  routerTree: RouterTree;
  getMemoryRoute: (baseRoute: TBaseRoutes) => string;
}

const DesktopAppBar: React.FC<IDesktopAppBarProps> = ({
  routerTree,
  getMemoryRoute,
}: IDesktopAppBarProps) => {
  const routes = Object.entries(routerTree);
  const more = [routes.pop()!];

  return (
    <DesktopAppBarDrawer variant="permanent">
      <DesktopAppBarContent>
        <div>
          <DesktopAppBarUl>
            <DesktopAppBarLi component={NavLink} to="/wallet">
              <DesktopAppBarLiIcon>
                <img src={logo} height={24} width={24} alt="nav-logo" />
              </DesktopAppBarLiIcon>
            </DesktopAppBarLi>
            {routes.map(([route, { icon: Icon, title }]) => (
              <DesktopTooltip key={route} title={title} placement="right">
                <DesktopAppBarLi
                  component={NavLink}
                  to={getMemoryRoute(route as TBaseRoutes)}
                  activeClassName="Mui-selected"
                >
                  <DesktopAppBarLiIcon>{<Icon />}</DesktopAppBarLiIcon>
                </DesktopAppBarLi>
              </DesktopTooltip>
            ))}
          </DesktopAppBarUl>
        </div>
        <div>
          <DesktopAppBarUl>
            {more?.map(([route, { icon: Icon, title }]) => (
              <DesktopTooltip key={route} title={title} placement="right">
                <DesktopAppBarLi
                  component={NavLink}
                  to={getMemoryRoute(route as TBaseRoutes)}
                  activeClassName="Mui-selected"
                >
                  <DesktopAppBarLiIcon>{<Icon />}</DesktopAppBarLiIcon>
                </DesktopAppBarLi>
              </DesktopTooltip>
            ))}
          </DesktopAppBarUl>
        </div>
      </DesktopAppBarContent>
    </DesktopAppBarDrawer>
  );
};

export default DesktopAppBar;
