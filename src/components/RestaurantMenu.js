import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurantCard from "../utils/useRestaurantMenu.js";
import MenuCategory from "./MenuCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null); //this will define which menu category is active

  const { resId } = useParams();

  const menuInfo = useRestaurantCard(resId); // now our menuInfo is directly updated from custom hook, and then we proceed as usual

  if (menuInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwoMessage } =
    menuInfo?.cards[2]?.card?.card?.info;

  const MenuCategories =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="py-2 pl-8 font-bold text-3xl bg-blue-100 shadow-lg">
        {name}
      </h1>
      <div className="pl-8 bg-pink-100">
        <div className="py-2 flex gap-2 justify-center">
          <h2 className="border border-black rounded-md shadow-md px-4 bg-orange-100 text-slate-600">
            {cuisines.join(", ")}
          </h2>
          <h2 className="border border-black rounded-md shadow-md px-4 bg-orange-100 text-slate-600">
            {avgRating}⭐
          </h2>
          <h2 className="border border-black rounded-md shadow-md px-4 bg-orange-100 text-slate-600">
            {costForTwoMessage}
          </h2>
        </div>

        {MenuCategories?.map((category, idx) => {
          return (
            <MenuCategory
              key={category?.card?.card?.title}
              card={category}
              showItems={idx === activeIndex ? true : false}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
              idx={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
