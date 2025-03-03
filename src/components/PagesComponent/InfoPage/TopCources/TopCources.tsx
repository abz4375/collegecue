import { TbPointFilled } from "react-icons/tb";

const TopCourses: React.FC = () => {
  return (
    <div className=" flex flex-col mt-8 rounded-3xl p-6 gap-5 bg-white shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] sm:w-auto">
      <p className="font-bold text-center text-2xl text-black mb-4">
        Top Courses
      </p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-[12px] text-gray-800">
            Ph.D Finance & Accounts
          </p>
          <p className="font-semibold text-[12px] text-gray-800">
            Ph.D Marketing
          </p>
          <p className="font-semibold text-[12px] text-gray-800">PGPM</p>
        </div>
        <div className="flex flex-col  space-y-3">
          <p className="  flex items-center font-semibold text-sm text-gray-400">
            <TbPointFilled className="items-center w-4 h-4 mr-1" /> 5 Years
          </p>
          <p className=" flex items-center font-semibold text-sm text-gray-400">
            <TbPointFilled className="w-4 h-4 mr-1" /> 5 Years
          </p>
          <p className="flex items-center font-semibold text-sm text-gray-400">
            <TbPointFilled className="w-4 h-4 mr-1" /> 2 Years
          </p>
        </div>
      </div>
      <div className=" flexitems-center font-semibold text-base bg-green-700 bg-opacity-10 text-center py-1 rounded-lg text-green-700">
        Avg. Fee : ₹1,225,000 / Yr
      </div>
      <button className="px-5 py-2 font-semibold text-sm hover:bg-blue-100 hover:border-blue-100 hover:bg-opacity-75 transition-all duration-300 text-blue-500 border-gray-300 border  rounded-lg mt-4">
        View More Courses (14)
      </button>
    </div>
  );
};

export default TopCourses;
