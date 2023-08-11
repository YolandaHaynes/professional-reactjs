import { render, screen } from "@testing-library/react";
import App from "./App";

test("loads items", () => {
  render(<App />);
  const containerDiv = screen.getByTestId("app");
  expect(containerDiv).toBeInTheDocument();
});
