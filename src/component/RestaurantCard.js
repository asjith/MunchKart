import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card m-4 p-4 w-[200px] bg-gray-300 rounded-md hover:bg-gray-400">
      <img className="rounded-md" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};

//higher order component
export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData.info.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-md">
          {header + " " + subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
