"use client";

import Loading from "@/app/employee/shared/components/loading";
import { UpsertEmployeeProfileView } from "@/app/employee/shared/components/upsert-employee-profile-view";
import { Employee } from "@/app/employee/shared/data/schema";
import useApi from "@/hooks/api";
import { getEmployee } from "@/services/employee/get-employee";
import * as React from "react";

interface DataEditViewProps {
  id: string;
}

const DataEditView = ({ id }: DataEditViewProps) => {
  const {
    execute: fetchEmployee,
    result: profile,
    isLoading,
  } = useApi<Employee>(getEmployee);

  React.useEffect(() => {
    fetchEmployee(id);
  }, [fetchEmployee]);

  return !profile || isLoading ? (
    <Loading />
  ) : (
    <div className="mt2">
      <UpsertEmployeeProfileView profile={profile} />
    </div>
  );
};

export default DataEditView;
