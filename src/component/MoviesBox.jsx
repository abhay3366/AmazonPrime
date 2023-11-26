import { Box, Flex, Grid, Image,Text } from "@chakra-ui/react";
import StarRating from "./StarRating";

const MoviesBox = (props) => {
  // console.log(props);
  const { moviesData } = props;
  // console.log(moviesData);
  // const moviesData=props.
  return (
    <Grid  templateColumns='repeat(5, 1fr)' gap={5}>
      {moviesData.map((el,key)=>(
      <div  key={el.id} >
        <Image src={el.Poster} alt="Dan Abramov" />
        <Text fontSize='md'>{el.Title}</Text>
        <Text fontSize='sm'>Year</Text>
        <Text fontSize='sm'>{el.Year}</Text>
        {/* <StarRating rating={el.rating}/> */}
        
      </div>
      
      
      
      ))};
    </Grid>
  );
};

export default MoviesBox;
