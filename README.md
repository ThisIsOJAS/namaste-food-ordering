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

## Episode 5 code (WIP)

- 2 types of components
  > - Default export/import
  >   > - export default Component;
  >   > - import Component from "path";
  > - Named export/import
  >   > - export const component;
  >   > - import { component } from "path";
