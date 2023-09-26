import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Article from "./Article";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import { Route } from "react-router-dom";

// Inline CSS styles
const containerStyle = {
  textAlign: "center",
};

const titleStyle = {
  fontSize: "24px",
  color: "#333",
};

const navStyle = {
  listStyle: "none",
  padding: "0",
};

const linkStyle = {
  textDecoration: "none",
  color: "#007bff",
  fontWeight: "bold",
};

const linkHoverStyle = {
  textDecoration: "underline",
};

function HelpCenter({ match }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Help Center</h2>
      <div style={navStyle}>
        <ul>
          <li>
            <NavLink to={"articles"} style={linkStyle}>
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to={"faq"} style={linkStyle}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to={"contactus"} style={linkStyle}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default HelpCenter;
