import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const Form = ({ handler }) => {
  return (
    <form onSubmit={handler}>
      <input type="text" />
      <button>Buscar</button>
    </form>
  );
};

describe("given the <Form />", () => {
  it("should render", () => {
    render(<Form />);
  });

  it("should return a button", () => {
    // Act
    const { container } = render(<Form />);
    const button = container.querySelector("button");

    expect(button.textContent).toBe("Buscar");
  });

  it("should return an input", () => {
    // Act
    const { container } = render(<Form />);
    const input = container.querySelector("input");

    expect(input.type).toBe("text");
  });

  it("should must return a function received by props", () => {
    // Arrange
    const mockFn = vi.fn((e) => e.preventDefault());
    const { container } = render(<Form handler={mockFn}/>);
    const button = container.querySelector("button");
    // Act
    fireEvent.click(button);
    // Assert
    expect(mockFn).toHaveBeenCalled();
  });
});
