import { MEDIA_ASSET_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="card-image"
        src={MEDIA_ASSET_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <p>{avgRating} ⭐</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
