import React from 'react';
import { AppBar, Tabs, Tab } from 'material-ui';

class Header extends React.Component {
  render() {
    return (
      <AppBar title="MobileHouse">
        <Tabs>
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
          <Tab label="Item 4" />
        </Tabs>
      </AppBar>
    )
  }
}

export default Header;