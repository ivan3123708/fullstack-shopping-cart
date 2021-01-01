import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectFilters } from '@selectors/catalog';
import { setFilter } from '@actions/index';
import { IState } from '@typings/state/index';
import FiltersList, { Props } from './FiltersList';

const mapStateToProps = (state: IState) => ({
  filters: selectFilters(state)
});

const actions = { setFilter };

export default compose<Props, {}>(
  connect(mapStateToProps, actions)
)(FiltersList);
