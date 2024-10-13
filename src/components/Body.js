import { useState } from "react";
import resList111 from "../utils/mock_data";
// import SearchBox from "./SearchBox";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resList, setResList] = useState(resList111);

  return (
    <div className="body">
      {/* <div className="search">
        <SearchBox />
      </div> */}
      {/* we will add search box later, component is already built */}

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = resList.filter(
              (res) => res.info.avgRating >= 4.2
            );
            setResList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="reset-btn"
          onClick={() => {
            setResList(resList111);
          }}
        >
          Reset Filter
        </button>
      </div>

      <div className="res-container">
        {resList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
