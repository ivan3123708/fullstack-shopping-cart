let defaultUserState = {
  isLogged: false,
  data: {
    username: '',
    password: ''
  },
  cart: []
};

const userReducer = (state = defaultUserState, action) => {
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

export default userReducer;