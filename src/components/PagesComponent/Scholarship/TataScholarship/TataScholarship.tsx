import Heading from "@/components/Heading/Heading";
import React from "react";

const TataScholarship = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-5 lg:p-2 lg:items-center lg:justify-center max-w-[1200px]">
        <div>
          <Heading heading_name={"Tata Scholarship"} />
        </div>
        <div className="text-[#210366] font-Poppins text-base font-normal leading-5 pb-2 ml-4">
          <div>
            The Tata Education and Development Trust, which is associated with
            the Tata Group, majorly focuses to divide the financial load of the
            students who are willing to hone their skills and prepare well for a
            bright future. Over USD 25 million have been endowed by the trust
            which will allow Cornell University Tata Scholarship to provide
            funds to UG students from all over India.
          </div>
          <div>
            The Cornell University Tata Scholarship program awards approximately
            20 scholarships to Indian students. Through this, the trust ensures
            that academically excellent students from India have access to
            Cornell University, regardless of their financial conditions. The
            Tata scholarship amount will be awarded annually for the four-year
            program. The scholarship amount covers the expense of tuition fees
            and annual course fees
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TataScholarship;
