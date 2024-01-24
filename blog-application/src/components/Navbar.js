import React from "react";
import Header from "../layout/Header";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Header />
      <Outlet className="container" />
    </div>
  );
};

export default Navbar;
