import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/RestaurantAPIMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should test if offline", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Body />
        </Provider>
      </BrowserRouter>
    );
  });

  fireEvent(window, new Event("offline"));
  expect(screen.getByText("No Internet")).toBeInTheDocument();
  expect(screen.getByText("Online Statue:🔴")).toBeInTheDocument();

  fireEvent(window, new Event("online"));
  expect(screen.getAllByTestId("resCard").length).toBe(8);
  expect(screen.getByText("Online Statue:🟢")).toBeInTheDocument();
});
