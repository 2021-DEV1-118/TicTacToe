import { render, screen } from "@testing-library/react";

import TicTacToe from "./TicTacToe";
import userEvent from "@testing-library/user-event";

describe("TicTacToe component", () => {
  test("renders TicTacToe", () => {
    const { container } = render(<TicTacToe />);
    expect(container.getElementsByClassName("game__container").length).toBe(1);
  });

  test("should show X on the board when first clicked", () => {
    render(<TicTacToe />);
    const element = screen.getByTestId("cell-1");
    userEvent.click(element);
    expect(element.textContent).toBe("X");
  });

  test("should show X and O on the board when clicking different cells", () => {
    render(<TicTacToe />);
    const element = screen.getByTestId("cell-1");
    const element2 = screen.getByTestId("cell-2");
    userEvent.click(element);
    userEvent.click(element2);
    expect(element.textContent).toBe("X");
    expect(element2.textContent).toBe("O");
  });

  test("should not be able to change a cell that was already clicked", () => {
    render(<TicTacToe />);
    const element = screen.getByTestId("cell-1");
    userEvent.click(element);
    userEvent.click(element);
    expect(element.textContent).toBe("X");
  });

  test("should end in a draw when all cells are full", () => {
    playGameDraw();
    const gameOverMessage = screen.getByText(/draw/i);
    expect(gameOverMessage).toBeInTheDocument();
  });

  test("should end when 3 in a row", () => {
    playGameWin();
    const winMessage = screen.getByText(/wins/i);
    expect(winMessage).toBeInTheDocument();
  });

  test("should show play again button when game has ended (win)", () => {
    playGameWin();
    const playAgainButton = screen.getByTestId("btn-play-again");
    expect(playAgainButton).toBeInTheDocument();
  });

  test("should show play again button when game has ended (draw)", () => {
    playGameDraw();
    const playAgainButton = screen.getByTestId("btn-play-again");
    expect(playAgainButton).toBeInTheDocument();
  });

  test("should not be able to click cells if there is a winner", () => {
    playGameWin();
    const element = screen.getByTestId("cell-3");
    userEvent.click(element);
    expect(element.textContent).toBe("");
  });
});

const playGameWin = () => {
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
};

const playGameDraw = () => {
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
};
