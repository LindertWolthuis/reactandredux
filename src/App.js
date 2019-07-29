import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const init = {
  count: 0
};

function reducer(state = init, action) {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });


const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
