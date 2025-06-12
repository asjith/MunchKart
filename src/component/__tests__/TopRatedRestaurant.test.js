import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/RestaurantAPIMock.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should display top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topBtn = screen.getByRole("button", { name: "Top Rated Restaurant" });
  fireEvent.click(topBtn);

  const topCards = screen.getAllByTestId("resCard");
  expect(topCards.length).toBe(6);
});
