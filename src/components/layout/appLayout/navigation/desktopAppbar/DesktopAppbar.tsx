import { NavLink } from "react-router-dom";
import { TBaseRoutes } from "types";
import { RouterTree } from "hooks/router/useRouterTree";
import { DesktopTooltip } from "components";
import logo from "assets/images/logo.svg";
import {
  DesktopAppbarDrawer,
  DesktopAppbarContent,
  DesktopAppbarUl,
  DesktopAppbarLi,
  DesktopAppbarLiIcon,
} from "./DesktopAppbar.styled";

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
    <DesktopAppbarDrawer variant="permanent">
      <DesktopAppbarContent>
        <div>
          <DesktopAppbarUl>
            <DesktopAppbarLi component={NavLink} to="/wallet">
              <DesktopAppbarLiIcon>
                <img src={logo} height={24} width={24} alt="nav-logo" />
              </DesktopAppbarLiIcon>
            </DesktopAppbarLi>
            {routes.map(([route, { icon: Icon, title }]) => (
              <DesktopTooltip key={route} title={title} placement="right">
                <DesktopAppbarLi
                  component={NavLink}
                  to={getMemoryRoute(route as TBaseRoutes)}
                  activeClassName="Mui-selected"
                >
                  <DesktopAppbarLiIcon>{<Icon />}</DesktopAppbarLiIcon>
                </DesktopAppbarLi>
              </DesktopTooltip>
            ))}
          </DesktopAppbarUl>
        </div>
        <div>
          <DesktopAppbarUl>
            {more?.map(([route, { icon: Icon, title }]) => (
              <DesktopTooltip key={route} title={title} placement="right">
                <DesktopAppbarLi
                  component={NavLink}
                  to={getMemoryRoute(route as TBaseRoutes)}
                  activeClassName="Mui-selected"
                >
                  <DesktopAppbarLiIcon>{<Icon />}</DesktopAppbarLiIcon>
                </DesktopAppbarLi>
              </DesktopTooltip>
            ))}
          </DesktopAppbarUl>
        </div>
      </DesktopAppbarContent>
    </DesktopAppbarDrawer>
  );
};

export default DesktopAppbar;
