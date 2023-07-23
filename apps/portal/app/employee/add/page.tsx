import { Metadata } from "next";

import { UpsertEmployeeProfileView } from "../shared/components/upsert-employee-profile-view";

export const metadata: Metadata = {
  title: "Add employee",
  description: "Add a new employee profile for onboarding.",
};

export default async function AddPage() {
  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Create New Employee
            </h2>
            <p className="text-muted-foreground">
              Add a new employee profile for onboarding
            </p>
          </div>
        </div>
        <div className="mt2">
          <UpsertEmployeeProfileView />
        </div>
      </div>
    </>
  );
}
