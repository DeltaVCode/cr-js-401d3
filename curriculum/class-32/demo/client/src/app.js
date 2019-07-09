import React from 'react';

import SocketChat from './socket-chat.js';
import QChat from './q-chat.js';

const App = (props) => {

  return (
    <React.Fragment>
      <SocketChat/>
      <QChat />
    </React.Fragment>
  );
};

export default App;
