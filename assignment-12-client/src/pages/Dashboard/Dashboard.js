import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../../CustomLink";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
          <h2 className="text-3xl font-bold text-purple-500">Welcome to Dashboard</h2>
        <Outlet />
        
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <CustomLink to='/dashboard'>My Order</CustomLink>
          </li>
          <li>
            <CustomLink to='/dashboard/add_review'>Add a Review</CustomLink>
          </li>
          <li>
            <CustomLink to='/dashboard/add_product'>Add a product</CustomLink>
          </li>
          <li>
            <CustomLink to='/dashboard/add_product'>My Profile</CustomLink>
          </li>
          <li>
            <CustomLink to='/dashboard/add_product'>Manage All Orders</CustomLink>
          </li>
          <li>
            <CustomLink to='/dashboard/add_product'>Manage Products</CustomLink>
          </li>
          <li>
            <CustomLink to='/dashboard/add_product'>Make Admin</CustomLink>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
