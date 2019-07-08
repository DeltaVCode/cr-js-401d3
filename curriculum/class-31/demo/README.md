# DEMOS - Hooks API

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).  

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

## `hooks-demo`

The demo as provided is in it's "complete" state, you'll want to build it up, component by component to demonstrate each type of hook.

Create the `app.js` and use it simply to add components one by one to be rendered.

`hooks-counter.js`
* Creates a simple counter component using the `useState()` hook.

`reducer-counter.js`
* A second counter component, but this time, using the `useReducer()` hook.
* Note that of course this is overkill, but you can begin to see how familiar patterns can be applied to manage more complex state in functional components

Now, add context to the `index.js` with a simple context provider that has a title and a function to change it. This is the same context provider from the Class 36 demo.  Definitely build it out just to revisit the concept of Context again.

`title-context.js` 
* This uses the Normal context API to show and change the title with a button. This should be a review of Context along with the provider build in the previous step.

`title-hooks.js`
* Now, build that same component (shows title, with a button to change) using the `useContext()` hook. Notice that you don't need to run that function inside the component to get to the context object. So much easier!

`index.js`
* To prove that Context is global/shared, add the `<Title >` component to the `index.js` file and see that all 3 instances are in sync.

`fish-hooks.js`
* A custom hook that you can build up to provide your own esoteric state to a component.  Note that this is a function that starts with `use` to stay with the API rules.
* This hook also demonstrates the use of an effect, to show how we can get into the lifecycle of the component.  This will become useful should we want to subscribe or unsubscribe to a socket server or some other long-lived thing.
