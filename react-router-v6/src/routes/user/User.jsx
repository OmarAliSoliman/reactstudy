import React from "react";
import UserNavbar from "./UserNavbar";
import { Outlet } from 'react-router-dom';

function User() {
  return (
    <>
      <UserNavbar />
      <div className="main-component">
        <Outlet />
      </div>
    </>
  );
}

export default User;
