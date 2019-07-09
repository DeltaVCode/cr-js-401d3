# DEMOS - Socket.io Client

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).  

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

### Server -- `demo/server`
* This is a simple server that pops up on a port and listens for a one event (chat) to which it broadcasts whatever was typed in back to all connected sockets with an 'incoming' event.
* You can test this out with the client that you build locally, but the class won't be able to connect to your local server
* Once you deploy it, and change the client app to use the deployed URL, then everyone can troll you.

### Chat Client -- `demo/client`
* From app.js, create and bring in a new component called `socket-chat.js`
* Start this out by first installing `socket.io-client` and setting up `on('incoming',..)` listener
* Create a form that sets state as the user types
* On Submit of that form, emit the `chat` event to the server
* This simple proof of life is the basis for the entire build...
    * You have a running server
    * You have a connected client
    * The client can troll the server
    * The server can talk back
    * The client can print out what the server says.
* Run it, review it, draw it out on the whiteboard.  The flow of data and events between servers isn't always obvious.

#### Repeat, with the Q Server

* Create a second component called `q-chat` and repeat the process, but this time, wiring up our Q server.
  * Remember to set `REACT_APP_Q_SERVER` in the .env file
* As you can see, you can easily wire this up in the same `/server` (via different port).
* Build out this component to show a list of messages instead of just one
  * Another reminder of how to use `map()` in a component!
* *Note that lab for this class does not require the students to use the Q Server implementation. However, the end of block project does, so it's a good idea to demonstrate it as a preview/reminder*
  
#### Hooks Conversion
* Don't actually do it ...
* But map out with the students a strategy to convert these chat components to use hooks.
  * Move from class to function
  * Manage state with `useState()`
  * When/How do we connect?
