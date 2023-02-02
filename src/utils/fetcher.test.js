import { afterEach, describe, expect, it, vi } from "vitest";
import { fetcher } from "./fetcher";

const data = {
  message: {
    affenpinscher: [],
    bulldog: ["boston", "english", "french"],
    bullterrier: ["staffordshire"],
  },
  status: "success",
};

describe("fetcher test suit", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("should performing the query it will return the data", () => {
    // Arrange & Act
    global.fetch = () =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(data),
      });
    const response = fetcher("https://dog.ceo/api/breeds/list/all");
    // Assert
    expect(response).resolves.toEqual(data);
  });

  it("Error test 500", () => {
    // Arrange && Act
    global.fetch = () =>
      Promise.resolve({
        status: 500,
        json: () => Promise.resolve(),
      });

    const response = fetcher("https://dog.ceo/api/breeds/list/all");
    // Assert

    expect(response).rejects.toThrow(new Error("error"));
  });

  it("Error test 400", () => {
    // Arrange && Act
    global.fetch = () =>
      Promise.resolve({
        status: 400,
        json: () => Promise.resolve(),
      });

    const response = fetcher("https://dog.ceo/api/breeds/list/all");
    // Assert

    expect(response).rejects.toThrow(new Error("error"));
  });
});
