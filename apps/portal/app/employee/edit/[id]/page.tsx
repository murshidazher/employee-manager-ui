import { UpsertEmployeeProfileView } from "@/app/employee/shared/components/upsert-employee-profile-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit employee",
  description: "Update the employee record",
};

interface EditPageProps {
  params: {
    id: string;
  };
}

const EditPage = ({ params }: EditPageProps) => {
  const { id } = params;

  if (!id) return {};

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Edit Employee {id}
            </h2>
            <p className="text-muted-foreground">
              Update an existing employee record
            </p>
          </div>
        </div>
        <div className="mt2">
          <UpsertEmployeeProfileView />
        </div>
      </div>
    </>
  );
};

export default EditPage;
