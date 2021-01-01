import React, { useState, useEffect } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { IUser, IOrder } from '@typings/state/index';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import AccountModal from '../AccountModal';
import '@styles/Account.css';

export interface Props {
  user: IUser;
  getUser: () => void;
  editUser: (data: Record<string, any>) => void;
}

const Account = ({ user, getUser }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getUser();
  }, [modalOpen]);

  return (
    <div className="account-container">
      {!user ? (
        <div className="loader">
         <img src="/img/loader.gif" />
         <h1>LOADING ACCOUNT DATA...</h1>
       </div>
      ) : (
        <>
          <h1>Your Account</h1>
          <div className="account">
            <div className="account-info">
              <div className="top">
                <h2>Info</h2>
                <IconButton
                  color="secondary"
                  aria-label="Edit"
                  onClick={() => setModalOpen(true)}>
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
                      {user.orders.map((order: IOrder) => (
                        <tr key={order.name}>
                          <td>{moment(order.dateCreated).format('ll')}</td>
                          <td>{order.name}</td>
                          <td>{numeral(order.price).format('$0,0.00')}</td>
                          <td>{order.quantity}</td>
                          <td>{numeral(parseInt(order.price) * parseInt(order.quantity)).format('$0,0.00')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table> :
                  <h1>No order history.</h1>
                }
              </div>
            </div>
          </div>
          <AccountModal
            user={user}
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default Account;
