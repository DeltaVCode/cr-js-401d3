# DEMOS - Remote APIs

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).  

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in 

### async demo
This is a simple demo that pulls in some data from an API.
* Demonstrate first with some stubbed data in the reducer to get it all wired up.
  * Talking point: start your UI with stub/mock data so you can get work done
* Add in a remote call using normal react events and function
  * Talking point: works, but is outside of the Redux ecosystem. What if some other component needs this data?
* Try and wire it up with an action that runs the superagent call
  * You will get a big error from React/Redux
  * Explain that this is because action generators must return an object
* Code out thunk as middleware and explain what it's doing
* Code out an action generator that returns a function that returns the dispatch of the actual action
* Re-Run the code to prove it works
* Replace our skinny thunk with the real one and show that it still works.

