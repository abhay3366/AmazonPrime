import { Grid, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchMovies = () => {
  const[filterData,setFilterData] = useState()
  const inputData = useSelector((state) => state.input.inputData);
  console.log("inputData", inputData);

  const searchFunc = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?t=${inputData}&apikey=51876c6a`
    );
    const data = await res.json();
    console.log(data);
    setFilterData(data);
  };
  useEffect(() => {
    searchFunc();
  }, []);
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={5}>
      {filterData.map((el) => (
        <div key={el.id}>
          <Image src={el.Poster} alt="Dan Abramov" />
          <Text fontSize="md">{el.Title}</Text>
          <Text fontSize="sm">Year</Text>
          <Text fontSize="sm">{el.Year}</Text>
        </div>
      ))}
      ;
    </Grid>
  );
};

export default SearchMovies;
