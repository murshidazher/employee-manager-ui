import client from "./fetch-client";

describe("utils.fetch-client", () => {
  beforeEach(() => {
    const mockFetchPromise = Promise.resolve({
      json: () => [],
      headers: { get: (): any => [] },
    });

    window.fetch = jest.fn().mockImplementation(async (): Promise<any> => {
      return await mockFetchPromise;
    });
  });

  test("calls fetch at the endpoint with the arguments for GET requests", async () => {
    await client("foo");
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith("foo", {
      method: "GET",
      headers: {},
    });
  });

  test("calls fetch at the endpoint with the arguments for PUT requests", async () => {
    await client("foo", { method: "PUT" });
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith("foo", {
      method: "PUT",
      headers: {},
    });
  });

  test("allows for config overrides", async () => {
    await client("foo", {
      cache: "no-cache",
      headers: { "content-type": "fake-type" },
    });
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith("foo", {
      method: "GET",
      cache: "no-cache",
      headers: {
        "content-type": "fake-type",
      },
    });
  });

  test("calls fetch at the endpoint with POST method and json payload", async () => {
    const payload = {
      sample_key: "sample_value",
    };

    window.localStorage.setItem("AUTH_TOKEN_KEY", "FAKE_TOKEN");
    await client("foo", { body: payload });
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith("foo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    window.localStorage.removeItem("AUTH_TOKEN_KEY");
  });

  test("calls fetch at the endpoint with form data", async () => {
    const formData: FormData = new FormData();
    formData.append("file", "fake_data");

    await client("foo", { body: formData });
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith("foo", {
      method: "POST",
      headers: {},
      body: formData,
    });
  });
});
