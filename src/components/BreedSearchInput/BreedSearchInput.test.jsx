import { render, screen } from "@testing-library/react";
import { useState } from "react";
import { describe, expect, it } from "vitest";

const BreedSearchInput = (breed) => {
  const [value, setValue] = useState({ breed });

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form action="" role={"form"}>
        <input type="text" onChange={handleChange} name="breed" />
      </form>
    </>
  );
};

describe("BreedSearchInput", () => {
  it("Render", () => {
    render(<BreedSearchInput breed="Husky" />);
  });

  it("Should be render a input with label 'Search'.", () => {
    // Arrange
    const breed = "Husky";
    //Act
    render(<BreedSearchInput breed={breed} />);
    //Assert
    expect(screen.getByRole("form")).toHaveFormValues({ breed: "Husky" });
  });
});
