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

We added swiggy's public API data in our code for various restaurant details and use props inside Card to start using data by List numbers only (< RestaurantCard resData={resList[0]}/>)

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

## Episode 7 code uploaded

Implemented React Routers throughout the website including -

> - Home Button
> - About Us Page
> - Contact Page
> - Re-usable Restaurant Menu Page

Also, implemented child routers using "Outlet" component to ensure faster load times with single page application locking the header component.

Made re-usable restaurant page which fetches data from a seperate swiggy API where "Restaurant ID" defines a new router page for respective restaurant and it's exact API accordingly.

Used "Link" component to ensure only the effected component is re-rendered and which also made cards fully clickable.

## Episode 8 code uploaded

Added details using Linkedin APi on About age and also made similar component using Class (just for understanding).

## Episode 9 code code uploaded

Each component should perform only 1 activity. This is an industry standard to produce optimized product. As we saw in our Body.js , that component was fetching API data to load restaurant cards and it was also displaying whole Body component. Hence I implemented Custom Hooks to transfer the data fetching responsibility. Now, this custom hook is imported and output is assigned to a variable in this other component. Therefore, we can use it accordingly.

Also, Lazy Loading and Suspense was implemented in order to improve load times and keep extra components unloaded unless user clicks on their button.

- Types of optimization loading -

> - Lazy Loading
> - Chunking
> - Code Splitting
> - Dynamic Bundling
> - on-Demand Loading
> - Dynamic Import

## Episode 10 code uploaded

Implemented Tailwind CSS in the project and completely replaced all external CSS. (Future Dark Mode update)

## Episode 11 code uploaded

Implemented Higher-Order function to enahnce restaurant cards on homepage with "Opened" Label. Completely changed restaurant menu where full menu data has been extracted from swiggy api and displayed using "Accordion". Finally, Context API was introduced to handle globally available data across website. Some UI updates were added along with Tailwind added in more pages.

## Episode 12 code uploaded

- Redux Toolkit

> - install @reduxjs/tookit and react-redux
> - build our store
> - connect our store to app
> - create slices (cart slices)
> - dispatch action

We create an appStore component who stores all the different "slices as reducer". It is a single collection of major components that implement redux library for their own data flow.

We then create each slice component where we write their initial state (acts like default state of useState) and we write "functions regarding it called as reducers" (yeah same name but different purpose). All these functions create an action (for what it's gonna do with slice state) and payload (what data modification will be done). All the actions are exported as named exports and "entire slice is imported inside appStore".

This appStore is connected direcctly to App.js where whole app is wrapped inside < Provider > tag so every component can access this data.

Lastly, we implement these actions in our component ->

> - useSelector allows the component to access the whole data array of any child component but we need to carefully select very specific part of our data as this component gets subscribed to that data set and any change to it would trigger re-render on this component creating performance issues.
> - useDispatch allows us to access actions and payload for any function built for the slice. And using it we can change the default state associated with the slice which triggers a change for whole data array supplied to the component using selector, causing a re-render since it is subscribed to that data.

## Episode 13 code WIP
