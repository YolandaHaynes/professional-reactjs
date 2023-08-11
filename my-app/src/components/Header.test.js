import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders header", () => {
  render(<Header />);
  const headerTitle = screen.getByText(/welcome/i);
  expect(headerTitle).toBeInTheDocument();
});
