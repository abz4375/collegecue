"use client";
import React from "react";
import JobListPage from "../../../components/PagesComponent/Job-portalpage/Jobcomponent/Joblistpage"; // Import the JobListPage component
import jobListings from "../../../components/DummyData/JobRightsideData"; // Import the job data
import { Dispatch, SetStateAction } from "react";

type JobId = string | number | null;

interface JobListContainerProps {
  selectedJobId?: JobId;
  setSelectedJobId?: Dispatch<SetStateAction<JobId>>;
}

const JobListContainer: React.FC<JobListContainerProps> = ({
  selectedJobId,
  setSelectedJobId,
}) => {
  return (
    <div className="container mx-auto sm:min-w-full p-4">
      {jobListings.map((job) => (
        <div
          key={job.id}
          onClick={() => setSelectedJobId && setSelectedJobId(job.id)}
          className={`${selectedJobId === job.id ? "brightness-[96.5%]" : ""}`}
        >
          {/* separate component for Job Description on right side */}
          <JobListPage {...job} />
        </div>
      ))}
    </div>
  );
};

export default JobListContainer;
