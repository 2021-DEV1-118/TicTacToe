import { Grid } from "./Grid";
import { render } from "@testing-library/react";

describe("Grid component", () => {
  test("should render 3 rows to display the game board", () => {
    const { container } = render(<Grid />);
    expect(container.getElementsByClassName("grid__row").length).toBe(3);
  });
});
