import React from 'react';
import { shallow } from 'enzyme';
import { Products } from '../../components/Products';
import catalog from '../__mocks__/catalog';

describe('<Products />', () => {
  it('renders Products correctly', () => {
    const wrapper = shallow(<Products
      catalogLoaded={true}
      catalog={catalog}
      initCatalog={() => { }}
      setSortBy={() => { }}
      clearFilters={() => { }}
    />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Product')).toHaveLength(3);
  });

  it('sorts products by given criteria', () => {
    const wrapper = shallow(<Products
      catalogLoaded={true}
      catalog={catalog}
      initCatalog={() => { }}
      setSortBy={() => { }}
      clearFilters={() => { }}
    />);

    wrapper.find('SelectField').simulate('change', null, null, 'Price: Low to High');
    expect(wrapper.state('value')).toBe('Price: Low to High');
  });
});