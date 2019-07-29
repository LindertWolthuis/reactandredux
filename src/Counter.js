import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h2>React-Redux</h2>
        <div>
          <button onClick={this.increment}>+</button><br></br>
          <span>{this.state.count}</span><br></br>
          <button onClick={this.decrement}>-</button><br></br>
        </div>
      </div>
    );
  }
}

export default Counter;
