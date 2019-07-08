import React from 'react';
import { useState } from 'react';

function App() {
  const [clicks, setClicks] = useState(0);
  return (
    <div>
      <h2>Button has been clicked {clicks} time(s)</h2>
      <button type="button" onClick={() => setClicks(clicks + 1)}>
        Update Clicks
      </button>
    </div>
  );
}

export default App;
