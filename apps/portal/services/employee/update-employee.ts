import { EmployeeAddForm } from "@/app/employee/shared/data/schema";
import { handler } from "@/services/utils/rest-client";

type SuccessResponse = [boolean, { modifiedCount: number }];
type ErrorResponse = [boolean, any];

export const updateEmployee = async (
  id: string,
  payload: Partial<EmployeeAddForm>
): Promise<ErrorResponse | SuccessResponse> => {
  return handler(
    `/v1/employee/${id}`,
    "PUT",
    payload,
    "Error occurred while updating the employees",
    (response) => response.data
  );
};
