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

  test("should end in a draw when all cells are full", () => {
    render(<TicTacToe />);
    const element0 = screen.getByTestId("cell-0");
    const element1 = screen.getByTestId("cell-1");
    const element2 = screen.getByTestId("cell-2");
    const element3 = screen.getByTestId("cell-3");
    const element4 = screen.getByTestId("cell-4");
    const element5 = screen.getByTestId("cell-5");
    const element6 = screen.getByTestId("cell-6");
    const element7 = screen.getByTestId("cell-7");
    const element8 = screen.getByTestId("cell-8");
    userEvent.click(element0);
    userEvent.click(element1);
    userEvent.click(element2);
    userEvent.click(element4);
    userEvent.click(element3);
    userEvent.click(element5);
    userEvent.click(element7);
    userEvent.click(element6);
    userEvent.click(element8);
    const gameOverMessage = screen.getByText(/Draw/i);
    expect(gameOverMessage).toBeInTheDocument();
  });

  test("should end when 3 in a row", () => {
    render(<TicTacToe />);
    const element0 = screen.getByTestId("cell-0");
    const element1 = screen.getByTestId("cell-1");
    const element2 = screen.getByTestId("cell-2");
    const element7 = screen.getByTestId("cell-7");
    const element8 = screen.getByTestId("cell-8");
    userEvent.click(element0);
    userEvent.click(element8);
    userEvent.click(element1);
    userEvent.click(element7);
    userEvent.click(element2);
    userEvent.click(element0);
    const winMessage = screen.getByText(/wins/i);
    expect(winMessage).toBeInTheDocument();
  });

  test("should not be able to click cells if there is a winner", () => {
    render(<TicTacToe />);
    const element0 = screen.getByTestId("cell-0");
    const element1 = screen.getByTestId("cell-1");
    const element2 = screen.getByTestId("cell-2");
    const element7 = screen.getByTestId("cell-7");
    const element8 = screen.getByTestId("cell-8");
    userEvent.click(element0);
    userEvent.click(element8);
    userEvent.click(element1);
    userEvent.click(element7);
    userEvent.click(element2);
    userEvent.click(element0);
    const winMessage = screen.getByText(/wins/i);
    expect(winMessage).toBeInTheDocument();

    const elementNew = screen.getByTestId("cell-3");
    userEvent.click(elementNew);
    expect(elementNew.textContent).toBe("");
  });
});
