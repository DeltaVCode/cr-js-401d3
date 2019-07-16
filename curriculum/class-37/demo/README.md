# DEMOS - Dynamic Forms

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).  

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

### JSON Schema Form

* Use a static .json file (include it) instead of pulling from an API server. If you have time, you can demonstrate that, but the priority here is not how we get the schema, but that we have it and that we can use it.
* Create a form with it, and implement all of the REST verbs with actions and reducers to show that you can fully CRUD a model (although virtually).  We will be doing this with a real API in the next class.

### Redux Form
* Reference the schema model, but you can't use it here. You'll need to build out the form with `<Field />` components as specified in the Redux Form docs.
* But you can still grab the form contents and touch your state, which is the whole purpose.


