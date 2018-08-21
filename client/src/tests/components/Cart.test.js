import React from 'react';
import { shallow } from 'enzyme';
import { Cart } from '../../components/Cart';
import cart from '../__mocks__/cart';

describe('<Cart />', () => {
  it('renders Cart correctly', () => {
    const wrapper = shallow(<Cart cart={cart} getCart={() => { }} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.info').childAt(0).text()).toBe('Number of items: 3');
    expect(wrapper.find('.info').childAt(1).text()).toBe('Total amount: $2,200.00');
    expect(wrapper.find('tbody').children()).toHaveLength(2);
    expect(wrapper.find('tbody').childAt(0).children()).toHaveLength(6);
  });

  it('opens modals on button click', () => {
    const wrapper = shallow(<Cart cart={cart} getCart={() => { }} />);

    wrapper.find('RaisedButton').at(0).simulate('click');
    expect(wrapper.state('checkoutModalOpen')).toBe(true);

    wrapper.find('RaisedButton').at(1).simulate('click');
    expect(wrapper.state('dialogOpen')).toBe(true);
  });

  it('removes one item from the cart on button click', (done) => {
    const wrapper = shallow(<Cart cart={cart} getCart={() => { }} />);

    wrapper.find('tbody').childAt(0).childAt(5).childAt(0).simulate('click');
    expect(wrapper.find('tbody').children()).toHaveLength(2);

    done();
  });
});