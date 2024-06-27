# index.html (ep-1 and ep-2)

# ---------------------------

## ---------CODE FROM PLAIN HTML------------

    <div id="root">
      <h1>Hello World !!</h1>
    </div>

## ---------CODE FROM PLAIN JAVASCRIPT------

    <script>
      const heading = document.createElement("h1");
      heading.innerHTML = "Hello World from JavaScript!!";
      const root = document.getElementById("root");
      root.appendChild(heading);
    </script>

## ---------CODE FROM PLAIN REACT-------------

## ---------REMOVED CDN SINCE WE MANUALLY INSTALLED REACT AND REACT-DOM IN EPISODE 02-------------

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script>
      const heading = React.createElement(
        "h1",
        {},
        "Hello World from React !!"
      );

      const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(heading);
    </script>

# App.js (ep-1 and ep-2)

# -----------------------

/\* example structure

- ***
-
- <div id="parent">
-       <div id="child1">
-                       <h1 id="heading">I am an h1 tag</h1>
-                       <h2 id="heading">I am an h2 tag</h2>
-       </div>
-       <div id="child2">
-                       <h3 id="heading">I am an h3 tag</h3>
-                       <h4 id="heading">I am an h4 tag</h4>
-       </div>
- </div>
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

const heading = React.createElement(
"h1",
{ id: "heading", xyz: "abc" },
"Hello World from React !!"
); object

root.render(parent);
