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
import Menu_adminpage from "../../../components/menu_adminpage";
import usersApi from "./../../../api/usersApi";
import rolesApi from "./../../../api/roleApi";
import {Link} from 'react-router-dom'
import Footer from "./../../../components/footer"
import Cookies from "js-cookie";
function Password() {
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [isloadingUpdate_1, setIsloadingUpdate_1] = useState(false);
  const [statepww, setstatepwww] = useState([]);
  const [isModalVisible_1, setIsModalVisible_1] = useState(false);
  const [fileList, setfileList] = useState([]);
  const [imgfile, setimgfile] = useState(null);

  const uploadimg = (info) => {
    console.log(">>>>info: ", info);
    console.log(fileList);
  };
  const propsimg = {
    onChange: uploadimg,
  };
  const [state, setstate] = useState({
    previewVisible: false,
    previewImage: "",
    fileList: [],
  });
  const handleChangeimg = (fileList) => {
    setstate(fileList);
    setimgfile(fileList.file.originFileObj);
    console.log(">>state", state);
    console.log(">>fileList", fileList);
    console.log(">>originFileObj", imgfile);
  };
  const handlePreview = (file) => {
    setstate({
      ...state,
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  const onFinish_edit = (values) => {
    const dataUpdate = {
      ...values,
      userName: userList.userName,
      email: userList.email,
      roleIds: [userList.roles[0].id],
      password: userList.password,
    };
    console.log("<<<", dataUpdate);
    var myJSONupdate = JSON.stringify(dataUpdate);
    console.log("<<<Stringify", myJSONupdate);
    const responsedata = {
      userDetail: myJSONupdate,
      images: imgfile,
    };
    console.log("dataUpdate", responsedata);
    var form_data = new FormData();
    for (var key in responsedata) {
      form_data.append(key, responsedata[key]);
    }
    const fetchUpdateUsers = async () => {
      const id_user = Cookies.get("id");
      const data_update = { id: id_user, data: form_data };
      setIsloadingUpdate(true);
      try {
        const response = await usersApi.updateusers(data_update);
        console.log("Fetch update users successfully", response);
        console.log("edit data", data_update);
        // fetchUsersList();
        fetchUseridList();
      } catch (error) {
        console.log("Failed to update users", error);
        setIsloadingUpdate(false);
      }
    };
    fetchUpdateUsers();
  };
  const [userList, setuserList] = useState({ roles: [{ name: "" }] });
  const [roleList, setRoleList] = useState([]);
  const showModal_1 = (values) => {
    setIsModalVisible_1(true);
    console.log("values edit:", values);
    // userList(values);
  };
  const handleCancel = () => {
    setIsModalVisible_1(false);
  };
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
        if (response.data === "Thay đổi mật khẩu thành công!"){
             notification.success({
               icon: <CheckOutlined style={{ color: "#20da9b" }} />,
               description: `Thay đổi mật khẩu thành công`,
               message: `Mật khẩu của tài khoản ${datachange.userName} đã thay đổi`,
               placement: "topRight",
             });
        }
        else if (response.data === "Sai mật khẩu!")
        {
           notification.error({
             icon: <WarningOutlined style={{ color: "#f26051" }} />,
             description: `Thay đổi mật khẩu thất bại`,
             message: `Mật khẩu cũ của tài khoản ${
               JSON.parse(response.config.data).userName
             } chưa chính xác`,
             placement: "bottomRight",
           });
        }
        else if (response.data==="Mật khẩu mới không khớp!")
          {
            notification.error({
              icon: <WarningOutlined style={{ color: "#f26051" }} />,
              description: `Thay đổi mật khẩu thất bại`,
              message: `Việc nhập lại mật khẩu mới của tài khoản ${
                JSON.parse(response.config.data).userName
              } chưa khớp`,
              placement: "bottomRight",
            });
          }
        setIsloadingUpdate_1(false);
      } catch (error) {
        console.log("Failed to change password: ", error.response);
        if (error.response.data === "Sai mật khẩu!") {
          notification.error({
            icon: <WarningOutlined style={{ color: "#f26051" }} />,
            description: `Thay đổi mật khẩu thất bại`,
            message: `Mật khẩu cũ của tài khoản ${
              JSON.parse(error.response.config.data).userName
            } chưa chính xác`,
            placement: "bottomRight",
          });
        } else if (error.response.data=== "Mật khẩu mới không khớp!") {
          notification.error({
            icon: <WarningOutlined style={{ color: "#f26051" }} />,
            description: `Thay đổi mật khẩu thất bại`,
            message: `Việc nhập lại mật khẩu mới của tài khoản ${
              JSON.parse(error.response.config.data).userName
            } chưa khớp`,
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
          backgroundColor: "#F8F8FF",
        }}
      >
        <div style={{ height: "120px" }}>
          <Menu_adminpage />
        </div>
        <div className="outline">
          <div className="container">
            <div className="rowAll">
              <div className="rowFirst">
                <div className="iconUser">
                  <FontAwesomeIcon icon={faUser} size="1Sx" color="#007c7e" />
                </div>
                <div className="titleUser">THÔNG TIN NGƯỜI DÙNG</div>
              </div>
              <div className="rowSecond">
                <Row style={{ paddingBottom: "3%" }}>
                  <Col lg={8} md={24} className="colLeft">
                    <div className="innercolLeft">
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
                          <div className="topi2c">THAY ĐỔI MẬT KHẨU</div>
                          {/*<div className="rowfirst-rightPW">*/}
                          {/*  <div className="labelPW">Tên tài khoản:</div>*/}
                          {/*  <div className="contentnamePW">*/}
                          {/*    <Form.Item>*/}
                          {/*      <Input*/}
                          {/*        bordered={false}*/}
                          {/*        value={statepww.userName}*/}
                          {/*        disabled*/}
                          {/*      >*/}
                          {/*        /!* {userList.fullName} *!/*/}
                          {/*      </Input>*/}
                          {/*    </Form.Item>*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                          <div className="rowfirst-rightPW-2">
                            <div className="labelPW">Mật khẩu cũ:</div>
                            <div className="contentnamePW">
                              <Form.Item name="oldPassword">
                                <Input.Password
                                  placeholder={statepww.oldPassword}
                                  bordered={false}
                                />
                              </Form.Item>
                            </div>
                          </div>
                          <div className="rowfirst-rightPW-2">
                            <div className="labelPW">Mật khẩu mới:</div>
                            <div className="contentnamePW">
                              <Form.Item name="newPassword">
                                <Input.Password
                                  placeholder={statepww.newPassword}
                                  bordered={false}
                                />
                              </Form.Item>
                            </div>
                          </div>
                          <div className="rowfirst-rightPW-2">
                            <div className="labelPW">Xác nhận:</div>
                            <div className="contentnamePW">
                              <Form.Item name="confirmNewPassword">
                                <Input.Password
                                  bordered={false}
                                  placeholder={statepww.confirmNewPassword}
                                />
                              </Form.Item>
                            </div>
                          </div>
                          <div className="cover-btnpw">
                            <Button
                              className="btnupdatePW"
                              type="primary"
                              htmlType="submit"
                            >
                              <div className="fontawesome">
                                <FontAwesomeIcon icon={faSave} size="1x" />
                              </div>
                              <div className="contentbtn">CẬP NHẬT</div>
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
        <div
          style={{
            color: "#33404c",
            width: "100%",
            height: "auto",
            fontFamily: "PT Sans, sans-serif",
            fontSize: "12px",
            marginTop: "90px",
            textAlign: "left",
            paddingLeft: "70px",
            paddingBottom: "40px",
          }}
        >
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Password;
