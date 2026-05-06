import React from "react";
import { Link } from "react-router";
import Typography from "../common/Typography";

function Sidebar() {
  return (
    <div className="flex flex-col p-3">
      <div>
        <Typography varient="h3">Dashboard</Typography>
      </div>
      <div className="flex flex-col gap-3">
        <Link to="/users" className="hover:bg-slate-200 p-3 rounded-lg">Users</Link>
        <Link to="/products" className="hover:bg-slate-200 p-3 rounded-lg">Products</Link>
        <Link to="/categories" className="hover:bg-slate-200 p-3 rounded-lg">Categories</Link>
      </div>
    </div>
  );
}

export default Sidebar;
