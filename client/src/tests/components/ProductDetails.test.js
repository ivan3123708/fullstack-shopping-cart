import React from 'react';
import { shallow } from 'enzyme';
import { ProductDetails } from '../../components/ProductDetails';
import user from '../__mocks__/user';
import item from '../__mocks__/item';

describe('<ProductDetails />', () => {
  it('renders ProductDetails correctly', () => {
    const wrapper = shallow(<ProductDetails loggedUser={user} product={item} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text()).toBe('Samsung Galaxy S8');
    expect(wrapper.find('img').prop('src')).toBe('/img/samsung_galaxy_s8.jpg');
    expect(wrapper.find('table').children()).toHaveLength(13);
    expect(wrapper.find('.price').text()).toBe('Price: $720.00');
  });

  it('handles add to cart button when no user is logged in', () => {
    const wrapper = shallow(<ProductDetails loggedUser="" product={item} />);

    wrapper.find('RaisedButton').at(1).simulate('click');
    expect(wrapper.state('snackbarOpen')).toBe(true);
    expect(wrapper.find('Snackbar').prop('message')).toBe('You must be logged in!');
  });

  it('handles add to cart button when user is logged in', () => {
    const wrapper = shallow(<ProductDetails loggedUser={user} product={item} />);

    wrapper.find('RaisedButton').at(1).simulate('click');
    expect(wrapper.state('snackbarOpen')).toBe(true);
    expect(wrapper.find('Snackbar').prop('message')).toBe('Item added to your cart.');
  });
});