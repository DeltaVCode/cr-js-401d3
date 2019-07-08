import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from './settings/context';

export default function Title(props) {
  const context = useContext(SettingsContext);
  return (
    <>
      <h1>(hook) {context.title}</h1>
      <button
        type="button"
        onClick={() => context.changeTitleTo(Math.random())}
      >
        Change Title
      </button>
    </>
  );
}
