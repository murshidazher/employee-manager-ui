import { act, renderHook } from "@testing-library/react";

import useApi from "./api";

describe("hooks.useApi", () => {
  const setup = (args: {
    outcome: "OK" | "error with string" | "error with object";
  }) => {
    const { outcome } = args;

    let resolvedValue;
    switch (outcome) {
      case "OK":
        resolvedValue = [false, { thing: 42 }];
        break;
      case "error with string":
        resolvedValue = [true, "Something went wrong"];
        break;
      case "error with object":
        resolvedValue = [true, { description: "comes with an object" }];
        break;
      default:
        throw new Error(`Unknown outcome: ${outcome}`);
    }
    const mockFetch = jest.fn().mockResolvedValue(resolvedValue);

    return { mockFetch, ...renderHook(() => useApi(mockFetch)) };
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("before fetch - returns correct values", () => {
    const { result } = setup({ outcome: "OK" });

    expect(result.current.isError).toEqual(false);
    expect(result.current.isLoading).toEqual(false);
    expect(typeof result.current.execute).toEqual("function");
    expect(result.current.result).toEqual(undefined);
  });

  it("fetched OK - correct state", async () => {
    const { result } = setup({ outcome: "OK" });

    await act(async () => {
      await result.current.execute();
    });

    expect(result.current.isError).toEqual(false);
    expect(result.current.result).toEqual({ thing: 42 });
  });

  it("fetched - error with string - correct state", async () => {
    const { result } = setup({ outcome: "error with string" });

    await act(async () => {
      await result.current.execute();
    });

    expect(result.current.isError).toEqual(true);
    expect(result.current.result).toBeUndefined();
  });

  it("fetched - error with object - correct state", async () => {
    const { result } = setup({ outcome: "error with object" });

    await act(async () => {
      await result.current.execute();
    });

    expect(result.current.isError).toEqual(false);
    expect(result.current.result).toEqual({
      description: "comes with an object",
    });
  });

  it("execute() executes original fetch function transparently", async () => {
    const { result, mockFetch } = setup({ outcome: "OK" });

    await act(async () => {
      await result.current.execute("foo", "bar");
    });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith("foo", "bar");
  });
});
