import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import RESTAURANT_MOCK_DATA from "../mocks/RestaurantAPIMock.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  //const data = await fetch(RESTUARNT_API)
  return Promise.resolve({
    json: () => {
      //const json = await data.json()
      return Promise.resolve(RESTAURANT_MOCK_DATA);
    },
  });
});

it("Should search for restaurants having burger", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  //console.log(cardsBeforeSearch);
  expect(cardsBeforeSearch.length).toBe(8);

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });

  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);

  fireEvent.click(screen.getByRole("button", { name: "Clear" }));
  expect(screen.getAllByTestId("resCard").length).toBe(8);
});
