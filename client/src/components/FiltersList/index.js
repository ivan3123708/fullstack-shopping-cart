import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectFilters } from '@selectors/catalog';
import { setFilter } from '@actions';
import FiltersList from './FiltersList';

const mapStateToProps = (state) => ({
  filters: selectFilters(state)
});

const actions = { setFilter };

export default compose(
  connect(mapStateToProps, actions)
)(FiltersList);
