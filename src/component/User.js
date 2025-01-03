import { useState } from "react";

const User = (props) => {
  const [count1] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <h3>Location: Chennai</h3>
      <h3>Contact: anusreesjith@gmail.com</h3>
      <h3>Count: {count1}</h3>
      <h3>Count: {count2}</h3>
    </div>
  );
};

export default User;
