import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h2>Creator - Ojas Gupta</h2>
        <h2>Location - Delhi</h2>
        <p>Languages :</p>
        <ul>
          <li>React</li>
          <li>Python</li>
          <li>TypeScript</li>
          <li>CLASS</li>
        </ul>
      </div>
    );
  }
}

export default UserClass;
