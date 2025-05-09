import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

it("should render Restaurant Card with my props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

it("should render Restaurant Card with OPEN label", () => {
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  render(<PromotedRestaurantCard resData={MOCK_DATA} />);

  const higherOrderName = screen.getByText("Open Now");

  expect(higherOrderName).toBeInTheDocument();

  expect(higherOrderName).toHaveClass(
    "absolute my-6 bg-yellow-400 text-black font-bold px-2 py-1 text-sm"
  ); // additional check to make sure my test is air tight
});
