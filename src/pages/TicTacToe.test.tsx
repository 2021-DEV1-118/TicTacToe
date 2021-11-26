import { render, screen } from "@testing-library/react";

import TicTacToe from "./TicTacToe";
import userEvent from "@testing-library/user-event";

describe("TicTacToe component", () => {
  test("renders TicTacToe", () => {
    render(<TicTacToe />);
    const linkElement = screen.getByText(/TicTacToe/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("should show X on the board when first clicked", () => {
    render(<TicTacToe />);
    const element = screen.getByTestId("cell-1");
    userEvent.click(element);
    const x = screen.getByText("X");
    expect(x).toBeInTheDocument();
  });

  test("should show X and O on the board when clicking different cells", () => {
    render(<TicTacToe />);
    const element = screen.getByTestId("cell-1");
    const element2 = screen.getByTestId("cell-2");
    userEvent.click(element);
    userEvent.click(element2);
    const x = screen.getByText("X");
    const o = screen.getByText("O");
    expect(x).toBeInTheDocument();
    expect(o).toBeInTheDocument();
  });

  test("should not be able to change a cell that was already clicked", () => {
    render(<TicTacToe />);
    const element = screen.getByTestId("cell-1");
    userEvent.click(element);
    userEvent.click(element);
    const x = screen.getByText("X");
    expect(x).toBeInTheDocument();
  });
});
