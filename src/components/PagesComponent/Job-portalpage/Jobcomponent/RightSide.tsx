'use client';
import React, { useState } from 'react';
import jobListings from "../../../DummyData/JobRightsideData";
import RightSideCard from '../../../../components/PagesComponent/Job-portalpage/Jobcomponent/RightSideCard';

type JobId = string | number | null;

interface RightSideProps {
  selectedJobId: JobId;
}

const RightSide: React.FC<RightSideProps> = ({
  selectedJobId,
}) => {
  // Filter job listings to show only the selected job (if one is selected)
  const filteredJob = selectedJobId 
    ? jobListings.filter(job => job.id === selectedJobId)
    : jobListings;

  return (
    <div className=" mx-auto sm:min-w-full p-4">
      {filteredJob.length > 0 ? (
        filteredJob.map((job) => (
          <RightSideCard key={job.id} {...job} />
        ))
      ) : (
        <div>No job selected or job not found</div>
      )}
    </div>
  );
};

export default RightSide;
// const RightSide = () => {

    // const [currentPage, setCurrentPage] = useState(1);
    // const jobsPerPage = 5;
    // const indexOfLastJob = currentPage * jobsPerPage;
    // const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    // const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);
    // const totalPages = Math.ceil(jobListings.length / jobsPerPage);

    // const handlePageChange = (pageNumber: number) => {
    //     setCurrentPage(pageNumber);
    // };

    // const [sortby, setSortby] = useState("");
    // const [sortAction, setSortAction] = useState([
    //     { value: 1, sortBy: "Price Sort" },
    //     { value: 2, sortBy: "Low To High" },
    //     { value: 3, sortBy: "High To Low" },
    // ]);

    // const handleSortbychange = (e: any) => {
    //     setSortby(e.target.value);
    // };


//     return (
//         <div className="container mx-auto  sm:min-w-full p-4">
//       {jobListings.map((job) => (
//         <RightSideCard key={job.id} {...job} />
//       ))}
//     </div>
       
//     )
// }

// export default RightSide;

 // <div className='w-auto flex flex-col'>
            {/* <div className='flex flex-row items-center justify-evenly'> */}
                {/* <div>
                    All{" "}
                    <span className='font-bold text-black'>{jobListings.length}</span>{" "}
                    jobs found
                </div>
                <div className='w-[120px] flex items-center'>
                    <form className='max-w-full'>
                        <select id="sort-select" onChange={handleSortbychange}
                            className="border-none text-base font-light py-2 px-2 rounded-xl"
                            value={sortby}
                        >
                            {sortAction.map((sort) => (
                                <option
                                    key={sort.value}
                                    value={sort.value}
                                    className="relative tracking-wider leading-6 text-[16px] font-light max-w-full outline-none text-left">
                                    {sort.sortBy}
                                </option>
                            ))
                            }
                        </select>
                    </form>
                </div> */}

            {/* </div> */}
            {/* <div>
                <div className="w-[90%] mx-auto flex justify-center sm:overflow-x-scroll mt-20 rounded-2xl visible mb-20 sm:hidden">
                    <table className="min-w-[450px] w-full rounded-2xl sm:ml-36" aria-label="caption table">
                        <tbody>
                            {currentJobs.map((job, index) => (
                                <RightSideCard key={index} {...job} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center">
                {/* Pagination */}
        //         {Array.from({ length: totalPages }, (_, i) => (
        //             <button
        //                 key={i}
        //                 onClick={() => handlePageChange(i + 1)}
        //                 className={`mx-1 px-3 py-1 rounded-md ${
        //                     currentPage === i + 1 ? 'bg-gray-400 text-white' : 'bg-gray-200 text-gray-800'
        //                 }`}
        //             >
        //                 {i + 1}
        //             </button>
        //         ))}
        //     </div>

        // </div> */}
// const RightSide = () => {

    // const [currentPage, setCurrentPage] = useState(1);
    // const jobsPerPage = 5;
    // const indexOfLastJob = currentPage * jobsPerPage;
    // const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    // const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);
    // const totalPages = Math.ceil(jobListings.length / jobsPerPage);

    // const handlePageChange = (pageNumber: number) => {
    //     setCurrentPage(pageNumber);
    // };

    // const [sortby, setSortby] = useState("");
    // const [sortAction, setSortAction] = useState([
    //     { value: 1, sortBy: "Price Sort" },
    //     { value: 2, sortBy: "Low To High" },
    //     { value: 3, sortBy: "High To Low" },
    // ]);

    // const handleSortbychange = (e: any) => {
    //     setSortby(e.target.value);
    // };


//     return (
//         <div className="container mx-auto  sm:min-w-full p-4">
//       {jobListings.map((job) => (
//         <RightSideCard key={job.id} {...job} />
//       ))}
//     </div>
       
//     )
// }

// export default RightSide;

 // <div className='w-auto flex flex-col'>
            {/* <div className='flex flex-row items-center justify-evenly'> */}
                {/* <div>
                    All{" "}
                    <span className='font-bold text-black'>{jobListings.length}</span>{" "}
                    jobs found
                </div>
                <div className='w-[120px] flex items-center'>
                    <form className='max-w-full'>
                        <select id="sort-select" onChange={handleSortbychange}
                            className="border-none text-base font-light py-2 px-2 rounded-xl"
                            value={sortby}
                        >
                            {sortAction.map((sort) => (
                                <option
                                    key={sort.value}
                                    value={sort.value}
                                    className="relative tracking-wider leading-6 text-[16px] font-light max-w-full outline-none text-left">
                                    {sort.sortBy}
                                </option>
                            ))
                            }
                        </select>
                    </form>
                </div> */}

            {/* </div> */}
            {/* <div>
                <div className="w-[90%] mx-auto flex justify-center sm:overflow-x-scroll mt-20 rounded-2xl visible mb-20 sm:hidden">
                    <table className="min-w-[450px] w-full rounded-2xl sm:ml-36" aria-label="caption table">
                        <tbody>
                            {currentJobs.map((job, index) => (
                                <RightSideCard key={index} {...job} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center">
                {/* Pagination */}
        //         {Array.from({ length: totalPages }, (_, i) => (
        //             <button
        //                 key={i}
        //                 onClick={() => handlePageChange(i + 1)}
        //                 className={`mx-1 px-3 py-1 rounded-md ${
        //                     currentPage === i + 1 ? 'bg-gray-400 text-white' : 'bg-gray-200 text-gray-800'
        //                 }`}
        //             >
        //                 {i + 1}
        //             </button>
        //         ))}
        //     </div>

        // </div> */}
// const RightSide = () => {

    // const [currentPage, setCurrentPage] = useState(1);
    // const jobsPerPage = 5;
    // const indexOfLastJob = currentPage * jobsPerPage;
    // const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    // const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);
    // const totalPages = Math.ceil(jobListings.length / jobsPerPage);

    // const handlePageChange = (pageNumber: number) => {
    //     setCurrentPage(pageNumber);
    // };

    // const [sortby, setSortby] = useState("");
    // const [sortAction, setSortAction] = useState([
    //     { value: 1, sortBy: "Price Sort" },
    //     { value: 2, sortBy: "Low To High" },
    //     { value: 3, sortBy: "High To Low" },
    // ]);

    // const handleSortbychange = (e: any) => {
    //     setSortby(e.target.value);
    // };


//     return (
//         <div className="container mx-auto  sm:min-w-full p-4">
//       {jobListings.map((job) => (
//         <RightSideCard key={job.id} {...job} />
//       ))}
//     </div>
       
//     )
// }

// export default RightSide;

 // <div className='w-auto flex flex-col'>
            {/* <div className='flex flex-row items-center justify-evenly'> */}
                {/* <div>
                    All{" "}
                    <span className='font-bold text-black'>{jobListings.length}</span>{" "}
                    jobs found
                </div>
                <div className='w-[120px] flex items-center'>
                    <form className='max-w-full'>
                        <select id="sort-select" onChange={handleSortbychange}
                            className="border-none text-base font-light py-2 px-2 rounded-xl"
                            value={sortby}
                        >
                            {sortAction.map((sort) => (
                                <option
                                    key={sort.value}
                                    value={sort.value}
                                    className="relative tracking-wider leading-6 text-[16px] font-light max-w-full outline-none text-left">
                                    {sort.sortBy}
                                </option>
                            ))
                            }
                        </select>
                    </form>
                </div> */}

            {/* </div> */}
            {/* <div>
                <div className="w-[90%] mx-auto flex justify-center sm:overflow-x-scroll mt-20 rounded-2xl visible mb-20 sm:hidden">
                    <table className="min-w-[450px] w-full rounded-2xl sm:ml-36" aria-label="caption table">
                        <tbody>
                            {currentJobs.map((job, index) => (
                                <RightSideCard key={index} {...job} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center">
                {/* Pagination */}
        //         {Array.from({ length: totalPages }, (_, i) => (
        //             <button
        //                 key={i}
        //                 onClick={() => handlePageChange(i + 1)}
        //                 className={`mx-1 px-3 py-1 rounded-md ${
        //                     currentPage === i + 1 ? 'bg-gray-400 text-white' : 'bg-gray-200 text-gray-800'
        //                 }`}
        //             >
        //                 {i + 1}
        //             </button>
        //         ))}
        //     </div>

        // </div> */}

// const RightSide = () => {

    // const [currentPage, setCurrentPage] = useState(1);
    // const jobsPerPage = 5;
    // const indexOfLastJob = currentPage * jobsPerPage;
    // const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    // const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);
    // const totalPages = Math.ceil(jobListings.length / jobsPerPage);

    // const handlePageChange = (pageNumber: number) => {
    //     setCurrentPage(pageNumber);
    // };

    // const [sortby, setSortby] = useState("");
    // const [sortAction, setSortAction] = useState([
    //     { value: 1, sortBy: "Price Sort" },
    //     { value: 2, sortBy: "Low To High" },
    //     { value: 3, sortBy: "High To Low" },
    // ]);

    // const handleSortbychange = (e: any) => {
    //     setSortby(e.target.value);
    // };


//     return (
//         <div className="container mx-auto  sm:min-w-full p-4">
//       {jobListings.map((job) => (
//         <RightSideCard key={job.id} {...job} />
//       ))}
//     </div>
       
//     )
// }

// export default RightSide;

 // <div className='w-auto flex flex-col'>
            {/* <div className='flex flex-row items-center justify-evenly'> */}
                {/* <div>
                    All{" "}
                    <span className='font-bold text-black'>{jobListings.length}</span>{" "}
                    jobs found
                </div>
                <div className='w-[120px] flex items-center'>
                    <form className='max-w-full'>
                        <select id="sort-select" onChange={handleSortbychange}
                            className="border-none text-base font-light py-2 px-2 rounded-xl"
                            value={sortby}
                        >
                            {sortAction.map((sort) => (
                                <option
                                    key={sort.value}
                                    value={sort.value}
                                    className="relative tracking-wider leading-6 text-[16px] font-light max-w-full outline-none text-left">
                                    {sort.sortBy}
                                </option>
                            ))
                            }
                        </select>
                    </form>
                </div> */}

            {/* </div> */}
            {/* <div>
                <div className="w-[90%] mx-auto flex justify-center sm:overflow-x-scroll mt-20 rounded-2xl visible mb-20 sm:hidden">
                    <table className="min-w-[450px] w-full rounded-2xl sm:ml-36" aria-label="caption table">
                        <tbody>
                            {currentJobs.map((job, index) => (
                                <RightSideCard key={index} {...job} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center">
                {/* Pagination */}
        //         {Array.from({ length: totalPages }, (_, i) => (
        //             <button
        //                 key={i}
        //                 onClick={() => handlePageChange(i + 1)}
        //                 className={`mx-1 px-3 py-1 rounded-md ${
        //                     currentPage === i + 1 ? 'bg-gray-400 text-white' : 'bg-gray-200 text-gray-800'
        //                 }`}
        //             >
        //                 {i + 1}
        //             </button>
        //         ))}
        //     </div>

        // </div> */}