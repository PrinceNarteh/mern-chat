import React from "react";
import {useSelector} from "react-redux";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {selectUser} from "../redux/features/userSlice";

const ProtectedRoutes = () => {
  const user = useSelector(selectUser());
  const location = useLocation();
  console.log(location);
  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        <Navigate to="login" state={{from: location}} replace />
      )}
    </>
  );
};

export default ProtectedRoutes;
