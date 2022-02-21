import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducer/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);