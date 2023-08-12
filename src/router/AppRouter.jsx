import { Route, Routes } from "react-router-dom";
import { HeroesRoutes, } from "../heroes";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      {/* <Route path="login" element={<LoginPage />} /> */}
      <Routes>
        <Route path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } />

        <Route path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          } />
      </Routes>
      {/* <Route path="/*" element={<HeroesRoutes />} /> */}

    </>
  );
};