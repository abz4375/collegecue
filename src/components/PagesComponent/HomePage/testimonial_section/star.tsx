import { FaStar, FaRegStar } from "react-icons/fa";

const renderStars = (rating: string) => {
  const numStars = parseInt(rating, 10);
  const maxStars = 5; 

  const filledStars = Array.from({ length: numStars }, (_, index) => (
    <span key={index} className="text-xl mr-1 text-violet-600">
      <FaStar />
    </span>
  ));

  const unfilledStars = Array.from({ length: maxStars - numStars }, (_, index) => (
    <span key={index + numStars} className="text-xl mr-1 text-violet-600">
      <FaRegStar />
    </span>
  ));

  return [...filledStars, ...unfilledStars];
};

export default renderStars;
