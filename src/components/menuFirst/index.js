import React, { Component } from 'react';
import LeftMenu from "./leftmenu"
import RightMenu from "./rightmenu"
import { Drawer, Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faStreetView } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import './style.css'
class Navbar extends Component {
	state = {
		current: 'mail',
		visible: false
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
      <nav className="menuBarUS">
        <div className="logoUS">
          {/* <a
            style={{ color: "Black", fontFamily: "Kaushan Script, cursive" }}
            href=""
          >
            Clothes Shop
          </a> */}
          <Link to="/mapclient">
            <FontAwesomeIcon icon={faStreetView} size="2x" color="#007c7e" />
          </Link>
        </div>
        <div className="menuConUser">
          <div className="leftMenuUS">
            <LeftMenu />
          </div>
          <div className="rightMenuUS">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu />
            <RightMenu />
          </Drawer>
        </div>
      </nav>
    );
	}
}

export default Navbar;
