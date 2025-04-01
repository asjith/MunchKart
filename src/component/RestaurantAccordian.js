import RestaurantAccordianHead from "./RestaurantAccordianHead";
import RestaurantAccordianBody from "./RestaurantAccordianBody";
import { useState } from "react";

const RestaurantAccordian = (props) => {
  const { categ, expand, setShowIndex, setShowSubIndex } = props;

  // const [expand, setExpand] = useState(false);
  const expandOrCollapse = () => {
    setShowIndex();
    setShowSubIndex();
  };

  return (
    <div>
      <div className="cursor-pointer" onClick={expandOrCollapse}>
        <RestaurantAccordianHead key={categ.title} headInfo={categ} />
      </div>

      <div>
        {expand &&
          categ.itemCards.map((c) => (
            <RestaurantAccordianBody key={c?.card?.info?.id} bodyInfo={c} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantAccordian;
