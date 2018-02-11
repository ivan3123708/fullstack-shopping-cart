const setFilter = (filterType, filter) => ({
  type: 'SET_FILTER',
  filterType: filterType,
  filter: filter
});

const clearFilters = () => ({
  type: 'CLEAR_FILTERS'
});

export { setFilter, clearFilters };