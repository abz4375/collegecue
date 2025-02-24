"use client";
import { motion } from "framer-motion";

interface FacultyProps {
  name: string;
  designation: string;
  detail: string;
}

export const Faculty: React.FC<FacultyProps> = ({
  name,
  designation,
  detail,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4"
    >
      <div className="ml-12 ">
        <p className="text-blue-900 text-lg font-semibold">{name}</p>
        <p className="text-gray-600 text-opacity-60 text-sm font-semibold">{designation}</p>
        <p className="text-gray-800 text-sm">{detail}</p>
      </div>
    </motion.div>
  );
};
