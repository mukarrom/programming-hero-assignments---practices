import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <nav className="d-flex flex justify-center text-lg font-semibold my-12">
      <CustomLink to={"/home"} className="ml-5">
        HOME
      </CustomLink>
      <CustomLink to={"/reviews"} className="ml-5">
        REVIEWS
      </CustomLink>
      <CustomLink to={"/dashboard"} className="ml-5">
        DASHBOARD
      </CustomLink>
      <CustomLink to={"/blogs"} className="ml-5">
        BLOGS
      </CustomLink>
      <CustomLink to={"/about"} className="ml-5">
        ABOUT
      </CustomLink>
    </nav>
  );
};

export default Header;
