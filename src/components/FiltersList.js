import React from 'react';
import { List, ListItem, ListItemText, ListSubheader, Collapse, Subheader } from 'material-ui';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import '../styles/FiltersList.css';

class FiltersList extends React.Component {

  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="filtersList">
        <List>
          <ListItem onClick={this.handleClick}>
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <ListItem primaryText="Brand"></ListItem>
          <ListItem primaryText="Color"></ListItem>
          <ListItem primaryText="OS"></ListItem>
          <ListItem primaryText="Internal memory"></ListItem>
          <ListItem primaryText="RAM"></ListItem>
          <ListItem primaryText="Display size"></ListItem>
          <ListItem primaryText="Display resolution"></ListItem>
          <ListItem primaryText="Camera"></ListItem>
          <ListItem primaryText="CPU"></ListItem>
        </List>
      </div>
    )
  }
}

export default FiltersList;