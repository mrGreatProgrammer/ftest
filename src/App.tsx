import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router";
import MainPage from "./pages/MainPage";
import { useAppSelector } from "./store/store";
// import AuthPage from "./pages/authPages/AuthPage";
import LoginPage from "./pages/authPages/LoginPage";
import MainLayout from "./components/Layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/authPages/AuthPahge";
import SchedulePage from "./pages/schedules/SchedulePage";
import ProfilePage from "./pages/ProfilePages/ProfilePage";
// import Release from "./components/ui/errs/Release/Release";

function App() {
  const { authorized } = useAppSelector((state) => state.usersSlice);
  return (
    <div className="App">
      {/* <Release/> */}
      <Routes>
        {authorized ? (
          <Route
            path="/"
            element={<MainLayout />}
            errorElement={<div>err</div>}
          >
            <Route index element={<MainPage />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="profile" element={<ProfilePage />} />


            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        ) : (
          <Route path="/" element={<AuthPage />} errorElement={<div>err</div>}>
            <Route index element={<LoginPage />} />
            <Route path="*" element={<LoginPage />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;