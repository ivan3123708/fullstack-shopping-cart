import { compose } from 'recompose';
import { connect } from 'react-redux';
import { initCatalog, clearFilters, setSortBy } from '@actions';
import { isCatalogLoaded, sortProducts, filterProducts, selectSortBy } from '@selectors/catalog';
import Products from './Products';

const mapStateToProps = (state) => ({
  catalogLoaded: isCatalogLoaded(state),
  catalog: sortProducts(filterProducts(state), state.sortBy),
  sortBy: selectSortBy(state)
});

const actions = {
  initCatalog,
  clearFilters,
  setSortBy
};

export default compose(
  connect(mapStateToProps, actions)
)(Products);
