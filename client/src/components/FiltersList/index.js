import { compose } from 'recompose';
import { connect } from 'react-redux';
import { setFilter } from '@actions';
import FiltersList from './FiltersList';

const actions = { setFilter };

export default compose(
  connect(null, actions)
)(FiltersList);
