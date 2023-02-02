import { describe, test } from "vitest";
import { getByText, render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders", () => {
    render(<App />);
  });
});
