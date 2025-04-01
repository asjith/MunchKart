import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log("rework");
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  else {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info;

    const categories =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    //console.log(categories);

    return (
      <div className="text-center bg-gray-200 w-6/12 mx-auto">
        <h1 className="font-bold text-2xl py-4">{name}</h1>
        <h2 className="font-bold text-sm">
          {cuisines} - {costForTwoMessage}
        </h2>
        <div className="my-10">
          {categories.map((c, index) => (
            <RestaurantCategory
              key={c?.card?.card?.title}
              data={c}
              expand={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;

//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=2415&catalog_qa=undefined&submitAction=ENTER
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=10892&catalog_qa=undefined&submitAction=ENTER -> pizza hut menu api
//restaurantId = 43836 or 1452
