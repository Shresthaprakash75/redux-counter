import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './Counter';

const initialState = {
  count: 0
};

// tell Redux what our reducer should look like
function reducer(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: state.count - state.count
      }
    default:
      return state;
  }
}

// creating store and passing reducer on it
const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

render(<App />, document.getElementById('root'));