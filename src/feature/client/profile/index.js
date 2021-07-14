import React, { useState, useEffect } from "react";
import Menu_client from "./../../../components/menu_client";
import Footer from "./../../../components/footer";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSave, faEdit } from "@fortawesome/free-regular-svg-icons";
import {
  Row,
  Col,
  Tabs,
  Modal,
  Form,
  Input,
  Spin,
  Select,
  Upload,
  Button,
  Radio,
  Tag,
} from "antd";
import { Images } from "./../../../config/image";
import { CheckOutlined, UploadOutlined } from "@ant-design/icons";
import usersApi from "./../../../api/usersApi";
import rolesApi from "./../../../api/roleApi";
import Cookies from "js-cookie";
const { TabPane } = Tabs;

function Profile() {
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
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
      password: userList.password,
      roleIds: [userList.roles[0].id],
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
        <div className="outline">
          <div className="container">
            <div className="rowAll">
              <div className="rowFirstabc">
                <div className="iconUser">
                  <FontAwesomeIcon icon={faUser} size="1Sx" color="#007c7e" />
                </div>
                <div className="titleUser">THÔNG TIN NGƯỜI DÙNG</div>
              </div>
              <div className="rowSecond">
                <Row style={{ paddingBottom: "3%" }}>
                  <Col lg={8} md={24} className="colLeft">
                    <div className="innercolLeft">
                      <div className="imgAva-3">
                        <img src={userList.images} className="detailedimg" />
                      </div>
                      <div className="fullName">{userList.fullName}</div>
                      <div className="telephone">{userList.phoneNo}</div>
                    </div>
                  </Col>
                  <Col lg={16} md={24} className="colRight">
                    <div className="innercolRight">
                      <div className="topi2c">THÔNG TIN CÁ NHÂN</div>
                      <div className="rowfirst-right">
                        <div className="label">Họ và tên:</div>
                        <div className="contentname">{userList.fullName}</div>
                      </div>
                      <div className="rowfirst-right">
                        <div className="label">Username:</div>
                        <div className="contentname">{userList.userName}</div>
                      </div>
                      <div className="rowfirst-right">
                        <div className="label">Email:</div>
                        <div className="contentname">{userList.email}</div>
                      </div>
                      <div className="rowfirst-right">
                        <div className="label">CMND:</div>
                        <div className="contentname">{userList.idNo}</div>
                      </div>
                      <div className="rowfirst-right">
                        <div className="label">Giới tính:</div>
                        <div className="contentname">{userList.sex}</div>
                      </div>
                      <div className="rowfirst-right">
                        <div className="label">Nghề nghiệp:</div>
                        <div className="contentname">{userList.job}</div>
                      </div>
                      <div className="rowfirst-right">
                        <div className="label">Địa chỉ:</div>
                        <div className="contentname">{userList.address}</div>
                      </div>
                      <div className="rowfirst-right">
                        <div className="label">Số điện thoại:</div>
                        <div className="contentname">{userList.phoneNo}</div>
                      </div>
                      <div className="rowfirst-right">
                        <div className="label">Quyền người dùng:</div>
                        <div className="contentname">
                          <Tag color="#108ee9">{userList.roles[0].name}</Tag>{" "}
                        </div>
                      </div>
                      <div
                       className="element-sax"
                      >
                        <button className="btnupdate">
                          <div className="fontawesome">
                            <FontAwesomeIcon icon={faSave} size="1x" />
                          </div>
                          <div className="contentbtn" onClick={showModal_1}>
                            CẬP NHẬT
                          </div>
                        </button>
                        <Modal
                          title={
                            <div style={{ display: "flex" }}>
                              <FontAwesomeIcon
                                icon={faEdit}
                                size="1x"
                                color="#007c7e"
                              />{" "}
                              <div
                                style={{
                                  fontFamily: "PT Sans, sans-serif",
                                  fontSize: "20px",
                                  color: "#007c7e",
                                  paddingLeft: "10px",
                                  fontWeight: "bold",
                                }}
                              >
                                Chỉnh sửa
                              </div>
                            </div>
                          }
                          footer={null}
                          visible={isModalVisible_1}
                        >
                          <Spin spinning={isloadingUpdate} size="large">
                            <Form
                              initialValues={{ remember: true }}
                              onFinish={onFinish_edit}
                              onFinishFailed={handleCancel}
                            >
                              <Form.Item
                                label="Tài khoản"
                                name="userName"
                                value="userName"
                                className="form-user"
                              >
                                <div style={{ width: "90%" }}>
                                  <Input
                                    placeholder={userList.userName}
                                    disabled
                                    className="row-user"
                                  />
                                </div>
                              </Form.Item>
                              <Form.Item
                                label="email"
                                name="email"
                                className="form-email"
                              >
                                <div style={{ width: "90%" }}>
                                  <Input
                                    placeholder={userList.email}
                                    className="row-email"
                                  />
                                </div>
                              </Form.Item>
                              <Form.Item
                                label="Họ và tên"
                                name="fullName"
                                className="form-fullname"
                              >
                                <div style={{ width: "90%" }}>
                                  <Input
                                    placeholder={userList.fullName}
                                    className="row-full"
                                  />
                                </div>
                              </Form.Item>
                              <Form.Item
                                label="CMND"
                                name="idNo"
                                className="form-id"
                              >
                                <div style={{ width: "90%" }}>
                                  <Input
                                    placeholder={userList.idNo}
                                    className="row-id"
                                  />
                                </div>
                              </Form.Item>
                              <Form.Item
                                label="Giới tính"
                                name="sex"
                                className="form-sex"
                              >
                                <Radio.Group className="row-sex">
                                  <Radio value="Nữ">Nữ</Radio>
                                  <Radio value="Nam">Nam</Radio>
                                </Radio.Group>
                              </Form.Item>
                              <Form.Item
                                label="Công việc"
                                name="job"
                                className="form-job"
                              >
                                <div style={{ width: "90%" }}>
                                  <Input
                                    placeholder={userList.job}
                                    className="row-job"
                                  />
                                </div>
                              </Form.Item>
                              <Form.Item
                                label="Địa chỉ"
                                name="address"
                                className="form-address"
                              >
                                <div style={{ width: "90%" }}>
                                  <Input
                                    placeholder={userList.address}
                                    className="row-address"
                                  />
                                </div>
                              </Form.Item>
                              <Form.Item
                                label="Số điện thoại"
                                name="phoneNo"
                                className="form-phone"
                              >
                                <div style={{ width: "90%" }}>
                                  <Input
                                    placeholder={userList.phoneNo}
                                    className="row-phone"
                                  />
                                </div>
                              </Form.Item>
                              <Form.Item label="Quyền" name="roleIds" className="form-select">
                                <div style={{ width: "90%" }}>
                                  <Select
                                    onChange={handleChange}
                                    allowClear
                                    mode="multiple"
                                    disabled
                                    placeholder={userList.roles[0].name}
                                    className="row-select"
                                  >
                                    {propsselect}
                                  </Select>
                                </div>
                              </Form.Item>
                              <Form.Item label="Hình" className="form-img">
                                <div style={{ width: "90%" }}>
                                  <Upload
                                    {...propsimg}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture"
                                    defaultFileList={[...fileList]}
                                    onPreview={handlePreview}
                                    onChange={handleChangeimg}
                                    fileList={state.fileList}
                                  >
                                    {state?.fileList.length < 1 && (
                                      <Button
                                        onClick={uploadimg}
                                        icon={<UploadOutlined />}
                                        style={{ marginLeft: "54px",width:"90%",borderRadius:"8px" }}
                                        className="row-img"
                                      >
                                        Upload
                                      </Button>
                                    )}
                                  </Upload>
                                </div>
                              </Form.Item>
                              <div style={{ display: "flex" }}>
                                <Button type="primary" htmlType="submit">
                                  CHỈNH SỬA{" "}
                                </Button>
                                <div style={{ paddingLeft: "10px" }}>
                                  <Button type="default" onClick={handleCancel}>
                                    HỦY BỎ
                                  </Button>
                                </div>
                              </div>
                            </Form>
                          </Spin>
                        </Modal>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "5%" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Profile;
