let defaultSortState = 'Name: A-Z';

const sortReducer = (state = defaultSortState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return action.sortBy
    default:
      return state
  }
};

export default sortReducer;