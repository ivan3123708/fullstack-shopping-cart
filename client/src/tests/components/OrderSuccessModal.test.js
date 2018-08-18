import React from 'react';
import { shallow } from 'enzyme';
import OrderSuccessModal from '../../components/OrderSuccessModal';

describe('<OrderSuccessModal />', () => {
  it('renders OrderSuccessModal correctly', () => {
    const wrapper = shallow(<OrderSuccessModal />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.success').children()).toHaveLength(5);
    expect(wrapper.find('img').prop('src')).toEqual('/img/success.gif');
  });
});