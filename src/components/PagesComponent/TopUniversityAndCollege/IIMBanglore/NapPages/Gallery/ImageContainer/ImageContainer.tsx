"use client";
import { FC } from "react";
import CampusImages from "./ImageData";
import EventImages from "./EventsImages";
import Image from "next/image";
interface CampusImages {
  id: any;
  img: any;
}
interface EventImages {
  id: any;
  img: any;
}
interface Props {
  campusImages: CampusImages[];
  eventImages: EventImages[];
}

const ImageContainer: FC<Props> = ({ campusImages, eventImages }: any) => {
  return (
    <div className="shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] rounded-[15px] flex flex-col  gap-5">
      <div className="p-5">
        <p className="text-2xl font-bold text-gray-800 my-4">
          IIM Bangalore Images
        </p>
        <p className="text-xl font-bold text-blue-900 text-opacity-75 my-4">Campus Images</p>
        <div className="flex flex-wrap justify-center gap-2">
          {campusImages.map((value: any) => {
            return (
              <Image key={value.id} src={value.img} alt={"Campus Images"} className=" border- p-1 border-2 border-gray-300 shadow-md rounded-sm hover:scale-[1.025] hover:shadow-lg transition-all duration-150"/>
            );
          })}
        </div>
        <p className="text-xl font-bold text-blue-900 text-opacity-75 my-4">Events Images</p>
        <div className="flex flex-wrap justify-center gap-2">
          {eventImages.map((value: any) => {
            return (
              <Image key={value.id} src={value.img} alt={"Event Images"} className=" border- p-1 border-2 border-gray-300 shadow-md rounded-sm hover:scale-[1.025] hover:shadow-lg transition-all duration-150" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
