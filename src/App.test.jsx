import { describe, test } from "vitest";
import { getByText, render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders", () => {
    render(<App />);
  });

  test("Should be hola", () => {
    const { container } = render(<App />);

    const h2 = getByText(container, "Hola");
  });
});
