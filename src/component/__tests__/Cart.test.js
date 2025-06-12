import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/RestaurantMenuAPI.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Restaurant Menu component and add items to cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  //Restaurant Menu shows Recommended(20) category
  const categ = screen.getByText("Recommended (20)");
  fireEvent.click(categ);

  //Once you click Recommended catgeory, 20 items are displayed in Accordian body
  const items = screen.getAllByTestId("itemCard");
  expect(items.length).toBe(20);

  //As of now, no items are put in Cart
  expect(screen.getByText("The Cart is empty.")).toBeInTheDocument();

  //Putting the first item in Cart
  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - 1")).toBeInTheDocument();

  //Putting the second item in Cart
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - 2")).toBeInTheDocument();

  //Cart page displays the 2 items
  expect(screen.getAllByTestId("itemCard").length).toBe(22);

  //Clearing the Cart
  fireEvent.click(screen.getByRole("button", { name: "Clear All" }));
  expect(screen.getAllByTestId("itemCard").length).toBe(20);
  expect(screen.getByText("The Cart is empty.")).toBeInTheDocument();
});

it("Should add items to cart for nested category", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    );
  });
  fireEvent.click(screen.getByText("Chai"));
  const milkTeaItems = screen.getByText("Milk based tea (8)");
  expect(milkTeaItems).toBeInTheDocument();
  expect(screen.getByText("Non milk tea (7)")).toBeInTheDocument();

  fireEvent.click(milkTeaItems);
  expect(screen.getAllByTestId("itemCard").length).toBe(8);
});
