import React from 'react';
import useFishHook from './hooks/fish.js';

function App() {
  const isFish = useFishHook('salmon');

  return (
    <div>
      <h2>Is it a fish? {isFish.toString()}</h2>
    </div>
  );
}

export default App;
