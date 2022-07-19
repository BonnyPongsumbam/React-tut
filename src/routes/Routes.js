import { Home } from "../component/Home";
import KeiYenBoard from "../component/KeiyenGame";
import NavBar from "../component/NavBar";

const MainRoutes = {
  path: "/app",
  element: <NavBar />,
  children: [
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "kei-yen-game",
      element: <KeiYenBoard />,
    },
  ],
};

export default MainRoutes;
