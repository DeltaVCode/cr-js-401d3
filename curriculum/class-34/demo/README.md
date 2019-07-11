# DEMOS -  `<Login />` and `<Auth />`

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).  

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.


* This is a pretty big build as we need to get through the logical parts of Logging In, Logging Out, and Protecting with Auth.
* This lesson is supplemental to the previous lecture on managing state with Context and Hooks and makes very heavy use of that.
* Lean into the flow and how we're using Context/Hooks to manage state for just the login component

The Logic for this set of components is as follows:

* **context.js**
  * Publishes State through the provider:
    * loggedIn: boolean
    * token: The user's token from the server
    * login/logout: Functions that allow Consumers to toggle the loggedIn state. These functions set/remove cookies and nullify the token in state
  * On load, check the cookie for a token, validate it, and toggle the loggedIn state immediately.

* **login.js**
  * This is simply the login form
  * It is a consumer of the Login Context
  * When the user is not logged in, it shows a login form and/or an OAuth link.
  * Otherwise, it shows a button to log you out.
  * On a successful login ...
    * it calls the context's `login()` method
      * That function will change the loggedIn state value in context
    * Based on the login status, the form should then hide itself.
  * If you are logged in and click the logout button
    * it calls the context's `logout()` method
      * That function will change the loggedIn state in context

* **auth.js**
  * This is a wrapper component.
  * It should consume the login context
  * It will inspect the token if it exists and note the capabilities
  * It will then evaluate a boolean based on if the user is logged in not and also if there is a prop called 'capability' that matches any of the users capabilities. The capability check should be optional.

Sample Usage

```
// The div only shows if you are logged in
  <Auth>
    <div />
  </Auth>

// The div only shows if you are logged in AND have read permissions
  <Auth capability="read">
    <div />
  </Auth>
```
