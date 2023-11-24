import { useEffect, useState } from "react";
import Header from "./Header";
import MoviesBox from "./MoviesBox";
import "../App.css";

import Pagniation from "./Pagination";

const Browse = () => {
  const [getMoviesResult, setMoviesResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [pageCount, setPageCount] = useState(null);

  const getDatafunc = async (page) => {
    // console.log("page", page);
    setCurrentPage(page);
    console.log("currentPage", currentPage);
    const url = `https://www.omdbapi.com/?s=Batman&apikey=51876c6a&page=${currentPage}`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setMoviesResult(result.Search);
      setPageCount(Math.floor(result.totalResults/10));
      console.log(getMoviesResult);
    } catch (error) {
      console.error(error);
    }
    console.log(pageCount);
  };

  useEffect(() => {
    getDatafunc();
  }, []);
  return (
    <div>
      <Header />

      <MoviesBox moviesData={getMoviesResult} />
      <Pagniation
        pageCount={pageCount} // Total number of pages
        onPageChange={getDatafunc}
      />
    </div>
  );
};

export default Browse;
