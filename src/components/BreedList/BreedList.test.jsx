import { findByText, getByText, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "../Card/Card";

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
        data.breed &&
        data.src &&
        data.alt &&
        data.map((element, index) => {
          return (
            <Card
              key={index}
              breed={element.breed}
              src={element.src}
              alt={element.alt}
            />
          );
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

  it("New Breed Renders", () => {
    const breeds = ["Breed 1", "Breed 2"];
    const src = [
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg",
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10048.jpg",
    ];
    const alt = ["Breed 1", "Breed 2"];
    const data = {
      breeds,
      src,
      alt,
    };
    //Arrange
    const { container } = render(<BreedList data={data} />);
    const expectTitle1 = "Breed 1";
    const expectTitle2 = "Breed 2";
    const expectSrc1 =
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg";
    const expectSrc2 =
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10048.jpg";
    const expectAlt1 = "Breed 1";
    const expectAlt2 = "Breed 1";
    //Act
    expect(getByText(container, expectTitle1)).toBeTruthy();
    expect(getByText(container, expectTitle2)).toBeTruthy();
    expect(getByText(container, expectSrc1)).toBeTruthy();
    expect(getByText(container, expectSrc2)).toBeTruthy();
    expect(getByText(container, expectAlt1)).toBeTruthy();
    expect(getByText(container, expectAlt2)).toBeTruthy();
  });

  // it("New ", () => {
  //   const breeds = ["Breed 1", "Breed 2"];
  //   const data = {
  //     breeds,
  //   };
  //   //Arrange
  //   const { container } = render(<BreedList data={data} />);
  //   const expectTitle1 = "Breed 1";
  //   const expectTitle2 = "Breed 2";
  //   //Act
  //   expect(getByText(container, expectTitle1)).toBeTruthy();
  //   expect(getByText(container, expectTitle2)).toBeTruthy();
  // });
});
