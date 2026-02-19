import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio sections", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /contact me/i })
  ).toBeInTheDocument();
});
