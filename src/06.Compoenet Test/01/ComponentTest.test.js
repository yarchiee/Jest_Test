import App from "../../App";
import React from "react";
import { render, screen } from "@testing-library/react";

it("renders welcome message", () => {
  render(<App />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});
