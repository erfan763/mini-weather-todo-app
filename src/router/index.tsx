import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import FullPageSpinner from "../pages/FullPageSpinner";
import NotFound from "../pages/NotFound";
import Layout from "../layout";
import { getUserData } from "../utils";

const Home = React.lazy(() => import("../pages/home"));
const Profile = React.lazy(() => import("../pages/Profile"));
const Weather = React.lazy(() => import("../pages/weather"));
const Todos = React.lazy(() => import("../pages/todo"));
const Login = React.lazy(() => import("../pages/login"));

export default function MainRouter() {
  // const authStatus = useAuthState();

  if (!getUserData()?.username) {
    return (
      <Suspense fallback={<FullPageSpinner />}>
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<FullPageSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="weather" element={<Weather />} />
          <Route path="todos" element={<Todos />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
