import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "./logo.svg";



export const Navbar = () => {
  const Item = ({ itemname }) => (
    <li>
      <a>{itemname}</a>
    </li>
  );
  const ItemChildren = ({ children }) => (
    <li>
      <a>{children}</a>
    </li>
  );
  return (
    <div className="nav">
      <div className="lo">
        <Logo className="logo" />
        <ItemChildren>Home</ItemChildren>
        <ItemChildren>About</ItemChildren>
        <ItemChildren>Help</ItemChildren>
      </div>
    </div>
  );
};





 
