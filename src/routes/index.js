import { useRoutes } from "react-router";
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./Routes";

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, AuthRoutes]);
}
