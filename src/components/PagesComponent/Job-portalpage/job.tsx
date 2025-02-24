"use client";
import React from "react";
import jobListings from "./../../DummyData/JobRightsideData";
import JobListpage from "../../../components/PagesComponent/Job-portalpage/Jobcomponent/Joblistpage"; // Adjust path as needed

const JobList = () => {
    return (
        <div className="w-auto flex flex-col">
            <h1 className="text-xl font-bold text-center my-5">All Job Listings</h1>
            <div className="w-[90%] mx-auto sm:w-full flex justify-center mt-5 rounded-2xl">
                <table className="min-w-[450px] w-full rounded-2xl">
                    <tbody>
                        {jobListings.map((job) => (
                            <JobListpage key={job.id} {...job} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;
