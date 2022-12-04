import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import HomeNavbar from "../components/HomeNavbar";
import Card from "../components/Card";

const HomePage = () => {
  const [dataCat, setDataCat] = useState([]);
  const [page, setPage] = useState(-1);
  const [prevY, setPrevY] = useState(0);

  let catsRef = useRef({});
  let loadingRef = useRef(null);
  let prevYRef = useRef({});
  let pageRef = useRef({});
  catsRef.current = dataCat;
  pageRef.current = page;
  prevYRef.current = prevY;

  useEffect(() => {
    setPage(pageRef.current + 1);

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(loadingRef.current);
  }, []);

  const handleObserver = (entities) => {
    const y = entities[0].boundingClientRect.y;

    if (prevYRef.current > y) {
      getCat();
      setPage(pageRef.current + 1);
    }
    setPrevY(y);
  };

  const getCat = async () => {
    try {
      const { data } = await axios.get(
        `https://api.thecatapi.com/v1/breeds?limit=10&page=${pageRef.current}`
      );
      if (data) {
        setDataCat([...catsRef.current, ...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HomeNavbar getCat={getCat} />
      <Card dataCat={dataCat} loadingRef={loadingRef} />
    </div>
  );
};

export default HomePage;
