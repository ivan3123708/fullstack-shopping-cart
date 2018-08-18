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
      cart={cart}
    />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('tbody').children()).toHaveLength(cart.length);
    expect(wrapper.find('span').text()).toEqual(`$${cart.reduce((acc, item) => acc += item.product.info.price * item.quantity, 0)}.00`);
  });
});