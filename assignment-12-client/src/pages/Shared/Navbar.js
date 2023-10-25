import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../../CustomLink";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const menu = (
    <>
      <li>
        <CustomLink to={"/home"}>Home</CustomLink>
      </li>
      <li>
        <CustomLink to={"/blog"}>Blog</CustomLink>
      </li>
      <li>
        <CustomLink to={"/portfolio"}>My Portfolio</CustomLink>
      </li>

      {user && (
        <li>
          <CustomLink to={"/dashboard"}>Dashboard</CustomLink>
        </li>
      )}
      {user ? (
        <button onClick={() => signOut(auth)} className="btn btn-primary">
          Log out
        </button>
      ) : (
        <CustomLink to="/register" className="btn btn-primary">
          Register
        </CustomLink>
      )}
    </>
  );
  return (
    <nav className="sticky z-50">
      <div className="navbar bg-light-1">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">MMH Tools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <div className="navbar-end">
        <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
