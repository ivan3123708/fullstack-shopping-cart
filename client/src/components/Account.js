import React from 'react';
import { connect } from 'react-redux';
import AccountModal from './AccountModal';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Edit from 'material-ui/svg-icons/image/edit.js';
import '../styles/Account.css';

class Account extends React.Component {

  state = {
    accountModalOpen: false
  }

  toggleAccountModal = () => {
    this.setState((prevState) => ({ accountModalOpen: !prevState.accountModalOpen }))
  }

  render() {
    return (
      <div>
        <h1>Your Account</h1>
        <div className="account">
          <div className="account-info">
            <h2>Info</h2>
            <Divider />
            <p><b>Username: </b>{this.props.user.username}</p>
            <p><b>E-mail: </b>{this.props.user.email}</p>
            <p><b>Billing Address: </b>{this.props.user.address}</p>
            <p><b>Phone: </b>{this.props.user.phone}</p>
            <RaisedButton
              className="btn"
              label="Edit account"
              labelPosition="before"
              primary={true}
              icon={<Edit />}
              onClick={this.toggleAccountModal}
            />
          </div>
          <div className="account-history">
            <h2>Order History</h2>
            <Divider />
            <h1>No order history.</h1>
          </div>
        </div>
        <AccountModal
          isOpen={this.state.accountModalOpen}
          onRequestClose={this.toggleAccountModal}
        />
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  user: state.loggedUser
});

export default connect(mapStateToProps)(Account);