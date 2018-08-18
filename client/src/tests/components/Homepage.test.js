import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../../components/Homepage';

describe('<Homepage />', () => {
  it('renders Homepage correctly', () => {
    const wrapper = shallow(<Homepage />);

    expect(wrapper).toMatchSnapshot();
  });
});