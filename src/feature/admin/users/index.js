import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faSitemap,
  faPlu,
  faPlus,
  faTrash,
  faEdit,
  faMapMarkerAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./../../../components/footer"
import { faSave } from "@fortawesome/free-regular-svg-icons";
import Menu_AdminPage from "../../../components/menu_adminpage";
import {
  Table,
  Popconfirm,
  message,
  Button,
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
  Spin,
  Radio,
  DatePicker,
  Tag,
  notification,
  Upload,
} from "antd";
import {
  CheckOutlined,
  UploadOutlined,
  StopOutlined,
  TrademarkOutlined,
} from "@ant-design/icons";
import usersApi from "../../../api/usersApi";
import roleApi from "../../../api/roleApi";
import reportedissueApi from "../../../api/reportedissuesApi";
import roomApi from "../../../api/roomApi";
import { LocalDateTime } from "@js-joda/core";
import Moment from "react-moment";
import { Link } from "react-router-dom";
const { Option } = Select;
function Users(props) {
  //spin
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  //
  const [rowEdit, setRowEdit] = useState({});
  const [rowEditcheck, setRowEditcheck] = useState({});
  const [rowEditcheckout, setRowEditcheckout] = useState({});
  //api
  //getAll
  const [usersList, setIsusersList] = useState([]);

  const [roleList, setRoleList] = useState([]);
  const [reportList, setreportList] = useState([]);
  const [idSelected, setidSelected] = useState([]);
  const [idReport, setidReport] = useState([]);
  const [idSelected_1, setidSelected_1] = useState([]);
  const [dataTable, setdataTable] = useState([]);
  const [idReport_1, setidReport_1] = useState([]);
  const [roomList, setRoomList] = useState([]);
  const [abcd, setAbcd] = useState([]);
  const [isModalCheckin, setIsModalCheckin] = useState(false);
  const [isModalCheckout, setIsModalCheckout] = useState(false);
  const [fileList, setfileList] = useState([]);
  const [checkaddimg, setcheck] = useState(false);

  const [imgfile, setimgfile] = useState(null);
  const [nullstate, setNullstate] = useState([]);

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
  const showModal_Checkin = (values) => {
    setIsModalCheckin(true);
    //  setIsModalVisible_1(true);
    console.log("values edit:", values);
    setRowEditcheck(values);
  };
  const showModal_Checkout = (values) => {
    setIsModalCheckout(true);
    //  setIsModalVisible_1(true);
    console.log("values edit:", values);
    setRowEditcheckout(values);
  };
  const handleOk_Checkin = () => {
    setIsModalCheckin(false);
  };

  const handleCancel_Checkin = () => {
    setIsModalCheckin(false);
  };
  const handleCancel_Checkout = () => {
    setIsModalCheckout(false);
  };
  const fetchUsersList = async () => {
    const roleIds = { roleIds: idSelected };
    try {
      const response = await usersApi.getAll();
      console.log("Fetch getAll users successfully: ", response.data);
      setIsusersList(response.data);
      setstatesea(response.data);
      // dataTable([...userList, response.data]);
      // console.log("response.data.roleIds[0] >>", response.data[0].roleIds);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch getAll users list: ", error);
    }
  };

  const fetchRoleList = async () => {
    try {
      const response = await roleApi.getAll();
      console.log("Fetch getAll roles successfully: ", response.data);
      // console.log("<<",response.data.)
      setRoleList(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch getAll roles list: ", error);
    }
  };
  const fetchRoomList = async () => {
    try {
      const response = await roomApi.getAll();
      console.log("Fetch getAll room successfully: ", response.data);
      setRoomList(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch getAll rooms list: ", error);
    }
  };

  useEffect(() => {
    fetchUsersList();
    fetchRoleList();
    fetchRoomList();
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
  //form
  const [table, setTable] = useState([]);
  //create
  const onFinish = (values) => {
    console.log("Value", values);
    const dataCreate = {
      ...values,
      // roleIds: idSelected,
    };
    console.log("<<<", dataCreate);
    var myJSON = JSON.stringify(dataCreate);
    console.log("<<<Stringify", myJSON);
    const responsedata = {
      user: myJSON,
      images: imgfile,
    };
    if (
      responsedata.images === null ||
      values.roleIds === undefined ||
      dataCreate.roleIds === []
    ) {
      message.warning("Nhập thiếu thông tin xin vui lòng nhập lại");
    } else {
      console.log("dataCreate", responsedata);
      var form_data = new FormData();
      for (var key in responsedata) {
        form_data.append(key, responsedata[key]);
      }
      const fetchCreateUsers = async () => {
        try {
          const response = await usersApi.createusers(form_data);
          console.log("Fetch create users succesfully: ", response);
          setIsusersList([...usersList, response.data]);
          setimgfile(null);
          console.log("abc", response);
          setIsModalVisible(false);
        } catch (error) {
          console.log("failed to fetch user list: ", error);
          // if ((error = 500))
          //   message.error("Đã nhập trùng Username. Xin vui lòng nhập lại!!!");
        }
      };
      fetchCreateUsers();
    }
  };
  //update

  //delete
  const fetchDeleteReportedissues = async (record) => {
    try {
      const response = await usersApi.deleteusers(record.id);
      console.log("Delete users successfully", response);
      setIsusersList(usersList.filter((item) => item.id !== record.id));
      fetchUsersList();
    } catch (error) {
      console.log("Failed to delete users list", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //form_edit
  const onFinish_edit = (values) => {
    const dataUpdate = {
      ...values,
      userName: rowEdit.userName,
      password: rowEdit.password,
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
      const data_update = { id: rowEdit.id, data: form_data };
      setIsloadingUpdate(true);
      try {
        const response = await usersApi.updateusers(data_update);
        console.log("Fetch update users successfully", response);
        console.log("edit data", data_update);
        fetchUsersList();
      } catch (error) {
        console.log("Failed to update users", error);
        setIsloadingUpdate(false);
      }
    };
    fetchUpdateUsers();
  };
  //form_checkin
  const [stateDatecheckin, setDatecheckin] = useState({});
  const onFinish_checkin = (values) => {
    const datetime = LocalDateTime.now();

    // const dt2 = datetime.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    const datacheckin = {
      ...values,
      userName: rowEditcheck.userName,
      checkInDate: LocalDateTime.now(),
    };
    const fetchCheckin = async () => {
      console.log("dataCheckin", datacheckin);
      setIsloadingUpdate(true);
      try {
        const response = await usersApi.checkin(datacheckin);
        console.log("Fetch checkin users successfully", response);
        setIsModalCheckin(false);
        fetchUsersList();
        message.success("Checkin successfully");
      } catch (error) {
        console.log("Failed to checkin users", error.response);
        setIsloadingUpdate(false);
      }
    };
    fetchCheckin();
  };
  //form_checkout
  const onFinish_checkout = (values) => {
    const datetime__ = LocalDateTime.now();
    const datacheckout = {
      ...values,
      userName: rowEditcheckout.userName,
      checkOutDate: datetime__,
    };
    const fetchCheckout = async () => {
      console.log("dataCheckin", datacheckout);
      setIsloadingUpdate(true);
      try {
        const response = await usersApi.checkout(datacheckout);
        console.log("Fetch checkout users successfully", response);
        setIsModalCheckout(false);
        fetchUsersList();
        message.success("Checkout successfully");
      } catch (error) {
        console.log("Failed to checkout users", error);
        setIsloadingUpdate(false);
      }
    };
    fetchCheckout();
  };
  //check username exist
  const [stateStatus, setstateStatus] = useState(false);
  const onChangeusername = (e) => {
    console.log("<<", e.target.value);
    setstateStatus(e.target.value);
    //  setstateStatus(e)
  };
  const fetchcheckusername = async () => {
    try {
      const response = await usersApi.checkusername(stateStatus);
      console.log("Fetch check existed users successfully", response.data);
      if (response.data === true) {
        notification.error({
          icon: <StopOutlined style={{ color: "#20da9b" }} />,
          message: `Trùng username xin vui lòng nhập lại`,
          placement: "topLeft",
        });
      } else {
        notification.success({
          icon: <CheckOutlined style={{ color: "#f25f52" }} />,
          message: `Username không trùng`,
          placement: "topLeft",
        });
        setstateStatus(true);
      }
    } catch (error) {
      console.log("Failed to check existed username", error);
    }
  };
  //select
  function handleChange(value) {
    console.log(`selected role ${value}`);
    // const rolevalue = [value];
    // setidSelected(rolevalue);
  }
  function handleChange_2(value) {
    console.log(`selected role1 ${value}`);
    // const rolevalue_1 = [value];
    // setidSelected_1(rolevalue_1);
  }
  function handleChange_3(value) {
    console.log(`selected report1 ${value}`);
    // const reportvalue_1 = [value];
    // setidReport_1(reportvalue_1);
  }
  //input_num
  function onChange_inputnum(value) {
    console.log("changed", value);
  }
  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNo",
      key: "phoneNo",
    },
    {
      title: "Giới tính",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Công việc",
      dataIndex: "job",
      key: "job",
    },
    {
      title: "Ngày checkin",
      dataIndex: "checkinDate",
      key: "checkinDate",
      render: (checkinDate) =>
        checkinDate === null ? (
          <Tag color="#80efb2">NULL</Tag>
        ) : (
          <Tag color="#52b4f4">{checkinDate}</Tag>
        ),
    },
    {
      title: "Ngày checkout",
      dataIndex: "checkoutDate",
      key: "checkoutDate",
      render: (checkoutDate) =>
        checkoutDate === null ? (
          <Tag color="#e28f20">NULL</Tag>
        ) : (
          <Tag color="#fca304">{checkoutDate}</Tag>
        ),
    },
    {
      title: "Hình ảnh",
      dataIndex: "images",
      key: "images",
      width: 200,
      render: (images) => <img style={{ width: "100%" }} src={`${images}`} />,
    },
    {
      title: "Quyền",
      dataIndex: "roles",
      key: "roles",
      render: (roles) => <div>{roles[0].name}</div>,
    },
    {
      title: "Phòng",
      dataIndex: "room",
      key: "room",
      render: (room) => (
        <>
          {room === null ? (
            <Tag color="#5e4f3e">NULL</Tag>
          ) : (
            <Tag color="#e1df07">{room.roomNo}</Tag>
          )}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteReportedissues(record)}
            onCancel={cancel}
            okText="Có"
            cancelText="Không"
          >
            <FontAwesomeIcon icon={faTrash} color="red" />
          </Popconfirm>
          <div
            style={{ paddingLeft: "10px", lineHeight: "1px" }}
            onClick={() => {
              showModal_1(record);
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <div
            style={{
              paddingLeft: "5px",
              paddingBottom: "3px",
              lineHeight: "5px",
            }}
            onClick={() => {
              showModal_Checkin(record);
            }}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} color="#15aabf" />
          </div>
          <div
            style={{
              paddingLeft: "5px",
              paddingBottom: "3px",
              lineHeight: "5px",
            }}
            onClick={() => {
              showModal_Checkout(record);
            }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} color="#9cbc5e" />
          </div>
        </div>
      ),
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [isModalVisible_1, setIsModalVisible_1] = useState(false);

  const showModal_1 = (values) => {
    setIsModalVisible_1(true);
    console.log("values edit:", values);
    setRowEdit(values);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
  };

  const handleCancel_1 = () => {
    setIsModalVisible_1(false);
  };
  const [statesea, setstatesea] = useState([]);

  const onSearch_1 = (value) => {
    console.log("<<VALUE", value);
    if (value === "") {
      setIsusersList(statesea);
    } else {
      const fetchGetalluserbyUsername = async () => {
        try {
          const response = await usersApi.getalluserbyusername(value);
          console.log(
            "Fetch userall by username successfully: ",
            response.data
          );
          setIsusersList(response.data);
        } catch (error) {
          console.log("Failed to fetch list: ", error);
        }
      };
      fetchGetalluserbyUsername();
    }
  };
  return (
    <div>
      <Modal
        title={
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="#007c7e" />{" "}
            <div
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: "20px",
                color: "#007c7e",
                paddingLeft: "10px",
                fontWeight: "bold",
              }}
            >
              Checkin
            </div>
          </div>
        }
        onOk={handleOk_1}
        onCancel={handleCancel_1}
        visible={isModalCheckin}
        okText="LƯU LẠI"
        cancelText="HỦY BỎ"
        footer={null}
      >
        <Spin spinning={isloadingUpdate} size="large">
          <Form
            initialValues={{ remember: true }}
            onFinish={onFinish_checkin}
            onFinishFailed={handleCancel_Checkin}
          >
            <Form.Item
              label="Ngày checkin"
              name="checkInDate"
              className="form-checkindate"
            >
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                className="datepicker-checkindate"
              />
            </Form.Item>
            <Form.Item
              label="Khách trọ"
              name="userName"
              value="userName"
              className="form-userName-2"
            >
              <Input
                placeholder={rowEditcheck.userName}
                disabled
                className="input-username-223"
              />
            </Form.Item>
            <Form.Item label="Phòng" name="roomNo" className="form-roomnous2">
              <Select className="select-roomNo12" style={{ width: 320 }}>
                {roomList.map((roomid) => (
                  <Select.Option key={roomid.roomNo} value={roomid.roomNo}>
                    {roomid.roomNo}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <div style={{ display: "flex" }}>
              <Button type="primary" htmlType="submit">
                CẬP NHẬT{" "}
              </Button>
              <div style={{ paddingLeft: "10px" }}>
                <Button type="default" onClick={handleCancel_Checkin}>
                  HỦY BỎ
                </Button>
              </div>
            </div>
          </Form>
        </Spin>
      </Modal>

      <Modal
        title={
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="#007c7e" />{" "}
            <div
              style={{
                fontFamily: "PT Sans, sans-serif",
                fontSize: "20px",
                color: "#007c7e",
                paddingLeft: "10px",
                fontWeight: "bold",
              }}
            >
              Checkout
            </div>
          </div>
        }
        onOk={handleOk_1}
        onCancel={handleCancel_1}
        visible={isModalCheckout}
        okText="LƯU LẠI"
        cancelText="HỦY BỎ"
        footer={null}
      >
        <Spin spinning={isloadingUpdate} size="large">
          <Form
            initialValues={{ remember: true }}
            onFinish={onFinish_checkout}
            onFinishFailed={handleCancel_Checkin}
          >
            <Form.Item
              label="Khách trọ"
              name="userName"
              value="userName"
              className="form-userName-2"
            >
              <Input
                className="input-username-24"
                placeholder={rowEditcheckout.userName}
                disabled
              />
            </Form.Item>
            <Form.Item
              className="form-checkoutdate"
              label="Ngày checkout"
              name="checkOutDate"
            >
              <DatePicker
                className="datepicker-checkoutdate"
                showTime
                format="YYYY-MM-DD HH:mm:ss"
              />
            </Form.Item>
            <div style={{ display: "flex" }}>
              <Button type="primary" htmlType="submit">
                CẬP NHẬT{" "}
              </Button>
              <div style={{ paddingLeft: "10px" }}>
                <Button type="default" onClick={handleCancel_Checkout}>
                  HỦY BỎ
                </Button>
              </div>
            </div>
          </Form>
        </Spin>
      </Modal>

      <Modal
        title={
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon icon={faEdit} size="1x" color="#007c7e" />{" "}
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
        onOk={handleOk_1}
        onCancel={handleCancel_1}
        visible={isModalVisible_1}
        okText="LƯU LẠI"
        cancelText="HỦY BỎ"
        footer={null}
      >
        <Spin spinning={isloadingUpdate} size="large">
          <Form initialValues={{ remember: true }} onFinish={onFinish_edit}>
            <div style={{ display: "flex", width: "100%" }}>
              <Form.Item
                label="Tài khoản"
                name="userName"
                value="userName"
                className="form-userName"
              >
                <Input
                  className="input-userName12"
                  placeholder={rowEdit.userName}
                  disabled
                />
              </Form.Item>
              <div className="element-btn">
                <Button
                  className="btn-existed"
                  onClick={() => fetchcheckusername()}
                >
                  Kiểm tra trùng
                </Button>
              </div>
            </div>
            <Form.Item
              label="Mật khẩu"
              name="password"
              className="form-password"
            >
              <Input.Password
                placeholder={rowEdit.password}
                disabled
                className="input-password12"
              />
            </Form.Item>
            <Form.Item label="Email" name="email" className="form-email">
              <Input placeholder={rowEdit.email} className="input-email12" />
            </Form.Item>
            <Form.Item
              label="Họ và tên"
              name="fullName"
              className="form-fullName"
            >
              <Input
                placeholder={rowEdit.fullName}
                className="input-fullName12"
              />
            </Form.Item>
            <Form.Item label="Giới tính" name="sex" className="form1-sex1">
              <Radio.Group className="radio-sex12">
                <Radio value="female">Female</Radio>
                <Radio value="male">Male</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Công việc" name="job" className="form-job">
              <Input placeholder={rowEdit.job} className="input-job12" />
            </Form.Item>
            <Form.Item label="Địa chỉ" name="address" className="form-address">
              <Input
                placeholder={rowEdit.address}
                className="input-address12"
              />
            </Form.Item>
            <Form.Item label="Số ĐT" name="phoneNo" className="form-phoneno">
              <Input
                placeholder={rowEdit.phoneNo}
                className="input-phoneno12"
              />
            </Form.Item>
            <Form.Item label="Quyền" name="roleIds" className="form-roleid">
              <Select
                onChange={handleChange}
                allowClear
                className="select-roleid12"
                style={{ width: 320 }}
              >
                {propsselect}
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
                    className="btn-updae-us12"
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
                <Button type="default" onClick={handleCancel_1}>
                  HỦY BỎ
                </Button>
              </div>
            </div>
          </Form>
        </Spin>
      </Modal>
      <div className="sumusser">
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="rectangleusers">
          <div style={{ display: "block", width: "100%" }}>
            <div className="row-1">
              <div className="topic-left-user">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="contentusers">QUẢN LÝ KHÁCH TRỌ</div>
              </div>
              <div className="topic-right-user">
                {/* <div className="element-selectuser">
                  <Input.Search
                    allowClear
                    size="middle"
                    style={{ width: "200px" }}
                    // mode="multiple"
                    onSearch={(value) => onSearch_1(value)}
                  ></Input.Search>
                </div> */}
                {/* <div className="element2-selectuser">
                  <Select
                    allowClear
                    style={{ width: "80%" }}
                    // mode="multiple"
                    onChange={onSearch_1}
                  >
                    {roleList.map((branchid) => (
                      <Select.Option key={branchid.name} value={branchid.name}>
                        {branchid.name}
                      </Select.Option>
                    ))}
                  </Select>
                </div> */}
                <div className="btn-right-user">
                  <button className="detailed-btn-user" onClick={showModal}>
                    THÊM MỚI
                  </button>
                  <Modal
                    title={
                      <div style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faPlus}
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
                          Thêm mới
                        </div>
                      </div>
                    }
                    onOk={handleOk}
                    onCancel={handleCancel}
                    visible={isModalVisible}
                    okText="THÊM MỚI"
                    cancelText="HỦY BỎ"
                    footer={null}
                  >
                    <Form
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    >
                      <div style={{ display: "flex", width: "100%" }}>
                        <Form.Item
                          label="Tài khoản"
                          name="userName"
                          value="userName"
                          className="form-userName"
                        >
                          <Input className="input-userName12" />
                        </Form.Item>
                        <div className="element-btn">
                          <Button
                            className="btn-existed"
                            onClick={() => fetchcheckusername()}
                          >
                            Kiểm tra trùng
                          </Button>
                        </div>
                      </div>
                      <Form.Item
                        label="Mật khẩu"
                        name="password"
                        className="form-password"
                      >
                        <Input.Password disabled className="input-password12" />
                      </Form.Item>
                      <Form.Item
                        label="Email"
                        name="email"
                        className="form-email"
                      >
                        <Input className="input-email12" />
                      </Form.Item>
                      <Form.Item
                        label="Họ và tên"
                        name="fullName"
                        className="form-fullName"
                      >
                        <Input className="input-fullName12" />
                      </Form.Item>
                      <Form.Item
                        label="Giới tính"
                        name="sex"
                        className="form1-sex1"
                      >
                        <Radio.Group className="radio-sex12">
                          <Radio value="female">Female</Radio>
                          <Radio value="male">Male</Radio>
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item
                        label="Công việc"
                        name="job"
                        className="form-job"
                      >
                        <Input className="input-job12" />
                      </Form.Item>
                      <Form.Item
                        label="Địa chỉ"
                        name="address"
                        className="form-address"
                      >
                        <Input className="input-address12" />
                      </Form.Item>
                      <Form.Item
                        label="Số ĐT"
                        name="phoneNo"
                        className="form-phoneno"
                      >
                        <Input className="input-phoneno12" />
                      </Form.Item>
                      <Form.Item
                        label="Quyền"
                        name="roleIds"
                        className="form-roleid"
                      >
                        <Select
                          onChange={handleChange}
                          allowClear
                          className="select-roleid12"
                          style={{ width: 320 }}
                        >
                          {propsselect}
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
                              className="btn-updae-us12"
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
                          THÊM MỚI{" "}
                        </Button>
                        <div style={{ paddingLeft: "10px" }}>
                          <Button type="default" onClick={handleCancel}>
                            HỦY BỎ
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </Modal>
                </div>
              </div>
            </div>

            <div className="padding-table">
              <Table
                columns={columns}
                bordered
                dataSource={usersList}
                rowKey="id"
              />
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
            marginTop: "40px",
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
export default Users;
