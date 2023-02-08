import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Form } from "./Form";

describe("given the <Form />", () => {
  const mockOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  it("should render", () => {
    render(<Form />);
  });

  it("should return a button", () => {
    // Act
    const { container } = render(<Form />);
    const button = container.querySelector("button");

    expect(button.textContent).toBe("Buscar");
  });
  it("should must return a function received by props", () => {
    // Arrange
    const mockFn = vi.fn((e) => e.preventDefault());
    const { container } = render(<Form handler={mockFn} />);
    const button = container.querySelector("button");
    // Act
    fireEvent.click(button);
    // Assert
    expect(mockFn).toHaveBeenCalled();
  });

  it("Should be render correctly number of options", () => {
    // Act && Arrange
    render(<Form options={mockOptions} />);

    // Assert
    expect(screen.getAllByRole("option").length).toBe(3);
  });
  // TODO: FIX RENDER SELECT 2 TIMES
  it("should return an input", () => {
    // Act && Arrange
    const { container } = render(<Form options={mockOptions} />);
    const input = container.querySelector("input");

    // Assert
    expect(input.type).toBe("text");
  });
});
