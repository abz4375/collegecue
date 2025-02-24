import React from "react";
import ImageContainer from "./ImageContainer";
import CampusImages from "./ImageData";
import EventImages from "./EventsImages";
const Image = () => {
  return (
    <div>
      <ImageContainer campusImages={CampusImages} eventImages={EventImages} />
    </div>
  );
};

export default Image;
