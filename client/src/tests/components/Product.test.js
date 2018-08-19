import React from 'react';
import { shallow } from 'enzyme';
import Product from '../../components/Product';
import item from '../__mocks__/item';

describe('<Product />', () => {
  it('renders Product correctly', () => {
    const wrapper = shallow(<Product item={item} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.content-info').at(0).children()).toHaveLength(6);
    expect(wrapper.find('img').prop('src')).toBe('/img/samsung_galaxy_s8.jpg');
    expect(wrapper.find('.content-info').at(0).childAt(5).text()).toBe('Camera: 12 MP (f/1.7, 26mm, 1/2.5\", 1.4 µm, Dual Pixel PDA...');
  });
});