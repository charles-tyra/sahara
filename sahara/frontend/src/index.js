import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import csrfFetch, { restoreSession } from './store/csrf';

restoreSession().then(initializeApp);

// Only to be used during development
const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

const initializeApp = () => {
  ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
  );
}