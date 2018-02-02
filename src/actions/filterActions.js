const setFilter = (filterType, filter) => ({
  type: 'SET_FILTER',
  filterType: filterType,
  filter: filter
});

export { setFilter };