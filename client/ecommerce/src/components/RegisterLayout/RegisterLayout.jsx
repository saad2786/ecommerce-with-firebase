import React from "react";
import { Outlet } from "react-router";
import "./RegisterLayout.scss";
const RegisterLayout = () => {
  return (
    <div className='registerLayout'>
      <div className='form'>
        <Outlet />
      </div>
      <div className='image'>
        <img src='img/login.jpg' alt='' />
      </div>
    </div>
  );
};

export default RegisterLayout;
