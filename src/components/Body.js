import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [copyList, setCopyList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName, userName } = useContext(UserContext);

  const location = useLocation();

  useEffect(() => {
    fetchdata();
  }, [location]);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setResList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setCopyList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
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

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <h1>Oops you are not connected to Internet</h1>; // "!onlineStatus" = "onlineStatus == false"

  // conditional rendering

  return resList.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex gap-2  bg-blue-100 p-2">
        <div className="border-2">
          <input
            className="shadow-md rounded-md px-2"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-slate-300 px-2 shadow-md hover:scale-110 transition-all ease-in-out rounded-md"
            onClick={buttonPressed}
          >
            Search
          </button>
        </div>
        <button
          className="bg-pink-200 rounded-md px-2 shadow-md hover:scale-110 transition-all ease-in-out"
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
          className="bg-green-300 rounded-md px-2 shadow-md hover:scale-110 transition-all ease-in-out"
          onClick={() => {
            setCopyList(resList);
          }}
        >
          Reset
        </button>

        <label className="text-lg">Your Name :</label>

        <input
          className="rounded-md px-2 shadow-md"
          type="text"
          placeholder="& press Enter"
          value={userName}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setUserName(e.target.value);
            }
          }}
        />
      </div>

      <div>
        <h1 className="bg-blue-100 pb-2 px-4 text-2xl font-bold">
          Welcome back, {loggedInUser}
        </h1>
      </div>

      <div className="grid grid-cols-4 justify-normal gap-20 bg-[#a8bd66] p-12">
        {copyList.map((restaurant) => {
          const link = "/restaurant/" + restaurant?.info?.id;
          return (
            <Link key={restaurant?.info?.id} to={link}>
              {restaurant?.info?.isOpen ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
