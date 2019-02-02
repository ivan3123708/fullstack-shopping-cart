import { SET_SORT_BY } from '../constants';

const initState = 'Name: A-Z';

const sortReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return action.payload;
    default:
      return state;
  }
};

export default sortReducer;
