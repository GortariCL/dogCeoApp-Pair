import { findByText, getByText, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

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

const BreedList = ({ data }) => {
  return (
    <>
      {data &&
        data.map((breed) => {
          <h2>{breed.title}</h2>;
        })}
    </>
  );
};
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

  it("Bread renders", () => {
    //Arrange
    const expectTitle1 = "Breed 1";
    // const expectTitle2 = "Breed 2";
    const { container } = render(<BreedList data={data} />);

    //Act
    const expected1 = findByText(container, expectTitle1);
    // const expected2 = getByText(container, expectTitle2);

    //Assert
    expect(expected1).toBe(expectTitle1);
    // expect(expected2).toBeTruthy();
  });
});
