# DEMO - Routing and Component Composition

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).  

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.


## Routing

* Import `BrowserRouter` from `react-router-dom` in the index, and wrap `<App />` with it
  * *explain how this makes routing available to all children*
* Build an app component which brings in a Header, Footer, and Main Component
* In the `<Header />`, add a `<nav />` which draws a list of links, using `<Link to... />` from `react-router-dom`
* In the main, use `<Route exact path="" component="" />` to handle clicks on the nav links to render out components conditionally.
* This is how we build out a Single Page App (SPA)
* Note that MemoryRouter is also an option and explain/show the differences

## Composition

* In your main component, create a few sub-components
* Create an array of items in markup (e.g. map over an array to return a list of `<div>`)
* Render one of your child components with that array.  i.e. `<Stuff>{things}</Stuff>`
* Then in that component, render out `{props.children}`

Now, make something more real, and usable...

* Create a simple component called `<If />` that conditionally renders `{props.children}`
* Talk through and code out other options, like `Unless`, `When`, and a full `If` / `Then` / `Else` series.

**Put this up on NPM!** -- create an org for yourself to namespace if you haven't already.

Great candidate for re-use and really cool to demonstrate to students how to globalize their solutions


