import React from "react";
import ReactDOM from "react-dom/client";

// const heading = <h1 className="heading">Namaste React-JSX</h1>;

const Title = () => <h1 className="heading">Namaste React-JSX</h1>;

// This is is component composition

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">This is a React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

root.render(<HeadingComponent />);
