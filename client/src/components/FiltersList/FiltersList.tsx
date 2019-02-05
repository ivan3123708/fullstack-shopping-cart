import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import { IFilters } from '@state/index';
import '@styles/FiltersList.css';

interface Props {
  filters: IFilters;
  setFilter: (name: string, value: string) => void;
}

export class FiltersList extends React.Component<Props> {
  handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { setFilter } = this.props;

    setFilter(e.target.name, e.currentTarget.value);
  };

  render() {
    const { filters: { checked } } = this.props;

    return (
      <div className="filtersList">
        <List>
          <Subheader className="subheader">Search by:</Subheader>
          <ListItem
            className="listItem"
            primaryText="Price"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="< $250" name="priceRange" value="<250" checked={checked.includes('<250')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$250 - $500" name="priceRange" value="250-500" checked={checked.includes('250-500')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$500 - $750" name="priceRange" value="500-750" checked={checked.includes('500-750')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$750 >" name="priceRange" value="750>" checked={checked.includes('750>')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Brand"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Samsung" name="brand" value="samsung" checked={checked.includes('samsung')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Apple" name="brand" value="apple" checked={checked.includes('apple')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Huawei" name="brand" value="huawei" checked={checked.includes('huawei')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="LG" name="brand" value="lg" checked={checked.includes('lg')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="HTC" name="brand" value="htc" checked={checked.includes('htc')} onCheck={this.handleCheck} />,
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Color"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Black" name="color" value="black" checked={checked.includes('black')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="White" name="color" value="white" checked={checked.includes('white')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Grey" name="color" value="grey" checked={checked.includes('grey')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="OS"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Android" name="os" value="android" checked={checked.includes('android')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="iOS" name="os" value="ios" checked={checked.includes('ios')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Internal memory"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="16GB" name="internalMemory" value="16" checked={checked.includes('16')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="64GB" name="internalMemory" value="64" checked={checked.includes('64')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="128GB" name="internalMemory" value="128" checked={checked.includes('128')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="256GB" name="internalMemory" value="256" checked={checked.includes('256')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="RAM"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="1GB" name="ram" value="1" checked={checked.includes('1')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="3GB" name="ram" value="3" checked={checked.includes('3')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="4GB" name="ram" value="4" checked={checked.includes('4')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="6GB" name="ram" value="6" checked={checked.includes('6')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Display size"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="4.5''" name="displaySize" value="4.5" checked={checked.includes('4.5')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="5.1''" name="displaySize" value="5.1" checked={checked.includes('5.1')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="5.5''" name="displaySize" value="5.5" checked={checked.includes('5.5')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="5.8''" name="displaySize" value="5.8" checked={checked.includes('5.8')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="6.0''" name="displaySize" value="6.0" checked={checked.includes('6.0')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="6.3''" name="displaySize" value="6.3" checked={checked.includes('6.3')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Display resolution"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="540x960" name="displayResolution" value="540x960" checked={checked.includes('540x960')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1080x1920" name="displayResolution" value="1080x1920" checked={checked.includes('1080x1920')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1125x2436" name="displayResolution" value="1125x2436" checked={checked.includes('1125x2436')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1440x2560" name="displayResolution" value="1440x2560" checked={checked.includes('1440x2560')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1440x2880" name="displayResolution" value="1440x2880" checked={checked.includes('1440x2880')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1440x2960" name="displayResolution" value="1440x2960" checked={checked.includes('1440x2960')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="Camera"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="8Mpix" name="camera" value="8" checked={checked.includes('8')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="12Mpix" name="camera" value="12" checked={checked.includes('12')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="13Mpix" name="camera" value="13" checked={checked.includes('13')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="16Mpix" name="camera" value="16" checked={checked.includes('16')} onCheck={this.handleCheck} />
            ]}
          />
          <ListItem
            className="listItem"
            primaryText="CPU"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Quad Core" name="cpu" value="quad_core" checked={checked.includes('quad_core')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Hexa Core" name="cpu" value="hexa_core" checked={checked.includes('hexa_core')} onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Octa Core" name="cpu" value="octa_core" checked={checked.includes('octa_core')} onCheck={this.handleCheck} />
            ]}
          />
        </List>
      </div>
    )
  }
};

export default FiltersList;
