import React from "react";
import {LatestNotification} from "./LatestNotification/LatestNotification";
import {OurSuggestion} from "./OurSuggestion/OurSuggestion";

const ParentCard = () => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="mx-auto w-[1340px] px-4 xl:w-full lg:h-full md:w-full sm:w-full py-20 pb-0">
          <LatestNotification />
          <OurSuggestion />
      </div>
    </div>
  );
};

export default ParentCard;
