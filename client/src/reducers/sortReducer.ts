import { SET_SORT_BY } from '../constants';
import { actionTypes } from '@typings/action';
import { TSortBy } from '@typings/state/sortBy';

interface IAction {
  type: actionTypes;
  payload: TSortBy;
}

const initState: TSortBy = 'Name: A-Z';

const sortReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case SET_SORT_BY:
      return action.payload;
    default:
      return state;
  }
};

export default sortReducer;
