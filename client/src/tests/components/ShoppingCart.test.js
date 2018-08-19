import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCart from '../../components/ShoppingCart';

describe('<ShoppingCart />', () => {
  it('renders ShoppingCart correctly', () => {
    const wrapper = shallow(<ShoppingCart />);

    expect(wrapper).toMatchSnapshot();
  });
});