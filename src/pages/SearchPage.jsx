import { useState, useEffect } from "react";
import axios from "axios";
import SearchNavbar from "../components/SearchNavbar";
import Card from "../components/Card";

const SearchPage = () => {
  const [dataCat, setDataCat] = useState([]);
  const [filterCat, setFilterCat] = useState("");
  const [newCat, setNewCat] = useState([]);

  const handleCat = async () => {
    try {
      axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
        setDataCat(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = () => {
    if (filterCat === "") {
      return alert("You haven't put the cat name yet.");
    } else {
      setNewCat(
        dataCat?.filter((data) =>
          data?.name.toLowerCase().includes(filterCat.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    handleCat();
  }, [newCat]);

  useEffect(() => {
    handleCat();
  }, []);

  return (
    <div className="flex flex-col">
      <SearchNavbar
        setFilterCat={setFilterCat}
        filterCat={filterCat}
        handleFilter={handleFilter}
      />
      <Card dataCat={newCat} />
    </div>
  );
};

export default SearchPage;
