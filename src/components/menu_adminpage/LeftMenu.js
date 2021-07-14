import React from "react";
import { Menu, Grid } from "antd";
import { Images } from "./../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUsers,
  faPlug,
  faMoneyBillAlt,
  faBuilding,
  faBell,faBed,faBath,faBullhorn,faTint,faRestroom
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Branches from "./../../feature/admin/branches";
import { faHandshake,faQuestionCircle,faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { Link, Router } from "react-router-dom";

const { useBreakpoint } = Grid;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const LeftMenu_admin = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="home" className="hostmenu">
        <div className="menuone">
          <FontAwesomeIcon
            icon={faChartBar}
            color="#efefef"
            size="1x"
            style={{ marginRight: "10px" }}
          />{" "}
          <Link to="/" style={{ color: "white" }}>
            Trang chủ
          </Link>
        </div>
      </Menu.Item>
      <SubMenu
        key="menu-2"
        className="roomcss"
        title={
          <div style={{ paddingLeft: "10px" }}>
            <FontAwesomeIcon icon={faBuilding} color="white" size="1x" />
            <a href="" className="contentroomcss">
              Nhà trọ
            </a>{" "}
          </div>
        }
      >
        <Menu.Item
          key="brand"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faBuilding}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          {/* <Router> */}{" "}
          <Link to="/branches" style={{ paddingLeft: "6px" }}>
            Chi nhánh
          </Link>
        </Menu.Item>
        <Menu.Item
          key="room"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faBed}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          <Link className="roomdetailed" to="/rooms">
            {" "}
            Phòng
          </Link>
        </Menu.Item>
        <Menu.Item
          key="facility"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faBath}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          <Link to="/facilities" style={{ paddingLeft: "9px" }}>
            Thiết bị
          </Link>
        </Menu.Item>
        <Menu.Item
          key="electricity-water"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faPlug}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          <Link to="/electricity-waters" style={{ paddingLeft: "10px" }}>
            {" "}
            Điện - Nước{" "}
          </Link>
        </Menu.Item>
        <Menu.Item
          key="floor"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faTint}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          <Link to="/floors" style={{ paddingLeft: "10px" }}>
            {" "}
            Lầu{" "}
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="menu-3"
        className="moneycss"
        title={
          <div style={{ paddingLeft: "10px" }}>
            <FontAwesomeIcon icon={faMoneyBillAlt} color="white" size="1x" />
            <a href="" className="contentroomcss">
              Thu Chi
            </a>{" "}
          </div>
        }
      >
        <Menu.Item
          key="monthlyincome"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faMoneyBillAlt}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          <Link to="/monthlyincomes"> Nguồn thu</Link>
        </Menu.Item>
        <Menu.Item
          key="monthlypayment"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faMoneyBillAlt}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          <Link to="/monthlypayments"> Nguồn chi</Link>
        </Menu.Item>
        <Menu.Item
          key="monthlypayment"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faMoneyBillAlt}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          <Link to="/invoices" className="inv">
            Hóa đơn
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="menu:4"
        className="contractcss"
        title={
          <div style={{ paddingLeft: "10px" }}>
            <FontAwesomeIcon icon={faHandshake} color="white" size="1x" />
            <a href="" className="contentroomcss">
              Hợp Đồng
            </a>{" "}
          </div>
        }
      >
        <Menu.Item
          key="contract"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
            className: "padding",
          }}
        >
          <FontAwesomeIcon
            icon={faHandshake}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />{" "}
          <Link to="/contracts">Hợp đồng</Link>
        </Menu.Item>
        <Menu.Item
          key="users"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faUsers}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />{" "}
          <Link to="/users"> Khách thuê</Link>
        </Menu.Item>
        <Menu.Item
          key="users"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faRestroom}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />{" "}
          <Link to="/roles"> Phân quyền người dùng</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="menu-last"
        className="notifi"
        title={
          <div style={{ paddingLeft: "10px" }}>
            <FontAwesomeIcon icon={faBell} color="white" size="1x" />
            <a href="" className="contentnotify">
              Nội Quy - Thông Báo
            </a>{" "}
          </div>
        }
      >
        <Menu.Item
          key="rules"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
            className: "padding",
          }}
        >
          <FontAwesomeIcon
            icon={faQuestionCircle}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          <Link to="/rules" style={{ paddingLeft: "5px" }}>
            {" "}
            Nội Quy
          </Link>
        </Menu.Item>
        <Menu.Item
          key="notification"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faBullhorn}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          <Link to="/notifications"> Thông Báo</Link>
        </Menu.Item>
        <Menu.Item
          key="report"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
          className="report"
        >
          <FontAwesomeIcon
            icon={faPaypal}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          <Link to="/reported-issues" className="detailed-report">
            Báo cáo
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default LeftMenu_admin;
