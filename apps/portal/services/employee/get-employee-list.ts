import { Employee } from "@/app/employee/shared/data/schema";
import { handler } from "@/services/utils/rest-client";

type SuccessResponse = [boolean, Array<Employee>];
type ErrorResponse = [boolean, any];

export const getEmployeeList = async (): Promise<
  ErrorResponse | SuccessResponse
> => {
  return handler(
    "/v1/employee",
    "GET",
    {},
    "Error occurred while fetching the employees",
    (response) => response.data
  );
};
