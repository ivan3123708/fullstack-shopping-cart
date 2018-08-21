import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import user from '../__mocks__/user';
import cart from '../__mocks__/cart';

describe('<Header />', () => {
  it('renders Header with no user logged correctly', () => {
    const wrapper = shallow(<Header
      loggedUser=""
      cart={{ items: [] }}
      getUser={() => { }}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders Header with user logged correctly', () => {
    const wrapper = shallow(<Header
      loggedUser={user}
      cart={cart}
      getUser={() => { }}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});