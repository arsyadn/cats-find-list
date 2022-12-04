import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link, onClick }) => {
  return (
    <Link to={link}>
      <button
        onClick={onClick}
        className="h-10 mx-3 border-2 border-[#9ac795] px-3 py-1 rounded-md hover:bg-[#9ac795] hover:text-[#557153] mb-3 sm:mb-0"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
