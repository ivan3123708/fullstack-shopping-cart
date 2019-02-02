import { SET_FILTER, CLEAR_FILTER } from '../constants';

const initState = {
  filters: {
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
  },
  checked: []
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_FILTER:
      const { filterType, filterValue } = action.payload;
      const newState = { ...state };

      if (newState.filters[filterType].includes(filterValue)) {
        newState.filters[filterType] = newState.filters[filterType].filter((item) => item !== filterValue);
        newState.checked = newState.checked.filter((item) => item !== filterValue);
      } else {
        newState.filters[filterType].push(filterValue);
        newState.checked.push(filterValue);
      }

      return newState;
    case CLEAR_FILTER:
      for (let key in initState.filters) {
        initState.filters[key] = [];
      }

      initState.checked = [];

      return initState;
    default:
      return state;
  }
};

export default filtersReducer;
