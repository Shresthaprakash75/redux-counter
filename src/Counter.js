import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}


// transforms the Redux state into an object containing props
const mapStateToProps = (state) => ({
  count: state.count
});

// connect the redux store with Counter component 
export default connect(mapStateToProps)(Counter);