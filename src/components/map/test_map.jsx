import { render, screen } from "@testing-library/react";
import Map from "./Map";

test("renders map component", () => {
  render(<Map />);
  const inputElement = screen.getByPlaceholderText(/Enter city/i);
  expect(inputElement).toBeInTheDocument();
  const buttonElement = screen.getByRole("button", { name: /search/i });
  expect(buttonElement).toBeInTheDocument();
  const mapElement = screen.getByTestId("map");
  expect(mapElement).toBeInTheDocument();
});
