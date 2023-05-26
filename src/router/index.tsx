import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import FullPageSpinner from "pages/FullPageSpinner";
import NotFound from "pages/NotFound";
import Layout from "layout";

const Home = React.lazy(() => import("pages/Home"));
const Profile = React.lazy(() => import("pages/Profile"));
const Weather = React.lazy(() => import("pages/Weather"));
const ToDoes = React.lazy(() => import("pages/ToDoes"));

export default function Index() {
  // const authStatus = useAuthState();

  // if (authStatus === "Unauthorized") {
  //   return (
  //     <Suspense fallback={<FullPageSpinner />}>
  //       <Routes>{/* <Route path="/*" element={<Auth />} /> */}</Routes>
  //     </Suspense>
  //   );
  // }

  return (
    <Suspense fallback={<FullPageSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="weather" element={<Weather />} />
          <Route path="todo" element={<ToDoes />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
