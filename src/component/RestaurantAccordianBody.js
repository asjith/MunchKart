import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestaurantAccordianBody = (props) => {
  const { bodyInfo } = props;
  //console.log(bodyInfo);

  const dispatch = useDispatch();
  const HandleAddItem = (itemDetails) => {
    dispatch(addItem(itemDetails));
  };
  return (
    <div
      data-testid="itemCard"
      className="p-2 m-2 text-left border-gray-500 border-b-2 flex justify-between"
    >
      <div className="w-9/12">
        <div className="mb-2">
          <span className="block">{bodyInfo?.card?.info?.name}</span>
          <span className="block text-sm">
            ₹
            {bodyInfo?.card?.info?.defaultPrice / 100 ||
              bodyInfo?.card?.info?.price / 100}
          </span>
        </div>

        <p className="text-xs mb-2 text-gray-600">
          {bodyInfo?.card?.info?.description}
        </p>
      </div>

      <div className="w-3/12">
        <button
          className=" absolute p-1 rounded-md bg-black text-white"
          onClick={() => HandleAddItem(bodyInfo)}
        >
          Add+
        </button>
        <img src={CDN_URL + bodyInfo?.card?.info?.imageId}></img>
      </div>
    </div>
  );
};

export default RestaurantAccordianBody;
