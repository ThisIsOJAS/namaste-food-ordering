import { MEDIA_ASSET_URL } from "../utils/constants";
import React from "react";
// Destructuring PROPS
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="rounded-3xl overflow-hidden h-[400px] hover:scale-110 transition-all ease-in-out bg-[#ffffff3d] shadow-2xl">
      <div className="h-64">
        <img
          className="h-full w-full object-cover"
          src={MEDIA_ASSET_URL + resData?.info?.cloudinaryImageId}
          alt="Restaurant"
        />
      </div>
      <div className="pt-2 px-6">
        <h3 className="font-bold truncate">{name}</h3>{" "}
        {/* truncate class ensure name stays in 1 line and adds ellipsis if it overflows */}
        <h4 className="line-clamp-2">{cuisines.join(", ")}</h4>{" "}
        {/* line-clamp-2 ensures cuisines stay in 2 lines and adds ellipsis if it overflows */}
        <p>{avgRating} ⭐</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (resData) => {
    return (
      <React.Fragment>
        <label className="absolute my-6 bg-yellow-400 text-black font-bold px-2 py-1 text-sm">
          Open Now
        </label>

        <RestaurantCard {...resData} />
      </React.Fragment>
    );
  };
};

export default RestaurantCard;
