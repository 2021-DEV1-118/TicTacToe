import { render, screen } from "@testing-library/react";

import TicTacToe from "./TicTacToe";

test("renders TicTacToe", () => {
  render(<TicTacToe />);
  const linkElement = screen.getByText(/TicTacToe/i);
  expect(linkElement).toBeInTheDocument();
});
