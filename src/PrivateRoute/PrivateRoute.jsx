import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <button className="btn btn-success btn-lg loading justify-center items-center">
          loading
        </button>
      </div>
    );
  }
  if (user) return children;
  return <Navigate to="/login" state={location}></Navigate>;
};

export default PrivateRoute;
