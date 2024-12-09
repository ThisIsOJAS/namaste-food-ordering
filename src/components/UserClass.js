// this is just here to show class based component, we are not importing this anywhere on the website - for illustration purpose only **

import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="h-[450px] w-[350px] bg-green-400 rounded-md p-4 border border-black">
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
