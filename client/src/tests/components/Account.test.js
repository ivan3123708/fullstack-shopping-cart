import React from 'react';
import { shallow } from 'enzyme';
import { Account } from '../../components/Account';
import user from '../__mocks__/user';

describe('<Account />', () => {
  it('renders Account with no user logged correctly', () => {
    const wrapper = shallow(<Account user="" getUser={() => { }} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('img').prop('src')).toBe('/img/loader.gif');
    expect(wrapper.find('h1').text()).toBe('LOADING ACCOUNT DATA...');
  });

  it('renders Account with user logged correctly', () => {
    const wrapper = shallow(<Account user={user} getUser={() => {}} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.account-info').children()).toHaveLength(7);
    expect(wrapper.find('.account-history').children()).toHaveLength(3);
    expect(wrapper.find('tbody').children()).toHaveLength(2);
  });

  it('opens modal on button click', () => {
    const wrapper = shallow(<Account user={user} getUser={() => { }} />);

    wrapper.find('RaisedButton').simulate('click');
    expect(wrapper.state('accountModalOpen')).toBe(true);
  });
});