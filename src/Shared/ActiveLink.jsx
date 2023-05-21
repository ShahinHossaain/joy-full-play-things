import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-primary bg-secondary rounded-xl md:rounded-b-full block md:inline-flex items-center px-3 pt-1  text-sm font-medium"
          : "px-3 block md:inline-flex items-center  pt-1  text-sm font-medium"
      }
    >
      {" "}
      {children}
    </NavLink>
  );
};

export default ActiveLink;
