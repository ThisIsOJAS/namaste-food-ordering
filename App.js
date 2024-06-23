/* example structure
 *  -----------------
 *
 *  <div id="parent">
 *       <div id="child1">
 *                       <h1 id="heading">I am an h1 tag</h1>
 *                       <h2 id="heading">I am an h2 tag</h2>
 *       </div>
 *       <div id="child2">
 *                       <h3 id="heading">I am an h3 tag</h3>
 *                       <h4 id="heading">I am an h4 tag</h4>
 *       </div>
 *   </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I am an h3 tag"),
    React.createElement("h4", {}, "I am an h4 tag"),
  ]),
]);

console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React !!"
// ); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
