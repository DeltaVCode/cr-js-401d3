import React from 'react';
import ReactDOM from 'react-dom';
import SettingsContext from './settings/context.js';
import App from './app.js';
import Title from './title-hooks.js';

function Main() {
  return (
    <SettingsContext>
      <Title />
      <App />
    </SettingsContext>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
