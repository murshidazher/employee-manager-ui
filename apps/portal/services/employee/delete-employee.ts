import { handler } from "@/services/utils/rest-client";

type SuccessResponse = [boolean, { deletedCount: number }];
type ErrorResponse = [boolean, any];

export const deleteEmployee = async (
  id: string
): Promise<ErrorResponse | SuccessResponse> => {
  return handler(
    `/v1/employee/${id}`,
    "DELETE",
    {},
    "Error occurred while deleting the employee",
    (response) => response.data
  );
};
