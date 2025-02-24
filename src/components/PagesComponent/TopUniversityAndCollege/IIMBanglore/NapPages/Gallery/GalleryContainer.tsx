import React from "react";
import Images from "./ImageContainer/Image";
import Comment from "../Review/Comment/Comment";
import PopularComparision from "../Review/PopularComperision/PopularComparision";
import MostPopular from "./MostPopular/MostPopular";
import RadioGroupRating from "../../../../../RadioGroupRating";
import IIMBangaloreVideos from "./VideoContainer/IIMBangaloreVideos";

const GalleryContainer = () => {
  return (
    <div className="flex flex-col gap-5">
      <Images />
      <IIMBangaloreVideos />
      <MostPopular />
      <div className="text-center my-5  font-bold ">
        How likely are you to recommend collegecue.com to a friend or a
        colleagcue?
      </div>
      <RadioGroupRating />
      <Comment />
      <PopularComparision />
    </div>
  );
};

export default GalleryContainer;
