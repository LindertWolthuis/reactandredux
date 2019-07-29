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
  export default reducer;