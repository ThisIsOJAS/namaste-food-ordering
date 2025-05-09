import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

// for this test, we are mocking API data for "Kwality Walls Ice Cream and More" with router link : http://localhost:1234/restaurant/305961

it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  // first we find the menu category header
  const accordionHeader = screen.getByText("Cornetto - (6)");

  // then we click the header to expand its accordion
  fireEvent.click(accordionHeader);

  //then we added testId to each food item mapped into Menu and assert the length of array matched by that testId
  expect(screen.getAllByTestId("foodItem").length).toBe(6);

  // once the accordion is expanded, we can see the add button
  const addBtns = screen.getAllByRole("button", { name: "+ Add" });

  // we click the add button of the 1st menu item and import Header into this test
  fireEvent.click(addBtns[0]);

  // finally we check if the cart count got updated depending on number of times we fire click event
  expect(screen.getByText("Cart : 1 items")).toBeInTheDocument();

  fireEvent.click(addBtns[1]); //click the 2nd item on menu and checking the cart count
  expect(screen.getByText("Cart : 2 items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(8); //6 items in menu + 2 items added to cart and since both RestaurantMenu and Cart have same child component, jest will read same testId throughout the component mentioned in this test

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" })); //clear the cart button on Cart component
  expect(
    screen.getByText("Your cart is empty, buy some food !!")
  ).toBeInTheDocument(); //asserting the text of empty cart
  expect(screen.getAllByTestId("foodItem").length).toBe(6); //asserting the length of food items in menu after the 2 added items in cart are removed
});
