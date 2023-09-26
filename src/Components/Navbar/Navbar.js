import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import "./NavbarStyle.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logo}
          style={{ width: "100px" }}
          className="App-logo"
          alt="logo"
        />
        <h1>Hossam</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="profile-tab">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="HelpCenter">
          <Link to="/help-center">Help Center</Link>
        </li>
        <li className="CreateProduct">
          <Link to="/create-product">Create Product</Link>
        </li>

        {isLoggedIn && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
