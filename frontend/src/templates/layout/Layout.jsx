import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";

const Layout = () => {
  return (
    <Fragment className="min-h-screen w-screen p-10 bg-gray-300">
      <header>
        <TopNav></TopNav>
        <LeftNav></LeftNav>
      </header>
      {/* <p className="text-3xl font-bold underline">Hello world!</p> */}
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Layout;
