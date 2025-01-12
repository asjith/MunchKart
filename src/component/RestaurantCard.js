import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card m-4 p-4 w-[200px] bg-gray-300 rounded-md hover:bg-gray-400">
      <img className="rounded-md" src={RES_IMG_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
