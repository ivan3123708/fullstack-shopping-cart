const catalogReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_CATALOG':
      return [
        ...action.catalog
      ]
    default:
      return state
  }
}

export default catalogReducer;