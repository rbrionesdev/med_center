import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Routes } from "../pages/Routes";

class Navbar extends React.Component {
  renderRoutes = () => {
    const { location } = this.props;
    return Routes.map(({ pathname, title }) => {
      return (
        <Link to={pathname}>
          <Menu.Item active={location.pathname === pathname}>{title}</Menu.Item>
        </Link>
      );
    });
  };
  render() {
    return <Menu>{this.renderRoutes()}</Menu>
    
  }
}

export default withRouter(Navbar);