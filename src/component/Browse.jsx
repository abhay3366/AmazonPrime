import { useEffect, useState } from "react";
import Header from "./Header";
import MoviesBox from "./MoviesBox";

const Browse = () => {
  const [getMoviesResult,setMoviesResult]=useState([]);
  const getDatafunc = async () => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "681082fc4amsh20830f79262bbd3p1eceabjsnd096c06ae04b",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMoviesResult(result)
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
