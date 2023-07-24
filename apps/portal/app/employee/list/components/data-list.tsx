"use client";

import Loading from "@/app/employee/shared/components/loading";
import useApi from "@/hooks/api";
import { getEmployeeList } from "@/services/employee/get-employee-list";
import * as React from "react";

import { Employee } from "../../shared/data/schema";
import { EmployeeListContext } from "../context/employee-list";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const DataList = () => {
  const {
    execute: fetchEmployeeList,
    result: employees,
    isLoading,
  } = useApi<Array<Employee>>(getEmployeeList);

  // TODO: refactor and manage this state transition using jotai
  const [updated, setUpdated] = React.useState(true);

  React.useEffect(() => {
    fetchEmployeeList();
  }, [updated]);

  return !employees?.length || isLoading ? (
    <Loading />
  ) : (
    <EmployeeListContext.Provider
      value={{
        updated,
        setUpdated,
      }}
    >
      <DataTable data={employees} columns={columns} />
    </EmployeeListContext.Provider>
  );
};

export default DataList;
