import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const remainingStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<GoStarFill key={i} className="text-amber-500" />);
    }
    if (hasHalfStar) {
      stars.push(<GoStar key="half-star" className="text-amber-500" />);
    }
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<GoStar key={`empty-star-${i}`} className="text-amber-500" />);
    }
    return stars;
  };

  return <ul className="flex">{renderStars()}</ul>;
};

export default StarRating; 