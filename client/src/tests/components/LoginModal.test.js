import React from 'react';
import { shallow } from 'enzyme';
import LoginModal from '../../components/LoginModal';

describe('<LoginModal />', () => {
  it('renders LoginModal correctly', () => {
    const wrapper = shallow(<LoginModal />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('form').children()).toHaveLength(7);
  });
});