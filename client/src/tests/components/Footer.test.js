import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  it('renders Footer correctly', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});