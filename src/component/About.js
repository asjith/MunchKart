import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <UserContext.Consumer>
          {({ loggedUser }) => <h2>Hi {loggedUser}!</h2>}
        </UserContext.Consumer>
        <h2>This is a food ordering app.</h2>
        <UserClass name="Anusree" />
      </div>
    );
  }
}

export default About;
