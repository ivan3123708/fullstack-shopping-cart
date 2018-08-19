import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutModal } from '../../components/CheckoutModal';
import cart from '../__mocks__/cart';

describe('<CheckoutModal />', () => {
  it('renders CheckoutModal correctly', () => {
    const wrapper = shallow(<CheckoutModal
      isOpen={true}
      onRequestClose={() => { }}
      toggle={() => { }}
      makeOrder={() => { }}
      cart={cart.items}
    />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('tbody').children()).toHaveLength(2);
    expect(wrapper.find('span').text()).toBe('$2,200.00');
  });
});