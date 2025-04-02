import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Verification() {
  const user = useSelector((state) => state.user.user);

  console.log(user);

  localStorage.setItem("user", JSON.stringify(user));

  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = user?.id_admin;

    if (!user) navigate("/");

    if (isAdmin === true) {
      navigate("/servers");
      localStorage.setItem("admin", JSON.stringify(isAdmin));
    } else if (isAdmin === false) {
      navigate("/groups");
    }
  });
}

export default Verification;
