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
        <input placeholder="What are you Craving ?"></input>
      </div>
      <div className="button">
        <button type="button">Go!</button>
      </div>
    </>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurant-card">
      <img
        className="card-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tolejbnae10pq0udbavn"
      ></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <p>{resData.info.avgRating} ⭐</p>
      <p>{resData.info.costForTwo}</p>
    </div>
  );
};

const resObj = {
  info: {
    id: "233801",
    name: "KFC",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_233801.JPG",
    locality: "Rani Bagh",
    areaName: "Pitampura",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 1.5,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-07-25 23:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹179",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/kfc-rani-bagh-pitampura-delhi-233801",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <SearchBox />
      </div>
      <div className="res-container">
        {/* <RestaurantCard
          resName="Meghana Foods"
          cuisine="Pizza, Pasta, Burger, Dahi Bhalla"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Chicken, Rice, Wings, popcorn, zinger"
        /> */}

        <RestaurantCard resData={resObj} />
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
