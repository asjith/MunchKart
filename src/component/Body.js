import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

// let listOfRestaurant = [
//     {
//         "info": {
//             "id": "558031",
//             "name": "Geetham Veg restaurant",
//             "cloudinaryImageId": "fxoofqi1isfil8oa7ix7",
//             "costForTwo": "₹450 for two",
//             "cuisines": [
//                 "South Indian",
//                 "North Indian",
//                 "Sweets",
//                 "Beverages"
//             ],
//             "avgRating": 4,
//             "avgRatingString": "4.6",
//             "sla": {
//                 "deliveryTime": 32,
//                 "lastMileTravel": 5.6,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "32 mins",
//                 "lastMileTravelString": "5.6 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             }
//         },
//     },
//     {
//         "info": {
//             "id": "558032",
//             "name": "Geetham NonVeg restaurant",
//             "cloudinaryImageId": "fxoofqi1isfil8oa7ix7",
//             "costForTwo": "₹450 for two",
//             "cuisines": [
//                 "South Indian",
//                 "North Indian",
//                 "Sweets",
//                 "Beverages"
//             ],
//             "avgRating": 5,
//             "avgRatingString": "3",
//             "sla": {
//                 "deliveryTime": 32,
//                 "lastMileTravel": 5.6,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "32 mins",
//                 "lastMileTravelString": "5.6 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             }
//         },
//     }  
// ]
    
const [listOfRestaurant, setListOfRestaurant] = useState(resList);


return (
    <div className="body">
        <div className="search">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        //logic to filter 
                        const filterListOfRestaurant = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setListOfRestaurant(filterListOfRestaurant);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
        </div>
        <div className="res-container">
            {
                listOfRestaurant.map((restaurant) => {
                    return (
                        <RestaurantCard key = { restaurant.info.id } resData={restaurant} />
                    )
                })
            }
            {/* <RestaurantCard resData={resList[0]} />
            <RestaurantCard resData={resList[1]} />
            <RestaurantCard resData={resList[2]} />
            <RestaurantCard resData={resList[3]} />
            <RestaurantCard resData={resList[4]} />
            <RestaurantCard resData={resList[5]} />
            <RestaurantCard resData={resList[6]} />
            <RestaurantCard resData={resList[7]} />
            <RestaurantCard resData={resList[8]} /> */}
        </div>
    </div>
)
}

export default Body;