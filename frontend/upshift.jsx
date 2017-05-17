import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { postSession, postUser, deleteSession } from "./actions/session_actions"
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  // window.postSession = postSession;
  // window.postUser = postUser;
  window.deleteSession = deleteSession;
  let store;
  if (window.session) {
    const preloadedState = { session: window.session  };
    store = configureStore(preloadedState);
    delete window.session;
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
