import OrgInfo from "@/components/PagesComponent/InfoPage/OrgInfo";
import React from "react";

// Define the generateStaticParams function
export async function generateStaticParams() {
  // Replace this with your logic to fetch or generate the list of IDs
  const institutes = [{ id: "ims_cata" }, { id: "2" }, { id: "3" }];

  return institutes.map((institute) => ({
    id: institute.id,
  }));
}

const Page = ({ params }: { params: any }) => {
  // Use the params to fetch or display data for the specific institute
  return (
    <>
      <OrgInfo org="institute" id={params.id} />
    </>
  );
};

export default Page;
