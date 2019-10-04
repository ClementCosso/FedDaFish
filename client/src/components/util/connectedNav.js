import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "../util/logout";
import { Menu, Icon } from "antd";

class ConnectedNav extends Component {
  state = {
    current: "dashboard"
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="dashboard">
            <Link to="/dashboard">
              <Icon type="dashboard" />
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="teams">
            <Link to="/teams">
              <Icon type="android" />
              Equipes
            </Link>
          </Menu.Item>
          <Logout
            currentUser={this.props.currentUser}
            onUserChange={this.props.onUserChange}
          />
        </Menu>
      </div>
    );
  }
}

export default ConnectedNav;
