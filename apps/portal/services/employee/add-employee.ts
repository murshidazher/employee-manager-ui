import { Employee, EmployeeAddForm } from "@/app/employee/shared/data/schema";
import { handler } from "@/services/utils/rest-client";

type SuccessResponse = [boolean, Employee];
type ErrorResponse = [boolean, any];

export const addEmployee = async (
  payload: EmployeeAddForm
): Promise<ErrorResponse | SuccessResponse> => {
  return handler(
    "/v1/employee",
    "POST",
    payload,
    "Error occurred while adding the employees",
    (response) => response.data
  );
};
