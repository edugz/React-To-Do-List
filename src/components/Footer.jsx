import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <p> Copyright © {currentYear} </p>
    </div>
  );
};

export default Footer;
