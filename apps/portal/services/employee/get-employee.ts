import { Employee } from "@/app/employee/shared/data/schema";
import { handler } from "@/services/utils/rest-client";

type SuccessResponse = [boolean, Employee];
type ErrorResponse = [boolean, any];

export const getEmployee = async (
  id: string
): Promise<ErrorResponse | SuccessResponse> => {
  return handler(
    `/v1/employee/${id}`,
    "GET",
    {},
    `Error occurred while fetching the employee with id: ${id}`,
    (response) => response.data[0]
  );
};
