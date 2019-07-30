import React from 'react';
import './App.css';
import Counter from "./Counter"
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import reducer from './reducer';
import asyncreducer from './reducer';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';

// const store = createStore(reducer);
const store = createStore(
  asyncreducer,
  applyMiddleware(thunkMiddleware) 
);


const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
