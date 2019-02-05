import * as React from 'react';
import * as moment from 'moment';
import * as numeral from 'numeral';
import { IUser, IOrder } from '@typings/state/index';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import AccountModal from '../AccountModal';
import '@styles/Account.css';

interface Props {
  user: IUser;
  getUser: () => any;
}

interface State {
  accountModalOpen: boolean;
}

class Account extends React.Component<Props, State> {
  state = {
    accountModalOpen: false
  }

  toggleAccountModal = () => {
    this.setState({ accountModalOpen: !this.state.accountModalOpen });
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { user } = this.props;

    if(!user) {
      return (
        <div className="account-container">
          <div className="loader">
            <img src="/img/loader.gif" />
            <h1>LOADING ACCOUNT DATA...</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="account-container">
          <h1>Your Account</h1>
          <div className="account">
            <div className="account-info">
              <div className="top">
                <h2>Info</h2>
                <IconButton
                  color="secondary"
                  aria-label="Edit"
                  onClick={this.toggleAccountModal}>
                  <EditIcon />
                </IconButton>
              </div>
              <Divider />
              <p><b>Username: </b>{user.username}</p>
              <p><b>E-mail: </b>{user.email}</p>
              <p><b>Billing Address: </b>{user.address}</p>
              <p><b>Phone: </b>{user.phone}</p>
            </div>
            <div className="account-history">
              <h2>Order History</h2>
              <Divider />
              <div className="orders">
                {user.orders.length ?
                  <table>
                    <thead>
                      <tr>
                        <th>Date Created</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.orders.map((order: IOrder) => {
                        return (
                          <tr key={order.name}>
                            <td>{moment(order.dateCreated).format('ll')}</td>
                            <td>{order.name}</td>
                            <td>{numeral(order.price).format('$0,0.00')}</td>
                            <td>{order.quantity}</td>
                            <td>{numeral(parseInt(order.price) * parseInt(order.quantity)).format('$0,0.00')}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table> :
                  <h1>No order history.</h1>
                }
              </div>
            </div>
          </div>
          <AccountModal
            user={user}
            isOpen={this.state.accountModalOpen}
            onRequestClose={this.toggleAccountModal}
          />
        </div>
      );
    }
  }
};

export default Account;
