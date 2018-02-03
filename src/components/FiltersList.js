import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import { setFilter } from '../actions/filterActions';
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

  handleCheck = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    this.props.setFilter(e.target.name, e.target.value);
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
              <ListItem key={1} primaryText="$0 - $100" leftCheckbox={<Checkbox name="price" value="0-100" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="$100 - $250" leftCheckbox={<Checkbox name="price" value="100-250" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="$250 - $500" leftCheckbox={<Checkbox name="price" value="250-500" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="$500 - $1000" leftCheckbox={<Checkbox name="price" value="500-1000" onCheck={this.handleCheck} />} />
            ]}
          />
          <ListItem 
            primaryText="Brand"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Samsung" leftCheckbox={<Checkbox name="brand" value="samsung" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="Apple" leftCheckbox={<Checkbox name="brand" value="apple" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="Huawei" leftCheckbox={<Checkbox name="brand" value="huawei" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="LG" leftCheckbox={<Checkbox name="brand" value="lg" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="HTC" leftCheckbox={<Checkbox name="brand" value="htc" onCheck={this.handleCheck} />} />,
            ]}
          />
          <ListItem 
            primaryText="Color"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Black" leftCheckbox={<Checkbox name="color" value="black" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="White" leftCheckbox={<Checkbox name="color" value="white" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="Grey" leftCheckbox={<Checkbox name="color" value="grey" onCheck={this.handleCheck} />} />
            ]}
          />
          <ListItem 
            primaryText="OS"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Android" leftCheckbox={<Checkbox name="os" value="android" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="iOS" leftCheckbox={<Checkbox name="os" value="iOs" onCheck={this.handleCheck} />} />
            ]}
          />
          <ListItem 
            primaryText="Internal memory"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="8GB" leftCheckbox={<Checkbox name="internalMemory" value="8" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="16GB" leftCheckbox={<Checkbox name="internalMemory" value="16" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="32GB" leftCheckbox={<Checkbox name="internalMemory" value="32" onCheck={this.handleCheck} />} />
            ]}
          />
          <ListItem 
            primaryText="RAM"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="1GB" leftCheckbox={<Checkbox name="ram" value="1" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="2GB" leftCheckbox={<Checkbox name="ram" value="2" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="3GB" leftCheckbox={<Checkbox name="ram" value="3" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="4GB" leftCheckbox={<Checkbox name="ram" value="4" onCheck={this.handleCheck} />} />
            ]}
          />
          <ListItem 
            primaryText="Display size"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="5''" leftCheckbox={<Checkbox name="displaySize" value="5" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="5.2''" leftCheckbox={<Checkbox name="displaySize" value="5.2" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="5.5''" leftCheckbox={<Checkbox name="displaySize" value="5.5" onCheck={this.handleCheck} />} />
            ]}
          />
          <ListItem 
            primaryText="Display resolution"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="1280x720" leftCheckbox={<Checkbox name="displayResolution" value="1280x720" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="1920x1080" leftCheckbox={<Checkbox name="displayResolution" value="1920x1080" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="2560x1440" leftCheckbox={<Checkbox name="displayResolution" value="2560x1440" onCheck={this.handleCheck} />} />
            ]}
          />
          <ListItem 
            primaryText="Camera"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="8Mpix" leftCheckbox={<Checkbox name="camera" value="8" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="12Mpix" leftCheckbox={<Checkbox name="camera" value="12" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="13Mpix" leftCheckbox={<Checkbox name="camera" value="13" onCheck={this.handleCheck} />} />
            ]}
          />
          <ListItem 
            primaryText="CPU"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Quad Core" leftCheckbox={<Checkbox name="cpu" value="quad core" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="Hexa Core" leftCheckbox={<Checkbox name="cpu" value="hexa core" onCheck={this.handleCheck} />} />,
              <ListItem key={1} primaryText="Octa Core" leftCheckbox={<Checkbox name="cpu" value="octa core" onCheck={this.handleCheck} />} />
            ]}
          />
        </List>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filterType, filter) => dispatch(setFilter(filterType, filter))
});

export default connect(null, mapDispatchToProps)(FiltersList);