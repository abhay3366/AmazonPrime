import { useEffect, useState } from "react";
import Header from "./Header";
import MoviesBox from "./MoviesBox";
import "../App.css";

import Pagniation from "./Pagination";
import { useSelector } from "react-redux";

const Browse = () => {
  const [getMoviesResult, setMoviesResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [pageCount, setPageCount] = useState(null);
  const [filterData,getFilterData] = useState([]);

    const inputData = useSelector((state) => state.input.inputData);
    console.log("inputDataaaaaaa", inputData);

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
      getFilterData(result.Search);
    } catch (error) {
      console.error(error);
    }
    console.log(pageCount);
  };

    const getFilterDataFunc=()=>{
      const filterMovies = getMoviesResult.filter((movies) =>
        movies.Title.toLowerCase().includes(inputData.toLowerCase())
      );
      console.log("filterMovies",filterMovies);
      getFilterData(filterMovies);
    }

  useEffect(()=>{
    getFilterDataFunc();
  },[inputData])

  useEffect(() => {
    getDatafunc();
  }, []);
  return (
    <div>
      <Header />

      <MoviesBox moviesData={filterData} />
      <Pagniation
        pageCount={pageCount} // Total number of pages
        onPageChange={getDatafunc}
      />
    </div>
  );
};

export default Browse;
