import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbRoutes = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/products/detail", label: "Product Detail" },
  ];

  return (
    <nav>
      <ul>
        {breadcrumbRoutes.map((route, index) => {
          const isLast = index === breadcrumbRoutes.length - 1;
          return isLast ? (
            <li key={route.path}>{route.label}</li>
          ) : (
            <li key={route.path}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          );
        })}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li key={name}>{name}</li>
          ) : (
            <li key={name}>
              <Link to={routeTo}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
