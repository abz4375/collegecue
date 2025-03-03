import OrgInfo from "@/components/PagesComponent/InfoPage/OrgInfo";
import React from "react";

// Define the generateStaticParams function
export async function generateStaticParams() {
  // Replace this with your logic to fetch or generate the list of IDs
  const institutes = [{ id: "2196" }];

  return institutes.map((institute) => ({
    id: institute.id,
  }));
}

// Fix the params type to be an object with an id property
const Page = ({ params }: { params: { id: number } }) => {
  // Use the params to fetch or display data for the specific institute
  return (
    <div>
      <OrgInfo org="institute" id={params.id} />
    </div>
  );
};

export default Page;