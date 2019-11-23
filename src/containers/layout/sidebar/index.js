import React from "react";
import { Link } from "react-router-dom";
import { menuRoutes } from "../../../routes";

function index() {
  return (
    <div>
      Sidebar
      <br />
      {menuRoutes.map((menuRoute, i) => (
        <Link key={i} to={menuRoute.path}>
          {menuRoute.label}
        </Link>
      ))}
    </div>
  );
}

export default index;
