import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/**
 * ROUGH APP LAYOUT
 *
 *Header
 *  -Logo
 *  -Navbar items
 *
 *Body
 *  -search
 *  -restaurant container
 *    -restaurant card
 *      -restaurant name
 *      -rating
 *      -image
 *      -cuisine
 *      -delivery time
 *
 * Footer
 *  -copyright
 *  -links
 *  -address
 *  -contact
 */

//--------------------
//--------------------

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const SearchBox = () => {
  return (
    <>
      <div className="search-box">
        <input placeholder="Search"></input>
      </div>
      <div className="button">
        <button type="button">Go!</button>
      </div>
    </>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <h3>Test Restaurant</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <SearchBox />
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
