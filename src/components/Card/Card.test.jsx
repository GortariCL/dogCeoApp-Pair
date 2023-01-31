import { getByText, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./Card";

describe("", () => {
  it("should render", () => {
    render(<Card />);
  });

  it("should render title correctly", () => {
    //arrange
    const titleExpect = "Husky";
    const { container } = render(<Card breed="Husky" />);
    //act
    const expectedTitle = getByText(container, titleExpect);
    //assert
    expect(expectedTitle).toBeTruthy();
  });

  it("should render an breed image", () => {
    //arrange
    const { container } = render(
      <Card src="https://www.google.com/" alt="dog image" />
    );
    const img = container.querySelector("img");
    //act and assert
    expect(img).toBeTruthy();
    expect(img.src).toBe("https://www.google.com/");
    expect(img.alt).toBe("dog image");
  });
});
