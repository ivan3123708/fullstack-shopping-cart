import { compose } from 'recompose';
import { connect } from 'react-redux';
import { initCatalog, clearFilters, setSortBy } from '@actions';
import { isCatalogLoaded, sortProducts, filterProducts } from '@selectors/catalog';
import Products from './Products';

const mapStateToProps = (state) => ({
  catalogLoaded: isCatalogLoaded(state),
  catalog: sortProducts(filterProducts(state), state.sortBy)
});

const actions = {
  initCatalog,
  clearFilters,
  setSortBy
};

export default compose(
  connect(mapStateToProps, actions)
)(Products);
