import React, { useState, useEffect } from "react";
import { Menu, Grid, Tabs, Dropdown, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faUserTag, faFileInvoiceDollar, faUserEdit, faLock, faSignOutAlt,faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;
const { TabPane } = Tabs;

const handleLogOut = () => {
  Cookies.remove('Bearer');
  Cookies.remove('roles');
  Cookies.remove('userName');
  Cookies.remove('id');
}

const RightMenu = () => {
  const { md } = useBreakpoint();
  const callback = (key) => {
    console.log(key);
  };
  const menu = (
    <Menu>
      <Menu.Item key="map">
        <a
          style={{
            color: "Black",
            fontFamily: "Kaushan Script, cursive",
            fontSize: "20px",
          }}
          href=""
        >
          <Link to="/map">Bản đồ</Link>
        </a>
      </Menu.Item>
      <Menu.Item key="register">
        <a
          style={{
            color: "Black",
            fontFamily: "Kaushan Script, cursive",
            fontSize: "20px",
          }}
          href=""
        >
          <Link to="/register">Đăng ký</Link>
        </a>
      </Menu.Item>
      <Menu.Item key="pwuss">
        <div style={{ width: "100%", height: "auto", display: "flex" }}>
          <div
            style={{
              width: "20%",
              height: "auto",
              paddingLeft: "10px",
              paddingTop: "5px",
            }}
          >
            <FontAwesomeIcon icon={faLock} color="black" size="1x" />
          </div>
          <div
            style={{
              width: "80%",
              height: "auto",
              fontFamily: "Open Sans,sans-serif",
              fontSize: "15px",
              color: "black",
              paddingTop: "5px",
            }}
          >
            <Link
              to="/changepassUs"
              style={{
                width: "80%",
                height: "auto",
                fontFamily: "Open Sans,sans-serif",
                fontSize: "15px",
                color: "black",
                paddingTop: "5px",
              }}
            >
              Đổi mật khẩu
            </Link>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="pwuss">
        <div style={{ width: "100%", height: "auto", display: "flex" }}>
          <div
            style={{
              width: "20%",
              height: "auto",
              paddingLeft: "10px",
              paddingTop: "5px",
            }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} color="black" size="1x" />
          </div>
          <div
            style={{
              width: "80%",
              height: "auto",
              fontFamily: "Open Sans,sans-serif",
              fontSize: "15px",
              color: "black",
              paddingTop: "5px",
            }}
          >
            <Link
              to="/login"
              style={{
                width: "80%",
                height: "auto",
                fontFamily: "Open Sans,sans-serif",
                fontSize: "15px",
                color: "black",
                paddingTop: "5px",
              }}
              onClick={handleLogOut}
            >
              Đăng xuất
            </Link>
          </div>
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Menu mode={md ? "horizontal" : "inline"} style={{ paddingTop: "10px" }}>
      <Menu.Item key="register">
        <a
          style={{
            color: "Black",
            fontFamily: "Kaushan Script, cursive",
            fontSize: "20px",
          }}
          href=""
        >
          <Link to="/register">Đăng ký</Link>
        </a>
      </Menu.Item>
      <Menu.Item key="/login">
        <a
          style={{
            color: "Black",
            fontFamily: "Kaushan Script, cursive",
            fontSize: "20px",
          }}
          href=""
        >
          <Link to="/login">Đăng nhập</Link>
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
