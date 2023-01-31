import { getByText, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BreedList } from "./BreedList";

const data = [
  {
    title: "Breed 1",
    src: "https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg",
    alt: "Breed 1",
  },
  {
    title: "Breed 2",
    src: "https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg",
    alt: "Breed 2",
  },
];

describe("Breed suite test", () => {
  it("Should render", () => {
    render(<BreedList />);
  });

  it("Should be render ... ", () => {
    // Act
    const titleArr = data.map((title) => title.title);
    const srcArr = data.map((src) => src.src);
    const altArr = data.map((alt) => alt.alt);

    // Expect
    expect(titleArr).toEqual(["Breed 1", "Breed 2"]);
    expect(srcArr).toEqual([
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg",
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg",
    ]);
    expect(altArr).toEqual(["Breed 1", "Breed 2"]);
  });

  it("New Breed Renders", () => {
    //Arrange
    const { container } = render(<BreedList data={data} />);
    const expectTitle1 = "Breed 1";
    const expectTitle2 = "Breed 2";
    const expectSrc1 =
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg";
    const expectSrc2 =
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg";
    const expectAlt1 = "Breed 1";
    const expectAlt2 = "Breed 2";

    //Act And Assert
    expect(getByText(container, expectTitle1)).toBeTruthy();
    expect(getByText(container, expectTitle2)).toBeTruthy();
    expect(expectSrc1).toEqual(data[0].src);
    expect(expectSrc2).toEqual(data[1].src);
    expect(getByText(container, expectAlt1)).toBeTruthy();
    expect(getByText(container, expectAlt2)).toBeTruthy();
  });
});
