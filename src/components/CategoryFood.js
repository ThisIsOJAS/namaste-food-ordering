import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CategoryFood = (props) => {
  const item = props?.khana;
  const { name, price, defaultPrice, description, imageId } = item?.card?.info;
  const { rating } = item?.card?.info?.ratings?.aggregatedRating;
  const { vegClassifier } = item?.card?.info?.itemAttribute;
  const { isCart } = props;

  console.log("hello", props.khana);

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    //Dispatch an action to add items to the cart
    dispatch(addItem(item));
  };

  return (
    <div
      className="pt-2 pb-4 my-2 border-b border-dashed border-slate-400 flex justify-between"
      data-testid="foodItem"
    >
      <span className="w-9/12 mr-2">
        <h1 className="text-left">
          {vegClassifier == "VEG" ? (
            <img
              className="h-8 w-8"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Veg_symbol.svg"
            ></img>
          ) : (
            <img
              className="h-8 w-8"
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"
            ></img>
          )}
        </h1>
        <h1 className="font-bold text-left">{name}</h1>
        <h2 className="font-semibold text-left">
          ₹{price ? price / 100 : defaultPrice / 100}
        </h2>
        <h2 className="text-green-800 font-semibold text-left">
          {rating ? rating + " ⭐" : " "}
        </h2>
        <div>
          {!isCart ? (
            <p className="text-slate-600 text-left">{description}</p>
          ) : (
            <></>
          )}
        </div>
      </span>
      <div className="w-3/12 ml-2">
        <div className="absolute ml-2 mt-2">
          {" "}
          {!isCart ? (
            <button
              className="bg-slate-200 text-black rounded-lg px-2"
              onClick={() => handleAddItems(item)}
            >
              + Add
            </button>
          ) : (
            <></>
          )}
        </div>
        <img
          className="h-44 w-44 bg-red-200 rounded-2xl shadow-lg border border-gray-400"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
            imageId
          }
        ></img>
      </div>
    </div>
  );
};

export default CategoryFood;
