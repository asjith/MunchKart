import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is a food ordering app.</h2>
        <UserClass name="Anusree" />
      </div>
    );
  }
}

export default About;
