import React from "react";
import { connect } from 'react-redux';
import { increment, decrement } from './action';


function mapStateToProps(state) {
    return {
        count: state.count
    };
}
function Counter ({count, increment, decrement}) {
//    state = { count: 0 };
 
//   increment = () => {this.props.increment();}
//   decrement = () => {this.props.decrement();}
//   render() {
    return (
      <div>
        <h2>React-Redux</h2>
        <div>
          <button onClick={increment}>+</button><br></br>
          <span>{count}</span><br></br>
          <button onClick={decrement}>-</button><br></br>
        </div>
      </div>
    );
//   }
}
const mapDispatchToProps = dispatch => (
    {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);