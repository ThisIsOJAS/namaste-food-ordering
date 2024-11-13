import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [copyList, setCopyList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setCopyList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      buttonPressed();
    }
  };

  const buttonPressed = () => {
    const filterList = resList.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setCopyList(filterList);
    setSearchText("");
  };

  // conditional rendering

  return resList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button className="search-btn" onClick={buttonPressed}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = resList.filter(
              (item) => item.info.avgRating >= 4.3
            );
            setCopyList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="reset-btn"
          onClick={() => {
            setCopyList(resList);
          }}
        >
          Reset
        </button>
      </div>

      <div className="res-container">
        {copyList.map((restaurant, index) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
