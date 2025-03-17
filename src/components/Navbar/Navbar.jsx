import React from "react";
import ShelfScout from "../../assets/images/shelf-scout-logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigationHome = () => navigate("/");

  return (
    <div
      className="bg-[rgb(233,226,221)] h-[120px] px-20 cursor-pointer"
      onClick={() => handleNavigationHome()}
    >
      <img className="h-[120px]" src={ShelfScout} alt="scout-logo" />
    </div>
  );
};

export default Navbar;
