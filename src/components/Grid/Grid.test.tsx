import { render, screen } from "@testing-library/react";

import { Grid } from "./Grid";

describe("Grid component", () => {
  test("should render", () => {
    render(<Grid />);
    const text = screen.getByText(/Grid/i);
    expect(text).toBeInTheDocument();
  });
});
