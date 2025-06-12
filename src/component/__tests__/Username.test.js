import { render, act, fireEvent, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/RestaurantAPIMock.json";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import UserContext from "../../utils/UserContext";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import About from "../About";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

const ContextWrapper = ({ children }) => {
  const [userName, setUserName] = useState("");
  return (
    <UserContext.Provider value={{ loggedUser: userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

it("Should test the change in User name in Header", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <ContextWrapper>
            <Header />
            <Body />
          </ContextWrapper>
        </Provider>
      </BrowserRouter>
    );
  });

  fireEvent.change(screen.getByTestId("usernameInput"), {
    target: { value: "Aro" },
  });

  expect(screen.getByText("Aro")).toBeInTheDocument();
});

it("Should test the change in User name in Header", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <ContextWrapper>
            <About />
            <Body />
          </ContextWrapper>
        </Provider>
      </BrowserRouter>
    );
  });

  fireEvent.change(screen.getByTestId("usernameInput"), {
    target: { value: "Aro" },
  });

  expect(screen.getByText("Hi Aro!")).toBeInTheDocument();
});
