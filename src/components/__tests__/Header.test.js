import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Page Test Cases", () => {
  it("should render my header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    //   const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
  });

  it("should render my header component with a cart with 0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart : 0 items");

    expect(cartItems).toBeInTheDocument();
  });

  it("should render my header component with a cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/); // this is regex, which will match any string which has Cart in it

    expect(cart).toBeInTheDocument();
  });

  it("should render my header component with a cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/); // this is regex, which will match any string which has Cart in it

    expect(cart).toBeInTheDocument();
  });

  it("should render change login button to logout", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton); // simulating a click event on the login button

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
