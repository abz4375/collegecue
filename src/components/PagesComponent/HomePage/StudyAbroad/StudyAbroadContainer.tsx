import Heading from "../../../Heading/Heading";
import Abroad from "../../../DummyData/StudyAbroadData";
import StudyAbroadCard from "../../../Reusable_cards/StudyAbroadCard";
import { FC } from "react";
import ViewAllButton from "@/components/Buttons/ViewAllButton";

interface AbroadData {
  img: any;
  cardName: any;
  check: any;
  no: any;
  fee: any;
  ranking: any;
  keyFact1: any;
  keyFact2: any;
  keyFact3: any;
}

const StudyAbroadContainer: FC = () => {
  return (
    <div className="mb-20">
      <div className="flex w-full justify-between">
        <Heading heading_name="Study Abroad" />
        <ViewAllButton linkto="#" />
      </div>
      <div className=" ">
        <div className="flex justify-center items-center max-w-full gap-8 sm:flex-col">
          {Abroad.map((val: AbroadData, index: any) => (
            <StudyAbroadCard
              key={index}
              image={val.img}
              heading={val.cardName}
              desc={val.check}
              no={val.no}
              fee={val.fee}
              rank={val.ranking}
              keyFact1={val.keyFact1}
              keyFact2={val.keyFact2}
              keyFact3={val.keyFact3}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadContainer;
