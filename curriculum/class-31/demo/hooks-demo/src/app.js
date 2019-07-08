import React from 'react';
import Title from './title-hooks';
import ContextTitle from './title-context';
import Fish from './fish-hooks.js';
import HooksCounter from './hooks-counter';
import ReducerCounter from './reducer-counter';

function App() {
  return (
    <div>
      <Title />
      <ContextTitle />
      <HooksCounter />
      <ReducerCounter />
      <Fish />
    </div>
  );
}

export default App;
