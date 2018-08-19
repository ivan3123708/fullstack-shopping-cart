import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';

describe('<NotFound />', () => {
  it('renders NotFound correctly', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text()).toBe('404');
    expect(wrapper.find('h3').text()).toBe('Page Not Found');
  });
});