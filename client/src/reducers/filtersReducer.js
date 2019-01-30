import { SET_FILTER, CLEAR_FILTER } from '../constants';

const initState = {
  priceRange: [],
  brand: [],
  color: [],
  os: [],
  internalMemory: [],
  ram: [],
  displaySize: [],
  displayResolution: [],
  camera: [],
  cpu: []
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_FILTER:
      const { filterType, filter } = action.payload;

      if (state[filterType].includes(filter)) {
        state[filterType] = state[filterType].filter((item) => item !== filter);
      } else {
        state[filterType].push(filter);
      }

      return {
        ...state
      };
    case CLEAR_FILTER:
      return initState;
    default:
      return state;
  }
};

export default filtersReducer;
