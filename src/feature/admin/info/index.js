import React,{useState,useEffect} from 'react'
import './style.css'
import {Row,Col,Modal,Form,Spin,Button,Radio,Select,Input,Upload, Tag} from 'antd'
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
import { CheckOutlined, UploadOutlined } from "@ant-design/icons";
import Menu_adminpage from "../../../components/menu_adminpage";
import usersApi from "./../../../api/usersApi";
import rolesApi from "./../../../api/roleApi";
import Cookies from 'js-cookie';
import Footer from "./../../../components/footer";
import {Link} from "react-router-dom"
function Info() {
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
         email: userList.email,
         roleIds: [userList.roles[0].id],
         password:userList.password,
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
        const id_user = Cookies.get("id")
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
            const id=Cookies.get("id");
            console.log("<<",id)
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
    //  const propsselect = [];
    //  {
    //    roleList.map((us) =>
    //     us.name === "ROLE_ADMIN"?():(
    //       <>Null</>
    //     ));
      //  roleList.map((rolesid) =>
      //    propsselect.push(
      //      <Option key={rolesid.id} value={rolesid.id}>
      //        {rolesid.name}
      //      </Option>
      //    )
      //  );
    //  }
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
                  <Row className="row-all">
                    <Col lg={8} md={24} className="colLeft">
                      <div className="innercolLeft">
                        <div className="imgAva2">
                          <img src={userList.images} className="detailedimg" />
                        </div>
                        <div className="fullName">{userList.fullName}</div>
                        <div className="telephone">{userList.phoneNo}</div>
                      </div>
                    </Col>
                    <Col lg={16} md={24} className="colRight">
                      <div className="innercolRight-us">
                        <div className="topi2c">THÔNG TIN CÁ NHÂN</div>
                        <div className="rowfirst-rightus">
                          <div className="labelus">Họ và tên:</div>
                          <div className="contentname">{userList.fullName}</div>
                        </div>
                        <div className="rowfirst-rightus">
                          <div className="labelus">Username:</div>
                          <div className="contentname">{userList.userName}</div>
                        </div>
                        <div className="rowfirst-rightus">
                          <div className="labelus">Email:</div>
                          <div className="contentname">{userList.email}</div>
                        </div>
                        <div className="rowfirst-rightus">
                          <div className="labelus">CMND:</div>
                          <div className="contentname">{userList.idNo}</div>
                        </div>
                        <div className="rowfirst-rightus">
                          <div className="labelus">Giới tính:</div>
                          <div className="contentname">{userList.sex}</div>
                        </div>
                        <div className="rowfirst-rightus">
                          <div className="labelus">Nghề nghiệp:</div>
                          <div className="contentname">{userList.job}</div>
                        </div>
                        <div className="rowfirst-rightus">
                          <div className="labelus">Địa chỉ:</div>
                          <div className="contentname">{userList.address}</div>
                        </div>
                        <div className="rowfirst-rightus">
                          <div className="labelus">Số điện thoại:</div>
                          <div className="contentname">{userList.phoneNo}</div>
                        </div>
                        <div className="rowfirst-rightus">
                          <div className="labelus">Quyền:</div>
                          <div className="contentname">
                            <Tag color="#f50">{userList.roles[0].name}</Tag>
                            {/* {userList.roles.name} */}
                          </div>
                        </div>
                        <div className="cover-btnus">
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
                                <div style={{ display: "flex", width: "100%" }}>
                                  <Form.Item
                                    label="Tài khoản"
                                    name="userName"
                                    value="userName"
                                    className="form-userName"
                                  >
                                    <Input
                                      className="input-userName"
                                      placeholder={userList.userName}
                                      disabled
                                    />
                                  </Form.Item>
                                </div>
                                {/* <Form.Item
                                  label="Mật khẩu"
                                  name="password"
                                  className="form-password"
                                >
                                  <Input.Password
                                    placeholder={userList.password}
                                    disabled
                                    className="input-password"
                                  />
                                </Form.Item> */}
                                <Form.Item
                                  label="Email"
                                  name="email"
                                  className="form-email"
                                >
                                  <Input
                                    placeholder={userList.email}
                                    className="input-email"
                                  />
                                </Form.Item>
                                <Form.Item
                                  label="CMND"
                                  name="idNo"
                                  className="form-idNo"
                                >
                                  <Input
                                    placeholder={userList.idNo}
                                    className="input-idNo"
                                  />
                                </Form.Item>
                                <Form.Item
                                  label="Họ và tên"
                                  name="fullName"
                                  className="form-fullName"
                                >
                                  <Input
                                    placeholder={userList.fullName}
                                    className="input-fullName"
                                  />
                                </Form.Item>
                                <Form.Item
                                  label="Giới tính"
                                  name="sex"
                                  className="form1-sex1"
                                >
                                  <Radio.Group className="radio-sex">
                                    <Radio value="female">Female</Radio>
                                    <Radio value="male">Male</Radio>
                                  </Radio.Group>
                                </Form.Item>
                                <Form.Item
                                  label="Công việc"
                                  name="job"
                                  className="form-job"
                                >
                                  <Input
                                    placeholder={userList.job}
                                    className="input-job"
                                  />
                                </Form.Item>
                                <Form.Item
                                  label="Địa chỉ"
                                  name="address"
                                  className="form-address"
                                >
                                  <Input
                                    placeholder={userList.address}
                                    className="input-address"
                                  />
                                </Form.Item>
                                <Form.Item
                                  label="Số điện thoại"
                                  name="phoneNo"
                                  className="form-phoneno"
                                >
                                  <Input
                                    placeholder={userList.phoneNo}
                                    className="input-phoneno"
                                  />
                                </Form.Item>
                                <Form.Item
                                  label="Quyền"
                                  name="roleIds"
                                  className="form-roleid"
                                >
                                  <Select
                                    onChange={handleChange}
                                    allowClear
                                    mode="multiple"
                                    className="select-roleid"
                                    style={{ width: 320 }}
                                  >
                                    {roleList.map((us) =>
                                      us.name === "ROLE_ADMIN" ? (
                                        <Option key={us.id} value={us.id}>
                                          {us.name}
                                        </Option>
                                      ) : (
                                        <>Null</>
                                      )
                                    )}
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Hình" className="form-img-us">
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
                                        className="btn-updae-us"
                                        onClick={uploadimg}
                                        icon={<UploadOutlined />}
                                      >
                                        Upload
                                      </Button>
                                    )}
                                  </Upload>
                                </Form.Item>
                                <div style={{ display: "flex" }}>
                                  <Button type="primary" htmlType="submit">
                                    CHỈNH SỬA{" "}
                                  </Button>
                                  <div style={{ paddingLeft: "10px" }}>
                                    <Button
                                      type="default"
                                      onClick={handleCancel}
                                    >
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
          <div
            style={{
              color: "#33404c",
              width: "100%",
              height: "auto",
              fontFamily: "PT Sans, sans-serif",
              fontSize: "12px",
              marginTop: "90px",
              textAlign: "left",
              paddingTop:"15vh"
            }}
          >
            <Footer/>
           
          </div>
        </div>
      </div>
    );
}

export default Info
