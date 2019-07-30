import React from "react";
import { connect } from 'react-redux';
import { increment, decrement, asyncIncrement, asyncDecrement } from './action';


function mapStateToProps(state) {
    return {
        isFetching: state.isFetching,
        count: state.count
    };
}
function Counter ({count, isFetching, increment, decrement}) {
//    state = { count: 0 };
 
//   increment = () => {this.props.increment();}
//   decrement = () => {this.props.decrement();}
//   render() {
    return (
      <div>
        <h2>React-Redux</h2>
        <div>
          <button onClick={increment} disabled={isFetching}>+</button><br></br>
          <span>{count}</span><br></br>
          <button onClick={decrement} disabled={isFetching}>-</button><br></br>
        </div>
      </div>
    );
//   }
}
const mapDispatchToProps = dispatch => (
    {
      increment: () => dispatch(asyncIncrement()),
      decrement: () => dispatch(asyncDecrement())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);