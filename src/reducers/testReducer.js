let defaultTestState = {
  isLogged: false
};

const testReducer = (state = defaultTestState, action) => {
  switch(action.type) {
    case 'TOGGLE_LOGGED':
    console.log(state);
      return {
        ...state,
        isLogged: true
      }
    default: 
      return state
  }
}

export default testReducer;