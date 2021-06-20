import React from "react";
import { Menu, Grid } from "antd";
import {Images} from './../../config/image'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a href="">Trang Chủ</a>
      </Menu.Item>
      <Menu.Item key="price">
        <a href="">Bảng Giá</a>
      </Menu.Item>
      <Menu.Item key="discount">
        <a href="">Khuyến Mãi</a>
      </Menu.Item>
      <Menu.Item key="hoptac">
        <a href="">Hợp tác</a>
      </Menu.Item>
      <Menu.Item key="news">
        <a href="">Tin tức</a>
      </Menu.Item>
      <Menu.Item key="contact">
        <a href="">Liên hệ</a>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
