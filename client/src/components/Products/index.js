import { compose } from 'recompose';
import { connect } from 'react-redux';
import { initCatalog, clearFilters, setSortBy } from '@actions';
import filterProducts from '@selectors/filterProducts';
import sortProducts from '@selectors/sortProducts';
import Products from './Products';

const mapStateToProps = (state) => ({
  catalogLoaded: state.catalog.isLoaded,
  catalog: sortProducts(filterProducts(state.catalog.items, state.filters), state.sortBy)
});

const actions = {
  initCatalog,
  clearFilters,
  setSortBy
};

export default compose(
  connect(mapStateToProps, actions)
)(Products);
