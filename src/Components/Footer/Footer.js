import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContent}>
        <div style={footerTitleStyle}>
          &copy; 2023 Hossam Hatem. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "white",
  padding: "20px",
  textAlign: "center",
  position: "fixed",
  bottom: "0",
  width: "100%",
};

const footerContent = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const footerTitleStyle = {
  padding: "10px",
  fontSize: "14px",
};

export default Footer;
