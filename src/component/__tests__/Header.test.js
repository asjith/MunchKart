import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //can test with multiple query
  //const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "login" });
  //const loginButton = screen.getByText("login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header compinent with cart items as 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - 0");
  expect(cartItems).toBeInTheDocument();
});

it("Should render Header component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/);

  expect(cart).toBeInTheDocument();
});

it("Should change login button to logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "logout" });

  expect(logoutButton).toBeInTheDocument();
});
