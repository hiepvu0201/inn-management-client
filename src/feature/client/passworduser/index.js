import React, { useState, useEffect } from "react";
import "./style.css";
import {
  Row,
  Col,
  Modal,
  Form,
  Spin,
  Button,
  Radio,
  Select,
  Input,
  Upload,
  notification,
  Tag,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faSitemap,
  faPlu,
  faPlus,
  faTrash,
  faUser,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { CheckOutlined, UploadOutlined,WarningOutlined } from "@ant-design/icons";
import Menu_client from "./../../../components/menu_client";
import Footer from "./../../../components/footer";
import usersApi from "../../../api/usersApi";
import rolesApi from "../../../api/roleApi";
import Cookies from "js-cookie";
function PasswordUs() {
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [isloadingUpdate_1, setIsloadingUpdate_1] = useState(false);
  const [statepww, setstatepwww] = useState([]);
  const [isModalVisible_1, setIsModalVisible_1] = useState(false);
  const [fileList, setfileList] = useState([]);
  const [imgfile, setimgfile] = useState(null);

  const [userList, setuserList] = useState({ roles: [{ name: "" }] });
  const [roleList, setRoleList] = useState([]);

  const fetchRoleList = async () => {
    try {
      const response = await rolesApi.getAll();
      console.log("Fetch getAll roles successfully: ", response.data);
      // console.log("<<",response.data.)
      setRoleList(response.data);
    } catch (error) {
      console.log("Failed to fetch getAll roles list: ", error);
    }
  };
  function handleChange(value) {
    console.log(`selected role ${value}`);
  }
  const fetchUseridList = async () => {
    try {
      const id = Cookies.get("id");
      console.log("<<", id);
      const response = await usersApi.getuserid(id);
      console.log("Fetch USER ID successfully: ", response.data);
      setuserList(response.data);
      setstatepwww(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
      console.log("<<<", response.data.roles[0].name);
    } catch (error) {
      console.log("Failed to fetch user id list: ", error);
    }
  };
  useEffect(() => {
    fetchRoleList();
    fetchUseridList();
  }, []);
  const { Option } = Select;
  const propsselect = [];
  {
    roleList.map((rolesid) =>
      propsselect.push(
        <Option key={rolesid.id} value={rolesid.id}>
          {rolesid.name}
        </Option>
      )
    );
  }
  const onFinish = (value) => {
    const fetchChangePW = async () => {
      try {
        const datachange = {
          ...value,
          userName: statepww.userName,
        };
        console.log("<<<", datachange);
        const response = await usersApi.changepassword(datachange);
        console.log("Fetch change password successfully: ", response);
        setstatepwww(datachange);
        if (response.data === "Thay ?????i m???t kh???u th??nh c??ng!") {
           notification.success({
             icon: <CheckOutlined style={{ color: "#20da9b" }} />,
             description: `Thay ?????i m???t kh???u th??nh c??ng`,
             message: `M???t kh???u c???a t??i kho???n ${datachange.userName} ???? thay ?????i`,
             placement: "topRight",
           });
          }
        setIsloadingUpdate_1(false);
      } catch (error) {
        console.log("Failed to change password: ", error.response);
      
          if (error.response.data === "Sai m???t kh???u!") {
            notification.error({
              icon: <WarningOutlined style={{ color: "#f26051" }} />,
              description: `Thay ?????i m???t kh???u th???t b???i`,
              message: `M???t kh???u c?? c???a t??i kho???n ${
                JSON.parse(error.response.config.data).userName
              } ch??a ch??nh x??c`,
              placement: "bottomRight",
            });
          } else if (error.response.data === "M???t kh???u m???i kh??ng kh???p!") {
            notification.error({
              icon: <WarningOutlined style={{ color: "#f26051" }} />,
              description: `Thay ?????i m???t kh???u th???t b???i`,
              message: `Vi???c nh???p l???i m???t kh???u m???i c???a t??i kho???n ${
                JSON.parse(error.response.config.data).userName
              } ch??a kh???p`,
              placement: "bottomRight",
            });
          }
      }
    };
    fetchChangePW();
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#f2f6fa",
        }}
      >
        <div style={{ height: "120px" }}>
          <Menu_client />
        </div>
        <div className="outlinedef">
          <div className="container">
            <div className="rowAll">
              <div className="rowFirstdef">
                <div className="iconUser">
                  <FontAwesomeIcon icon={faUser} size="1Sx" color="#007c7e" />
                </div>
                <div className="titleUser">TH??NG TIN NG?????I D??NG</div>
              </div>
              <div className="rowSecond">
                <Row style={{ paddingBottom: "3%" }}>
                  <Col lg={8} md={24} className="colLeft">
                    <div className="innercolLeftus-pw2">
                      <div className="imgAva">
                        <img src={userList.images} className="detailedimg" />
                      </div>
                      <div className="fullName">{userList.fullName}</div>
                      <div className="telephone">{userList.phoneNo}</div>
                    </div>
                  </Col>
                  <Col lg={16} md={24} className="colRight">
                    <div className="innercolRight">
                      <Spin spinning={isloadingUpdate} size="large">
                        <Form
                          name="basic"
                          // initialValues={{ remember: true }}
                          onFinish={onFinish}
                        >
                          <div className="topi2c">THAY ?????I M???T KH???U</div>
                          <div className="rowfirst-rightPW-2">
                            <div className="labelPWUS">M???t kh???u c??:</div>
                            <div className="contentnamePWUS">
                              <Form.Item name="oldPassword">
                                <Input.Password
                                  placeholder={statepww.oldPassword}
                                  bordered={false}
                                />
                              </Form.Item>
                            </div>
                          </div>
                          <div className="rowfirst-rightPW-2">
                            <div className="labelPWUS">M???t kh???u m???i:</div>
                            <div className="contentnamePWUS">
                              <Form.Item name="newPassword">
                                <Input.Password
                                  placeholder={statepww.newPassword}
                                  bordered={false}
                                />
                              </Form.Item>
                            </div>
                          </div>
                          <div className="rowfirst-rightPW-2">
                            <div className="labelPWUS">X??c nh???n:</div>
                            <div className="contentnamePWUS">
                              <Form.Item name="confirmNewPassword">
                                <Input.Password
                                  bordered={false}
                                  placeholder={statepww.confirmNewPassword}
                                />
                              </Form.Item>
                            </div>
                          </div>
                          <div
                            style={{
                              width: "100%",
                              textAlign: "center",
                              display: "flex",
                              justifyContent: "center",
                              paddingTop: "35px",
                            }}
                          >
                            <Button
                              className="btnupdatePWUS"
                              type="primary"
                              htmlType="submit"
                            >
                              <div className="fontawesome">
                                <FontAwesomeIcon icon={faSave} size="1x" />
                              </div>
                              <div className="contentbtn">C???P NH???T</div>
                            </Button>
                          </div>
                        </Form>
                      </Spin>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "80px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PasswordUs;
