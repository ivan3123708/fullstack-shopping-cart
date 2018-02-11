let defaultFiltersState = {
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

const filtersReducer = (state = defaultFiltersState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      if(state[action.filterType].includes(action.filter)) {
        state[action.filterType] = state[action.filterType].filter((item) => item !== action.filter);
      } else {
        state[action.filterType].push(action.filter);
      }

      return {
        ...state
      };
    case 'CLEAR_FILTERS':
      return {
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
    default:
      return state
  }
}

export default filtersReducer;