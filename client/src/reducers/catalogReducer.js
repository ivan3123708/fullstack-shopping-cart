export const defaultCatalogState = {
  isLoaded: false,
  items: []
}

const catalogReducer = (state = defaultCatalogState, action) => {
  switch (action.type) {
    case 'INIT_CATALOG':
      return {
        isLoaded: true,
        items: [ ...action.catalog ]
      }
    default:
      return state
  }
}

export default catalogReducer;