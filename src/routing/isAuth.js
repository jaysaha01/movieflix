import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = () => {
  const storedUserAuthObj = window.localStorage.getItem(
    "sb-qruxkmojziyqrfovvzbg-auth-token"
  );
  const myObject = JSON.parse(storedUserAuthObj);

  return myObject ? <Outlet /> : <Navigate to="/signin" />;

  
};

export default ProtectedRoutes;
