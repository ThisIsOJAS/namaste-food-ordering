import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
