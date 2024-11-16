import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    setMenuInfo(json?.data);
  };

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
