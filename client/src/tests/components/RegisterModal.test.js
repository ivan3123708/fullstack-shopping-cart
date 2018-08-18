import React from 'react';
import { shallow } from 'enzyme';
import RegisterModal from '../../components/RegisterModal';

describe('<RegisterModal />', () => {
  it('renders RegisterModal correctly', () => {
    const wrapper = shallow(<RegisterModal />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('form').children()).toHaveLength(13);
  });
});