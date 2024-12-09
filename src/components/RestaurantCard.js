import { MEDIA_ASSET_URL } from "../utils/constants";

// Destructuring PROPS
const RestaurantCard = ({ resData, index }) => {
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="rounded-md border border-gray-600 max-w-[300px] p-4 pl-6 h-[450px] hover:scale-110 transition-all ease-in-out bg-[#bba137] shadow-lg">
      <img
        className="h-[250px] w-[250px] rounded-md border border-black"
        src={MEDIA_ASSET_URL + resData?.info?.cloudinaryImageId}
      />
      <h3 className="pt-1 font-bold">{name}</h3>
      <h4 className="pt-1">{cuisines.join(", ")}</h4>
      <p className="pt-1">{avgRating} ⭐</p>
      <p className="pt-1">{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
