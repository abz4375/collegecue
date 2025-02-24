import NewApplication from "./NewApplication";
import img_13 from "../../../../../assets/TopCollegeUniversity/CollegeCard/12.png";
import img_12 from "../../../../../assets/TopCollegeUniversity/CollegeCard/13.png";
const NotificationsData = [
  {
    id: 1,
    img: img_12,
    name: "2023 B.tech Application Open - NIIT University",
    recruits: "100% Placement Record ",
    ctc: "44.27 LPA",
    about:
      "NIIT University is backed by NIIT Ltd, one of India's premier technology companies",
    apply: "",
  },
  {
    id: 2,
    img: img_13,
    name: "Parul University",
    recruits: "1600+ Recruiters",
    ctc: "30 LPA",
    about: "UG | PG Admisiion Open for 2033",
  },
];
export { NotificationsData };
const NewApplicationContainer = () => {
  return (
    <div>
      {NotificationsData.map((item: any, index: number) => (
        <div key={index}>
          <NewApplication {...item} />
        </div>
      ))}
    </div>
  );
};

export default NewApplicationContainer;
