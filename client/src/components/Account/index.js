import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getUser } from '@actions';
import Account from './Account';

const mapStateToProps = (state) => ({
  user: state.loggedUser.user
});

const actions = { getUser };

export default compose(
  connect(mapStateToProps, actions)
)(Account);
