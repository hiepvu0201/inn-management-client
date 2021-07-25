import React from 'react';
import { Menu, Grid } from 'antd';
import {Link} from "react-router-dom"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint()
  return (
    <Menu mode={md ? "horizontal" : "inline"} style={{ paddingTop: "10px" }}>
      {/* <Menu.Item key="home">
        <a
          style={{
            color: "Black",
            fontFamily: "Kaushan Script, cursive",
            fontSize: "20px",
          }}
        >
          <Link to="/">
            <FontAwesomeIcon icon={faHouseUser} size="2x"/>
          </Link>
        </a>
      </Menu.Item> */}
      <Menu.Item key="home">
        <a
          style={{
            color: "Black",
            fontFamily: "Kaushan Script, cursive",
            fontSize: "20px",
          }}
          href=""
        >
          <Link to="/">Trang chủ</Link>
        </a>
      </Menu.Item>
      <Menu.Item key="roomclient">
        <a
          style={{
            color: "Black",
            fontFamily: "Kaushan Script, cursive",
            fontSize: "20px",
          }}
          href=""
        >
          <Link to="/roomclient">Phòng Trọ</Link>
        </a>
      </Menu.Item>
      <Menu.Item key="room">
        <a
          style={{
            color: "Black",
            fontFamily: "Kaushan Script, cursive",
            fontSize: "20px",
          }}
          href=""
        >
          <Link to="/price">Bảng giá</Link>
        </a>
      </Menu.Item>
      <Menu.Item key="rules">
        <a
          style={{
            color: "Black",
            fontFamily: "Kaushan Script, cursive",
            fontSize: "20px",
          }}
          href=""
        >
          <Link to="/cooperation">Hợp tác</Link>
        </a>
      </Menu.Item>
      <Menu.Item key="report">
        <a
          style={{
            color: "Black",
            fontFamily: "Kaushan Script, cursive",
            fontSize: "20px",
          }}
          href=""
        >
          <Link to="/contact">Liên hệ</Link>
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
