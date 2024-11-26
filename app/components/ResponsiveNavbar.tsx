"use client";
import React from "react";
import Navbar from "./Navbar";
import { MobileNavbar } from "./MobileNavbar";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = React.useState(false);

  const showNavHandler = () => setShowNav(true);
  const hideNavHandler = () => setShowNav(false);

  return (
    <div >
      {/*pass function as prop*/}
      <Navbar openNav={showNavHandler} />
      <MobileNavbar showNav={showNav} hideNav={hideNavHandler} />
    </div>
  );
};

export default ResponsiveNavbar;
