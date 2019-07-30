import { INCREMENT, REQUEST, RECEIVE } from "./action";

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
  
  const asyncInit = {
    isIncrement: INCREMENT,
    isFetching: false,
    count: 0
  }
  function asyncReducer(state = asyncInit, action) {
    switch(action.type) {
      case REQUEST:
        return {...state, 
          isFetching: true
        }
      case RECEIVE:
          if(action.isIncrement.type == INCREMENT)
          return {
            isFetching: false,
            count: state.count + 1
          }
        else
          return {
            isFetching: false,
            count: state.count - 1
          }
      default:
        return asyncInit;
    }
  }

  export default asyncReducer;