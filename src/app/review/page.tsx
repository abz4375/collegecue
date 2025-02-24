import AllReviewCard from "@/components/PagesComponent/ReviewPage/AllReviewCard";
import AllTopReviewCard from "@/components/PagesComponent/ReviewPage/AllTopReviewCard";
import Filter from "@/components/PagesComponent/ReviewPage/Filter";
import FilterButton from "@/components/Buttons/FilterButton";
import Hero from "@/components/PagesComponent/ReviewPage/Hero";
import React from "react";

const filters = [
  "Engineering ",
  "Management ",
  "Science",
  "Commerce",
  "Arts",
  "Computer Applications",
  "Medical",
  "Pharmacy",
  "Law",
  "Agriculture",
  "Hotel Management",
  "Architecture",
  "Mass Communications",
  "Dental",
  "Design",
  "Education",
  "Vocational Courses",
  "Aviation",
  "Veterinary Sciences",
  "Science",
];
const tags = [
  "All Country",
  "UK",
  "Canada",
  "Australia",
  "USA",
  "Netherlands",
  "Germany",
  "Ireland",
  "Sweden",
  "New Zealand",
  "Singapore",
  "France",
  "Hong Kong",
  "Malaysia",
  "UAE",
];
const page = () => {
  return (
    <div >
      <div className="bg-[linear-gradient(180deg,rgb(173,196,253),#FFFFFF)]">
        <section className="container mx-auto  max-w-7xl">
          <Hero />
        </section>
      </div>
      <div className="container mx-auto flex flex-col gap-8 my-8 py-4  max-w-7xl ">
        <section>
          <div className="flex gap-2 flex-wrap mb-4 justify-start items-center pl-2">
            <h3 className=" text-[2.5rem] md:text-[2rem] leading-12 font-bold mb-4">
              {" "}
              Filter By
            </h3>
            <FilterButton>This Month</FilterButton>
            <FilterButton>This week</FilterButton>
            <FilterButton>This Quarter</FilterButton>
          </div>
          <div>
          <Filter filters={filters} />
          </div>
        </section>
        <section>
          <h3 className="flex justify-start items-center text-[2.5rem] md:text-[2rem] leading-12 font-bold mb-4 pl-2">
            {" "}
            Most Popular Tags
          </h3>
          <Filter filters={tags} />
        </section>
        <section className="md:ml-5">
          <h3 className=" text-[2.5rem] md:text-[2rem] leading-12 font-bold mb-4">
            {" "}
            Top Reviews
          </h3>
          <AllTopReviewCard />
        </section>
        <section>
          <div className="flex justify-between items-center mx-auto">
            <h3 className="text-[2.2rem] md:text-[1.6rem] leading-12 font-bold ml-2 mb-4">
              {" "}
              Reviews Out of 289849
            </h3>
            <FilterButton>View more</FilterButton>
          </div>
          <div className="md:px-4">
            <AllReviewCard />
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
