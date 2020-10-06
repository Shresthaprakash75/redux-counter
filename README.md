How redux work : Counter example
https://daveceddia.com/how-does-redux-work/

Not Pretty yet : Will add css when I have some free time

Actions, reducers, action creators, middleware, pure functions, immutability…
Project setup
npx create-react-app project-name
yarn add redux react-redux

....................................................
Philosophy
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

2.2 Connecting Component to redux 
we need to import connect function from react-redux




Learn More
what does redux do? When should u use it?
https://daveceddia.com/what-does-redux-do/

Visual Guide: How react state works?
https://daveceddia.com/visual-guide-to-state-in-react/

Keeping up to date with JS world
https://daveceddia.com/keeping-up-with-javascript/
