import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestauarants from "../utils/useRestauarants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [listOfRestaurantFromAPI, filteredRestaurantFromAPI] =
    useRestauarants();

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

  return listOfRestaurant.length === 0 ? (
    <Shimmer /> //ternary operator
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-input"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          ></input>
          <button
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
          className="filter-btn"
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
          className="clear"
          onClick={() => {
            setFilteredRestaurant(listOfRestaurant);
          }}
        >
          Clear
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
