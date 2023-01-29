import {useAuth} from "../../context/AuthContext";
import { useLocation, Navigate } from "react-router-dom";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let { authenticated } = useAuth();
  let location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
