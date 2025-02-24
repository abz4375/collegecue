import React from "react";

interface BorderProps {
  bankDetails?: any[];
}

const Border: React.FC<BorderProps> = ({ bankDetails }) => {
  return (
    <div className="max-w-screen-xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-4xl font-semibold" style={{ color: "#160048" }}>
        Bank Details
      </h2>
    </div>
  );
};

export default Border;
