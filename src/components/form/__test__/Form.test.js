import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../Form";

describe("Form tests", () => {
  it("should render the heading of the form", async () => {
    render(<Form />);
    const headingElement = screen.getByRole("heading", {
      name: "What kind of company do you run?",
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("should contain an input field", async () => {
    render(<Form />);
    const formElement = screen.getByRole("textbox", {
      name: /textbox/i,
    });
    expect(formElement).toContainHTML("input");
  });
});
