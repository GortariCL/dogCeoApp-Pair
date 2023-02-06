import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";
import { describe, expect, it } from "vitest";

const BreedSearchInput = (breed) => {
  const [value, setValue] = useState(false);

  // const handleChange = (event) => {
  //   setValue({ ...value, [event.target.name]: event.target.value });
  // };

  const handleChange = (event) => {
    setValue(true);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <>
      <form data-testid="form" action={onSearchSubmit} role="form">
        <input type="text" onChange={handleChange} name="breed" />
        <button>Search</button>
      </form>
      {value && <h2>It's ok with breed</h2>}
    </>
  );
};

describe("BreedSearchInput", () => {
  it("Render", () => {
    render(<BreedSearchInput breed="Husky" />);
  });

  // it("Should be render a input with label 'Search'.", () => {
  //   // Arrange
  //   const breed = "Husky";
  //   //Act
  //   render(<BreedSearchInput breed={breed} />);
  //   //Assert
  //   expect(screen.getByRole("form")).toHaveFormValues({ breed: "Husky" });
  // });

  it("Shoudld be render an input", async () => {
    // Arrange
    render(<BreedSearchInput breed="Husky" />);
    fireEvent.click(screen.getByTestId("form"));
    // Act
    const breeds = await screen.findByText("It's ok with breed");
    // Assert
    expect(breeds).toBeTruthy();
  });
});
