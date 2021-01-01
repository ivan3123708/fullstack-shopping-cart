import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectUser } from '@selectors/user';
import { getUser } from '@actions/index';
import { IState } from '@typings/state/index';
import Account, { Props } from './Account';

const mapStateToProps = (state: IState) => ({
  user: selectUser(state)
});

const actions = { getUser };

export default compose<Props, {}>(
  connect(mapStateToProps, actions)
)(Account);
