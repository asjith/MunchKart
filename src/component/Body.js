import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestauarants from "../utils/useRestauarants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [listOfRestaurantFromAPI, filteredRestaurantFromAPI] =
    useRestauarants();

  const RestaurantCardWithDiscount = withDiscountLabel(RestaurantCard);

  useEffect(() => {
    //calls after the useEffect of useReataurants
    setListOfRestaurant(listOfRestaurantFromAPI);
    setFilteredRestaurant(filteredRestaurantFromAPI);
  }, [listOfRestaurantFromAPI, filteredRestaurantFromAPI]);

  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return (
      <div>
        <h1>No Internet</h1>
      </div>
    );
  }

  const { loggedUser, setUserName } = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer /> //ternary operator
  ) : (
    <div className="body m-3">
      <div className="filter flex">
        <div className="search mr-4">
          <input
            className="border border-black"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          ></input>
          <button
            className="bg-gray-500 p-1 m-1 rounded-md"
            onClick={() => {
              const result = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(result);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn mr-4 bg-gray-500 p-1 m-1 rounded-md"
          onClick={() => {
            //logic to filter
            const filterListOfRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filterListOfRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="clear bg-gray-500 p-1 m-1 rounded-md"
          onClick={() => {
            setFilteredRestaurant(listOfRestaurant);
          }}
        >
          Clear
        </button>
        <div className="m-1 p-1 mr-4">
          <label>User Name : </label>
          <input
            className="border border-black p-1"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {
                // console.log(restaurant.info.aggregatedDiscountInfoV3)
                restaurant.info.aggregatedDiscountInfoV3 ? (
                  <RestaurantCardWithDiscount resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
