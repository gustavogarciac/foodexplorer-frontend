import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <BrowserRouter>
      {2 + 2 !== 4 ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
