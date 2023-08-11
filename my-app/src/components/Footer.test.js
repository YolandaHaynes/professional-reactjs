import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders footer page", () => {
  render(<Footer />);
  const footerInfo = screen.getByText(/This is the footer/i);
  expect(footerInfo).toBeInTheDocument();
});
