let defaultFiltersState = {
  price: [],
  brand: [],
  color: [],
  os: [],
  internalMemory: [],
  ram: [],
  displaySize: [],
  displayResolution: [],
  camera: [],
  cpu: []
}

const filtersReducer = (state = defaultFiltersState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      state[action.filterType].push(action.filter);
      return {
        ...state
      }
    default:
      return state
  }
}

export default filtersReducer;