import { siteConfig } from "@/config/site";

import client from "./fetch-client";

const restClient = async (
  slug: string,
  method?: string,
  body?: Record<string, any>
): Promise<any> => {
  const response = await client(`${siteConfig.apiUrl}${slug}`, {
    method,
    ...(method !== "GET" ? { body } : {}),
  });

  return response;
};

type Method = "GET" | "PUT" | "POST" | "DELETE";

// TODO: implement generics and strongly type this
export const handler = async (
  slug: string,
  method: Method,
  body: any,
  errorMsg: string,
  selectorFn = (result: any): any => result.data
): Promise<any> => {
  try {
    const result = await restClient(slug, method, body);

    if (result.errors && result.errors.length > 0) {
      return [true, result.errors[0].message];
    }

    if (selectorFn(result)) {
      return [false, selectorFn(result)];
    }

    return [true, errorMsg];
  } catch (error) {
    return [true, errorMsg];
  }
};

export default restClient;
