import { useState } from "react";

const RestaurantAccordianHead = (props) => {
  const { headInfo } = props;
  const { itemCards, title } = headInfo;

  //console.log(headInfo);

  const [arrow, setArrow] = useState("⬇️");

  return (
    <div className="flex justify-between p-2">
      <p className="font-bold">
        {title} ({itemCards.length})
      </p>
      <p onClick={() => (arrow === "⬇️" ? setArrow("⬆️") : setArrow("⬇️"))}>
        {arrow}
      </p>
    </div>
  );
};

export default RestaurantAccordianHead;
