import React from "react";
import {useSelector} from "react-redux";
import {selectUser} from "../redux/features/userSlice";
import {Navigate, Outlet} from "react-router-dom";

const Redirect = () => {
  const user = useSelector(selectUser());

  return <>{!user ? <Outlet /> : <Navigate to="/chat" replace />}</>;
};

export default Redirect;
