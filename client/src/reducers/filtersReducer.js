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
      const newState = { ...state };

      if (newState[filterType].includes(filter)) {
        newState[filterType] = newState[filterType].filter((item) => item !== filter);
      } else {
        newState[filterType].push(filter);
      }

      return newState;
    case CLEAR_FILTER:
      for (let key in initState) {
        initState[key] = [];
      }

      return initState;
    default:
      return state;
  }
};

export default filtersReducer;
