import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const appEntryId = 'app-entry-id';
const appEntry = document.getElementById(appEntryId);

if (!appEntry) {
  const el = document.createElement('div');
  el.id = appEntryId;
  document.querySelector('body').appendChild(el);
}

ReactDOM.render(<App />, document.getElementById(appEntryId));
