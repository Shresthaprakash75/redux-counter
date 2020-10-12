import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset} from './actions';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch(increment());
  }

  decrement = () => {
    this.props.dispatch(decrement());
  }

  reset = () => {
    this.props.dispatch(reset());
  }
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <br />
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);