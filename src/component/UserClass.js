import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/asjith");
    const json = await data.json();
    //console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: anusreesjith@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
