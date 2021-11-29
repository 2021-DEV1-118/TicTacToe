import { render, screen } from "@testing-library/react";

import { Cell } from "./Cell";
import userEvent from "@testing-library/user-event";

describe("Cell component", () => {
  test("should render", () => {
    render(<Cell />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should call onClick prop when clicked", () => {
    const onClick = jest.fn();
    render(<Cell onClick={onClick} />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("should show the prop value as text", () => {
    render(<Cell value={"X"} />);
    const text = screen.getByText("X");
    expect(text).toBeInTheDocument();
  });

  test("should show no text if null is passed as prop value", () => {
    render(<Cell value={null} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.textContent).toEqual("");
  });
});
