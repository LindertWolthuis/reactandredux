import React from "react";
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        count: state.count
    };
}
class Counter extends React.Component {
   state = { count: 0 };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   decrement = () => {
//     this.setState({
//       count: this.state.count - 1
//     });
//   };
  //state = { count: 0 };
  
  increment = () => {this.props.dispatch({ type: "INCREMENT" });};
  decrement = () => {this.props.dispatch({ type: "DECREMENT" });};
  render() {
    return (
      <div>
        <h2>React-Redux</h2>
        <div>
          <button onClick={this.increment}>+</button><br></br>
          <span>{this.props.count}</span><br></br>
          <button onClick={this.decrement}>-</button><br></br>
        </div>
      </div>
    );
  }
}

// export default Counter;
export default connect(mapStateToProps)(Counter);