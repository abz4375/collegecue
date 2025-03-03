import React from "react";
import TableData from "./TableData";
import Table from "./Table";

const TableContainer = () => {
  return (
    <div>
      <Table placementsData={TableData} />
    </div>
  );
};

export default TableContainer;
