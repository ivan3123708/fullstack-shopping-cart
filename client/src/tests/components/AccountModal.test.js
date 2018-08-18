import React from 'react';
import { shallow } from 'enzyme';
import AccountModal from '../../components/AccountModal';
import user from '../__mocks__/user';

describe('<AccountModal />', () => {
  it('renders AccountModal correctly', () => {
    const wrapper = shallow(<AccountModal user={user} isOpen={true} onRequesClose={() => { }} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('sets state on input change correctly', () => {
    const wrapper = shallow(<AccountModal user={user} isOpen={true} onRequesClose={() => { }} />);

    wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'xxx@mail.com' } });
    wrapper.find('#address').simulate('change', { target: { name: 'addres', value: '1st street' } });
    wrapper.find('#phone').simulate('change', { target: { name: 'phone', value: '123456' } });

    expect(wrapper.state('email')).toEqual('xxx@mail.com');
    expect(wrapper.state('address')).toEqual('1st street');
    expect(wrapper.state('phone')).toEqual('123456');
  });
});