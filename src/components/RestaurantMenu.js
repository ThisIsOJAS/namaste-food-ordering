import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurantCard from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuInfo = useRestaurantCard(resId); // now our menuInfo is directly updated from custom hook, and then we proceed as usual

  if (menuInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwoMessage } =
    menuInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menuPage">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {avgRating}
      </h2>
      <h2>{costForTwoMessage}</h2>
      <h2>Menu</h2>
      <ol>
        {itemCards?.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Rs. {item?.card?.info?.price / 100}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default RestaurantMenu;
