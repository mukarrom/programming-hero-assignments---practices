import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();


  return(
     <footer className="text-center my-3">
       <hr />
       &copy; Copyright {year}
       </footer>
  )
};

export default Footer;
