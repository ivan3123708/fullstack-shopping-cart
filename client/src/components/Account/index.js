import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getUser } from '@actions';
import { selectUser } from '@selectors/user';
import Account from './Account';

const mapStateToProps = (state) => ({
  user: selectUser(state)
});

const actions = { getUser };

export default compose(
  connect(mapStateToProps, actions)
)(Account);
