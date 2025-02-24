import MyButton from "../../../Buttons/MyButton";
import Heading from "../../../Heading/Heading";
import CofCC from "../../../../assets/Homepage/C-of-cc.png";
import Image from "next/image";

const Admission = () => {
  const heading = "Admission 2024";
  const buttons = [
    {
      label: "MBA",
      link: "",
    },
    {
      label: "M.Tech/M.E",
      link: "",
    },
    {
      label: "B.Tech/B.E",
      link: "",
    },
    {
      label: "MBBS",
      link: "",
    },
    {
      label: "Ph.D",
      link: "",
    },
    {
      label: "B.Sc/M.Sc",
      link: "",
    },
    {
      label: "B.Pharmacy",
      link: "",
    },
    {
      label: "LLB",
      link: "",
    },
    {
      label: "BCA/MCA",
      link: "",
    },
    {
      label: "B.com/M.Com",
      link: "",
    },
    {
      label: "BBA",
      link: "",
    },
  ];

  return (
    <div className="mx-auto mb-20">
      <div className="flex items-start w-full sm:flex-col sm:gap-5 justify-between">
        <div className="w-4/5 sm:w-full">
          <Heading heading_name={heading}  />
          <div className="flex flex-wrap gap-3">
            {buttons.map((button, index) => (
              <MyButton key={index} label={button.label} link={button.link} isqna={false} />
            ))}
          </div>
        </div>
        <div className="w-1/5 sm:w-full">
          <div className="flex justify-center">
            <Image src={CofCC} alt="@BharatTech" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
