# namaste-react

use legacycodes.md to see past episode codes

## Episode 1 code uploaded

Used Basic HTML, JavaScript, React to demonstrate barebones code.

## Episode 2 code uploaded

Trying to build basic App manually. Learnt basic structure of how the different files work in project build. Contents of this episode will be superseded in upcoming episodes and will be replaced entirely (too).

## Episode 3 code uploaded

Coding completely in JSX inside App.js file with root available in index.html and basic styling supplied by index.css . Creating basic component and calling them in other components to create basic structure of website.

## Basic App Layout

- Header
  > - Logo
  > - Navbar items
- Body
  > - Search
  > - Restaurant Container
  >   > - Restaurant Card
  >   >   > - Restaurant Name
  >   >   > - Rating
  >   >   > - Image
  >   >   > - Cuisine
  >   >   > - Delivery Time
- Footer
  > - Copyright
  > - Links
  > - Address
  > - Contact

## Episode 4 code uploaded

Creating 1st official website of basic food order app. First off, we are working with basic JSX and basic styling to create structure. No functionality has been implemented yet.

Header has been completed and Body structure is ready.

Just between Header and Body, we added 2 new components - SearchBox and Restaurant Card (just in the code, there actual positions are little different)

Both SearchBox and Restaurant Card stays inside Body container. SearchBox is on top whilst Restaurant Card populates the space inside Bodymfrom there on.

We added swiggy's public API data in our code for various restaurant details and use props inside Card to start using data by List numbers only (<RestaurantCard resData={resList[0]}/>)

Then we replaced this line of code map and key concept because even this method wants you to add 1 line of code for each restaurant. We passed resList object into mapping and named it "restaurant" and used it to create mapping function which now adds any new restaurant data to website itself without any more input from front end.

## Episode 5 code uploaded

Added proper file structure in the project directory and implemented components import-exports/

- 2 types of components
  > - Default export/import
  >   > - export default Component;
  >   > - import Component from "path";
  > - Named export/import
  >   > - export const component;
  >   > - import { component } from "path";

Started the topic React Hooks

- React Hooks -> Normal JS utility function
  > - useState() - Super powerful react variables
  > - useEffect()

useState is a like function which is destructured into 2 array components - xyz and setXyz. This function is used to control a particular Virtual DOM whose initial default value is stored inside braces of useState. Following statement shows example of it -

> [xyz, setXyz] = useState(initial default)

This initial default is passed into xyz which is rendered onto the Virtual DOM and we use this data to perform functions on it such as "Top-Rated" filter made in Episode-05. The new value is stored in a 3rd variable which is passed into setXyz as if we are invoking value into it => setXyz(3rd variable).

Then, useState compares both xyz and setXyz using Reconciliation (which implements Diff Algorithm) and re-renders the new updated set value to our Virtual DOM thus updating website on the fly without reloading it.

## Episode 6 code uploaded

Added useEffect() functionality to implement Live API data "after" application is rendered.

Added CORS plugin on chrome to bypass CORS policy error.

Used "async await" method since fetchdata() returns promise which was then converted into json and tracked API to find our restaurant array.

Implemented basic Shimmer UI to demonstrate skeleton cards till the live API renders its data.

With the help of useState(),

- I built 5 functionalities for my Restaurant Cards
  > - Login/Logout button => A basic button in header component which demonstrates useState() re-render on clicking and switching state between displaying login or logout
  > - Top Rated Restaurant => which filters out restaurants with only rating above 4.3
  > - Reset => which brings back our list unfiltereed
  > - Search Box => 1 useState() implemented the words we were typing and displaying on the Box (additionally I added key press functionality which does the search button task (4) here itself just by pressing enter)
  > - Search button => firing this button compared our search box to the names of restaurant and filter out matching results

## Episode 7 code (WIP)
