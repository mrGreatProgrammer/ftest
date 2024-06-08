import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="authPage pt-24 min-h-screen flex  items-center flex-col">
      <div className="mb-5">
        <img src="/logo.svg" className="mx-auto" alt="logo" />
        {/* <h1 className="text-4xl logo text-primary font-bold">Elegantos</h1> */}
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;