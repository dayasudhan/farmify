import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Header extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted pointing secondary size="massive" color="teal">
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
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
        </Menu.Menu>
      </Menu>
    );
  }
}
