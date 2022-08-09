import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';

export default class Header extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted seconday pointing size="mini" color="blue">
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Equipments"
          active={activeItem === 'equipments'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Plants"
          active={activeItem === 'plants'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
        {/* <Menu.Menu position="right">
          <Menu.Item
            name="Register"
            active={activeItem === 'Register'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu> */}
      </Menu>
    );
  }
}
