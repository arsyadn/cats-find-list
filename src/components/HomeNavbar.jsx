import React from "react";
import Button from "./Button";

const HomeNavbar = ({ getCat }) => {
  return (
    <div className="bg-[#557153] text-white flex flex-col justify-center items-center py-6">
      <p className="text-2xl font-semibold mb-10">Cat List</p>
      <div className="flex flex-column justify-center items-center">
        <Button text="All Cats" onClick={getCat} />
        <Button text="Search Cat" link="/search" />
      </div>
    </div>
  );
};

export default HomeNavbar;
