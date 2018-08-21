import React from 'react';
import { shallow } from 'enzyme';
import { FiltersList } from '../../components/FiltersList';

describe('<FiltersList />', () => {
  it('renders FiltersList correctly', () => {
    const wrapper = shallow(<FiltersList />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.listItem')).toHaveLength(10);
  });
});