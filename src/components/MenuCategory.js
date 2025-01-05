import CategoryFood from "./CategoryFood";

const MenuCategory = (props) => {
  const category = props?.card;
  const FoodItem = category.card?.card?.itemCards;
  const { showItems, setActiveIndex, activeIndex, idx } = props;

  const dropDown = () => {
    if (activeIndex !== null && activeIndex === idx) {
      setActiveIndex(null);
    } else {
      setActiveIndex(idx);
    }
  };

  return (
    <div className="w-7/12 mx-auto my-4 shadow-2xl py-4 px-8 bg-slate-300 rounded-xl">
      <div
        className="py-4 flex justify-between cursor-pointer"
        onClick={() => {
          dropDown();
        }}
      >
        <span className="text-xl font-bold">
          {category?.card?.card?.title} - (
          {category?.card?.card?.itemCards.length})
        </span>
        <span className={showItems ? "mb-2 rotate-180" : ""}>
          <svg
            fill="#000000"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              ></path>{" "}
            </g>
          </svg>{" "}
          {/* full svg copied above */}
        </span>
      </div>
      {showItems && (
        <div className="mx-4">
          {FoodItem?.map((item) => {
            return <CategoryFood khana={item} key={item?.card?.info?.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
