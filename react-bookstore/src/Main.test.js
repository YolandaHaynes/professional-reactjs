import { render, screen } from "@testing-library/react";
import Main from "./Main";

test("renders main page", () => {
  render(<Main />);
  const mainInfo = screen.getByTestId("main");
  expect(mainInfo).toBeInTheDocument();
});
