import fetchClient from "../fetch-client";

const client = jest.fn(
  async (
    ...args: Parameters<typeof fetchClient>
  ): ReturnType<typeof fetchClient> => {
    return await Promise.resolve({
      json: () => [],
      headers: { get: (key: string): string => "" },
    });
  }
);

export default client;
