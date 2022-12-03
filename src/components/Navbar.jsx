import React from "react";

const Navbar = ({ filterCat, setFilterCat, handleFilter }) => {
  return (
    <div className="bg-[#557153] text-white flex flex-col justify-center items-center py-6">
      <p className="text-2xl font-semibold mb-10">Cat List</p>
      <div className="flex flex-column justify-center items-center">
        <input
          className="text-slate-800 h-10 ml-2 px-3 outline-0 rounded-tl-lg rounded-bl-lg"
          type="text"
          placeholder="Input a cat name"
          value={filterCat}
          onChange={(e) => setFilterCat(e.target.value)}
        />
        <button
          onClick={handleFilter}
          className="bg-[#A9AF7E] text-[#557153] border-2 border-[#A9AF7E] text-sm font-semibold rounded-tr-lg rounded-br-lg py-1 px-3 hover:bg-[#557153] hover:text-[#A9AF7E] h-10"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
