import { SET_FILTER, CLEAR_FILTERS } from '../constants';
import { IFilters } from '@typings/state/index';
import { actionTypes } from '@typings/action';
import { filterTypes, filterValues } from '@typings/filters';

interface IAction {
  type: actionTypes;
  payload: {
    filterType: filterTypes;
    filterValue: filterValues;
  }
}

const initState: IFilters = {
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

const filtersReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case SET_FILTER:
      const { filterType, filterValue } = action.payload;
      const newState = { ...state };

      if (newState.filters[filterType].includes(filterValue)) {
        newState.filters[filterType] = newState.filters[filterType].filter((item: string) => item !== filterValue);
        newState.checked = newState.checked.filter((item) => item !== filterValue);
      } else {
        newState.filters[filterType].push(filterValue);
        newState.checked.push(filterValue);
      }

      return newState;
    case CLEAR_FILTERS:
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
