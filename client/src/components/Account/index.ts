import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getUser } from '@actions/index';
import { selectUser } from '@selectors/user';
import { State } from '@state/index';
import Account from './Account';

const mapStateToProps = (state: State) => ({
  user: selectUser(state)
});

const actions = { getUser };

export default compose(
  connect(mapStateToProps, actions)
)(Account);
