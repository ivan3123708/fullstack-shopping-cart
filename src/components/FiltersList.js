import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import '../styles/FiltersList.css';

class FiltersList extends React.Component {

  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleNestedListToggle = (item) => {
    this.setState({ open: item.state.open });
  };

  render() {
    return (
      <div className="filtersList">
        <List>
          <Subheader style={{ fontSize: '16px', fontWeight: 'bold' }}>Search by:</Subheader>
          <ListItem 
            primaryText="Price"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="< $100" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="$100 - $250" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="$250 - $500" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="> $500" leftCheckbox={<Checkbox />} />
            ]}
          />
          <ListItem 
            primaryText="Brand"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Samsung" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Apple" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Huawei" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="LG" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="HTC" leftCheckbox={<Checkbox />} />,
            ]}
          />
          <ListItem 
            primaryText="Color"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Black" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="White" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Grey" leftCheckbox={<Checkbox />} />
            ]}
          />
          <ListItem 
            primaryText="OS"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Android" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="iOS" leftCheckbox={<Checkbox />} />
            ]}
          />
          <ListItem 
            primaryText="Internal memory"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="8GB" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="16GB" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="32GB" leftCheckbox={<Checkbox />} />
            ]}
          />
          <ListItem 
            primaryText="RAM"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="1GB" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="2GB" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="3GB" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="4GB" leftCheckbox={<Checkbox />} />
            ]}
          />
          <ListItem 
            primaryText="Display size"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="5''" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="5.2''" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="5.5''" leftCheckbox={<Checkbox />} />
            ]}
          />
          <ListItem 
            primaryText="Display resolution"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="1280x720" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="1920x1080" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="2560x1440" leftCheckbox={<Checkbox />} />
            ]}
          />
          <ListItem 
            primaryText="Camera"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="8Mpix" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="12Mpix" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="13Mpix" leftCheckbox={<Checkbox />} />
            ]}
          />
          <ListItem 
            primaryText="CPU"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Quad Core" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Hexa Core" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Octa Core" leftCheckbox={<Checkbox />} />
            ]}
          />
        </List>
      </div>
    )
  }
}

export default FiltersList;