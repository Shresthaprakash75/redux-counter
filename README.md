How redux work : Counter example
https://daveceddia.com/how-does-redux-work/

Not Pretty yet : Will add css when I have some free time

Actions, reducers, action creators, middleware, pure functions, immutability…
Project setup
npx create-react-app project-name
yarn add redux react-redux

....................................................
Philosophy
dispatch(action) -> reducer -> new state -> re-render

Redux keeps the state of your app in a single store.
You can extract parts of that state and plug it in your components props
(this lets you keep the data in one global place -the store & feed it directly to any component in the app)

state is the data
store is where the state is kept

redux vs react-redux
redux gives you a store, and lets you keep state on it, and get state out and respond when the state changes. That's it.
react-redux lets you connect the pieces of the state to React Components.

.............................................
Steps
1: Plain old React State
- count state is stored in the top level of Counter Component 
- when user clicks '+', onClick handler is called, which is bound to increment function 
- increment function updates the state with the new count
- state gets changed, react re-renders the counter component, new value is displayed
similarly with - button same thing like above but opposite

2: Add Redux piece by piece
2.1 Imagine we've moved the components state to Redux
therefore, we should remove the state from the component. since we are getting them from redux soon.
{this.state.count} will be changed to {this.props.count}


2.2 Connecting Component to redux (Counter.js)
import {connect} from 'react-redux';
export default connect(mapStateToProps)(Counter);

<!-- to get the count out of redux
we need to import connect function from react-redux
then, we need to connect the counter component to redux at the bottom -->


2.3 Provide a store (index.js)
const App = () => {
    <Provider>
        <Counter> //Component Name
    </Provider>
}

<!-- Redux holds the global state for the entire app, and by wrapping the entire app with the Provider component from react-redux, every component in the app tree will be able to use connect to access the Redux store if it wants to. -->


2.4 Create the store (index.js)
import { CreateStore } from 'redux';
const store = createStore();
const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

<!-- CreateStore is the function which is handy to create the store. When the store is created it has to be passed down to the provider. -->

2.5 Reducer function (index.js)
function reducer(){

}
const store = CreateStore(reducer);
<!-- create reducer function and pass it to CreateStore() -->

2.6 Reducer should return something
function reducer(){
    return {
        count: 42
    };
}

2.7 Making things interactive
2.7.1 State and action on Reducer
<!-- reducer function takes state and action -->
function reducer(state, action){
    <!-- return something -->
}

2.7.2 Inital State
const initialState = {count: 0};
function reducer(state = initialState, action){
    return state
}

2.7.3 action 
<!-- respond to action -->
function reducer(state = initialState, action) {
  if(action.type === "INCREMENT") {
    return {
      count: state.count + 1
    };
  }

  return state;
}
<!-- or -->
function reducer(state = initialState, action) {
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
<!-- object needs to have type property 
    and it's value should be a string
    {
        type: "INCREMENT"
    }
    {
        type: "DECREMENT"
    }
-->

2.7.4 Feed and action to reducer -Counter.js
increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }
<!-- actions are not born
    they are dispatched
 -->



Learn More
Learn React first
https://daveceddia.com/learning-react-start-small/
https://daveceddia.com/react-practice-projects/

what does redux do? When should u use it?
https://daveceddia.com/what-does-redux-do/

Visual Guide: How react state works?
https://daveceddia.com/visual-guide-to-state-in-react/

Keeping up to date with JS world
https://daveceddia.com/keeping-up-with-javascript/