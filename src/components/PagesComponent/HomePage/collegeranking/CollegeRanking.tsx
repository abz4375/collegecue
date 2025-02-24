import Courses from "../../../Buttons/Courses";
import ClgRankTable from "./ClgRankTable";
import Heading from "@/components/Heading/Heading";

const CollegeRanking = () => {
  const Agencies = [
    {
      label: "NIRF",
      link: "/coming-soon",
    },
    {
      label: "State",
      link: "/coming-soon",
    },
    {
      label: "QS Ranking",
      link: "/coming-soon",
    },
    {
      label: "Business Today",
      link: "/coming-soon",
    },
  ];

  return (
    <div className="mx-auto my-20">
      <div className="">
        <Heading heading_name="College Ranking" />
        <div className="flex gap-2">
          <div className="mb-4 text-xl text-blue-500 items-center py-2"> Agencies:</div>
          <div className="flex flex-wrap sm:gap-0 mb-4">
            {Agencies.map((agency, index) => {
              return (
                <Courses
                  key={index}
                  dt={agency.label}
                  link={agency.link}
                ></Courses>
              );
            })}
          </div>
        </div>
        <ClgRankTable />
      </div>
    </div>
  );
};

export default CollegeRanking;
