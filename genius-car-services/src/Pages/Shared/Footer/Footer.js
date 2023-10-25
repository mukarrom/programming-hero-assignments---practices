import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="bg-primary py-2 text-white">
      <h4 className="text-center">&copy; copyright {today.getFullYear()}</h4>
    </footer>
  );
};

export default Footer;
