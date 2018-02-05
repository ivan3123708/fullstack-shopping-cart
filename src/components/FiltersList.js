import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import { setFilter } from '../actions/filterActions';
import '../styles/FiltersList.css';

const styles = {
  checkbox: {
    marginLeft: 20
  }
}

class FiltersList extends React.Component {

  handleCheck = (e) => {
    this.props.setFilter(e.target.name, e.target.value);
  };

  render() {
    return (
      <div className="filtersList">
        <List>
          <Subheader style={{ fontSize: '16px', fontWeight: 'bold' }}>Search by:</Subheader>
          <ListItem 
            primaryText="Price"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style={styles.checkbox} label="$0 - $100" name="price" value="0-100" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="$100 - $250" name="price" value="100-250" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="$250 - $500" name="price" value="250-500" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="$500 - $1000" name="price" value="500-1000" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            primaryText="Brand"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style={styles.checkbox} label="Samsung" name="brand" value="samsung" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="Apple" name="brand" value="apple" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="Huawei" name="brand" value="huawei" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="LG" name="brand" value="lg" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="HTC" name="brand" value="htc" onCheck={this.handleCheck} />,
            ]}
          />
          <ListItem 
            primaryText="Color"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style={styles.checkbox} label="Black" name="color" value="black" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="White" name="color" value="white" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="Grey" name="color" value="grey" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            primaryText="OS"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style={styles.checkbox} label="Android" name="os" value="android" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="iOS" name="os" value="ios" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            primaryText="Internal memory"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style={styles.checkbox} label="8GB" name="internalMemory" value="8" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="16GB" name="internalMemory" value="16" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="32GB" name="internalMemory" value="32" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            primaryText="RAM"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style={styles.checkbox} label="1GB" name="ram" value="1" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="2GB" name="ram" value="2" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="3GB" name="ram" value="3" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="4GB" name="ram" value="4" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            primaryText="Display size"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style={styles.checkbox} label="5''" name="displaySize" value="5" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="5.2''" name="displaySize" value="5.2" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="5.5''" name="displaySize" value="5.5" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            primaryText="Display resolution"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style={styles.checkbox} label="1280x720" name="displayResolution" value="1280x720" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="1920x1080" name="displayResolution" value="1920x1080" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="2560x1440" name="displayResolution" value="2560x1440" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            primaryText="Camera"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style={styles.checkbox} label="8Mpix" name="camera" value="8" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="12Mpix" name="camera" value="12" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="13Mpix" name="camera" value="13" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            primaryText="CPU"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style={styles.checkbox} label="Quad Core" name="cpu" value="quad core" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="Hexa Core" name="cpu" value="hexa core" onCheck={this.handleCheck} />,
              <Checkbox style={styles.checkbox} label="Octa Core" name="cpu" value="octa core" onCheck={this.handleCheck} />
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