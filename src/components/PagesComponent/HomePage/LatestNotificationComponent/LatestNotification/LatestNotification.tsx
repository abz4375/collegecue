import MyHeading from "../../../../Heading/Heading";
import ParentCardSection from "./ParentCardSection";

const LatestNotification = () => {
  const heading = "Latest Notification";

  return (
    <div className="mb-20 bg-[url(../Assets/Homepage/StudyBackground.jpg)">
    <div className="flex flex-col gap-2 sm:justify-center sm:mr-3 sm:ml-2">
      <MyHeading heading_name={heading} />
      <ParentCardSection />
    </div>
  </div>
  );
};

export { LatestNotification };
