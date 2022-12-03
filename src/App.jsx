import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [moreBooks, setMoreBooks] = useState(true);
  const [dataCat, setDataCat] = useState([]);
  const [filterCat, setFilterCat] = useState("");
  const [newCat, setNewCat] = useState([]);

  const handleCat = async () => {
    try {
      axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
        setDataCat(res.data);
        // console.log(res);
        // setMoreBooks(res.data.length > 0);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (e) => {
    // e.preventDefault();
    if (filterCat === "") {
      console.log(newCat);
      return setNewCat(dataCat);
    } else {
      setNewCat(
        dataCat?.filter((data) =>
          data?.name.toLowerCase().includes(filterCat.toLowerCase())
        )
      );
      console.log(newCat);
    }
  };

  useEffect(() => {
    handleCat();
    console.log(newCat);
  }, [newCat]);

  useEffect(() => {
    handleCat();
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar
        setFilterCat={setFilterCat}
        filterCat={filterCat}
        handleFilter={handleFilter}
      />
      <Card
        dataCat={newCat}
        moreBooks={moreBooks}
        handleFilter={handleFilter}
        handleCat={handleCat}
      />
    </div>
  );
}

export default App;
