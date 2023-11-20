import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";

const StarRating = (props) => {
const {rating}=props;
  const filledStars = Math.floor(rating);
  console.log("filledStars",filledStars);
const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        // Full star
        stars.push(<StarIcon key={i} color="yellow.500" />);
      } else if (i === filledStars + 1 && hasHalfStar) {
        // Half star
        stars.push(<StarIcon key={i} color="yellow.500" />);
      } else {
        // Empty star
        stars.push(<StarIcon key={i} color="gray.300" />);
      }
    }
    return stars;
  };
  
  return (
    <Flex align="center">
    {renderStars().map((star, index) => (
      <Box key={index} mx="1">
        {star}
      </Box>
    ))}
  </Flex>
  )
}

export default StarRating