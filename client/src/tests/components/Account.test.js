import React from 'react';
import { shallow } from 'enzyme';
import { Account } from '../../components/Account';
import user from '../__mocks__/user';

describe('<Account />', () => {
  it('renders Account with no user logged correctly', () => {
    const wrapper = shallow(<Account user="" getUser={() => { }} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('img').prop('src')).toEqual('/img/loader.gif');
    expect(wrapper.find('h1').text()).toEqual('LOADING ACCOUNT DATA...');
  });

  it('renders Account with user logged correctly', () => {
    const wrapper = shallow(<Account user={user} getUser={() => {}} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.account-info').children()).toHaveLength(7);
    expect(wrapper.find('.account-history').children()).toHaveLength(3);
    expect(wrapper.find('tbody').children()).toHaveLength(user.orders.length);
  });
});