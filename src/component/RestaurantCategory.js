import { useState } from "react";
import RestaurantAccordian from "./RestaurantAccordian";

const RestaurantCategory = (props) => {
  const { data, expand, setShowIndex } = props;
  //console.log(data);
  console.log(expand);
  const [showSubIndex, setShowSubIndex] = useState(0);

  return data?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
    <div className="shadow-lg my-4">
      <RestaurantAccordian
        key={data?.card?.card?.title}
        categ={data?.card?.card}
        expand={expand}
        setShowIndex={setShowIndex}
        setShowSubIndex={() => setShowSubIndex(-1)}
      />
    </div>
  ) : (
    //   data?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    <div className="shadow-lg my-4">
      <p className="text-left font-bold text-xl p-2">
        {data?.card?.card?.title}
      </p>
      <div>
        {data?.card?.card?.categories.map((c, subIndex) => (
          <div>
            <RestaurantAccordian
              key={c.title}
              categ={c}
              expand={expand && subIndex === showSubIndex ? true : false}
              setShowIndex={setShowIndex}
              setShowSubIndex={() => setShowSubIndex(subIndex)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
