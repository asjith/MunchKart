import { render, screen } from "@testing-library/react";
import RestaurantCard, { withDiscountLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMockTest.json";
import MOCK_DATA_DISCOUNT from "../mocks/RestaurantCardDiscountMockTest.json";
import "@testing-library/jest-dom";

it("Should render restaurant card component which has props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const restaurantName = screen.getByText("Burger King");

  expect(restaurantName).toBeInTheDocument();
});

it("Should render restuarant component with discount", () => {
  const RestaurantCardWithDiscount = withDiscountLabel(RestaurantCard);
  render(<RestaurantCardWithDiscount resData={MOCK_DATA_DISCOUNT} />);

  const labelDiscount = screen.getByText("ITEMS AT ₹99");

  expect(labelDiscount).toBeInTheDocument();
});
