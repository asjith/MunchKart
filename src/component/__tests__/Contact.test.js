import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("test if Contact page is loaded", () => {
  //render
  render(<Contact />);

  //quering
  const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();
});

it("test if button present in Contact page", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  //console.log(button);
  expect(button).toBeInTheDocument();
});

//grouping of testcases.
describe("Contact testcase using input box", () => {
  test("test if 2 input boxes loaded in Contact page", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    //console.log(input);
    expect(input.length).toBe(2);
  });

  test("test if input box with the mentioned placeholder loaded", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("EMail Id");
    expect(input).toBeInTheDocument();
  });
});
