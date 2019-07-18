# DEMOS - Remote CRUD

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).  

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

## remote-crud
* This demo is designed for simplicity. It essentially takes form input, formats it as JSON, and does a POST to a server.
* It also takes an ID and performs a DELETE.
* The primary activity here is in the actions - implementing them to work with the server and keeping the reducers in sync.
* You will need to address issues with cache invalidation. When is your state stale?
  * The minute you create it.
  * Talk about the issues with that and how you might invalidate it.
* This is a light topic in general. It could be a good tactic to pair program this entire demo with a TA or a student.

