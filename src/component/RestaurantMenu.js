import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  else {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    console.log(itemCards);

    return (
      <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Rs.
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default RestaurantMenu;

//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=2415&catalog_qa=undefined&submitAction=ENTER
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=10892&catalog_qa=undefined&submitAction=ENTER -> pizza hut menu api
//restaurantId = 43836 or 1452
