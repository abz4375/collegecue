import Link from "next/link";

const ViewAllButton = ({linkto} : {linkto: string}) => {
  return (
    <button>
      <div className="flex justify-end ">
        <Link
          href={linkto}
          className="font-medium text-blue-500 border-b-2 border-blue-500 relative w-fit mb-6 mr-3"
        >
          View All
        </Link>
      </div>
    </button>
  );
};

export default ViewAllButton;
