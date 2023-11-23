import { useEffect, useState } from "react";
import Header from "./Header";
import MoviesBox from "./MoviesBox";

const Browse = () => {
  const [getMoviesResult,setMoviesResult]=useState([]);
  // const [IfSearch,setIfSearch]=useState(false);
  const getDatafunc = async () => {
    const url ="https://www.omdbapi.com/?s=Batman&apikey=51876c6a&page=1";


    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setMoviesResult(result.Search)
      console.log(getMoviesResult);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDatafunc();
  }, []);
  return (
    <div>
      <Header />
      
      <MoviesBox moviesData={getMoviesResult}/>
      
    </div>
  );
};

export default Browse;
