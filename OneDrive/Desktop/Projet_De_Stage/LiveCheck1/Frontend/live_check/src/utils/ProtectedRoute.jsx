import React, { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

function ProtectedRoute({ Children }) {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const localUser = localStorage.getItem("user");
  const localAdmin = localStorage.getItem("admin");

  if (!user && !localUser) {
    return <Navigate to="/" replace />;
  }

  if ((user || localUser) && !localAdmin) {
    return <Outlet />;
  }

  return <NotFoundPage />;
}

export default ProtectedRoute;
