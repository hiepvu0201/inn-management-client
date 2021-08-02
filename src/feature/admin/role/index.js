import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "./../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faSitemap,
  faPlu,
  faPlus,
  faTrash,
  faEdit,
  faRestroom,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./../../../components/footer";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import Menu_AdminPage from "./../../../components/menu_adminpage";
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
} from "antd";
import roleApi from "./../../../api/roleApi";
const { Option } = Select;

function Role(props) {
  // loading state
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  //api
  //getAll
  const [roleList, setRoleList] = useState([]);
  const [rowEdit, setRowedit] = useState({});
  const fetchRoleList = async () => {
    try {
      const response = await roleApi.getAll();
      console.log("Fetch role successfully: ", response.data);
      setRoleList(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch role list: ", error);
    }
  };
  useEffect(() => {
    fetchRoleList();
  }, []);
  //delete
  const fetchDeleteRole = async (record) => {
    try {
      const response = await roleApi.deleteRole(record.id);
      console.log("Delete role successfully", response);
      setRoleList(roleList.filter((item) => item.id !== record.id));
    } catch (error) {
      console.log("Failed to delete role list", error);
    }
  };

  //form
  const fetchUpdateRole = async (editv) => {
    setIsloadingUpdate(true);
    try {
      const response = await roleApi.updateRole(editv);
      console.log("Fetch update role successfully", response);
      console.log("editv", editv);
      fetchRoleList();
    } catch (error) {
      console.log("failed to update role", error);
      setIsloadingUpdate(false);
    }
  };
  const onFinish = (values) => {
    console.log(values);
    const fetchCreateRole = async () => {
      try {
        const response = await roleApi.createRole(values);
        console.log("Fetch create role successfully: ", response);
        setRoleList([...roleList, response.data]);
        console.log(roleList);
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to fetch create role list: ", error);
      }
    };
    fetchCreateRole();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //form edit
  const onFinish_edit = (values) => {
    console.log("Success", values);
    const dataupdate = { id: rowEdit.id, data: values };
    fetchUpdateRole(dataupdate);
  };

  //select
  function handleChange(value) {
    console.log(`selected ${value}`);
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
      title: "Loại người dùng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteRole(record)}
            okText="Có"
            cancelText="Không"
          >
            <FontAwesomeIcon icon={faTrash} color="red" />
          </Popconfirm>
          <div
            style={{ paddingLeft: "10px", lineHeight: "1px" }}
            onClick={() => showModal_1(record)}
          >
            <FontAwesomeIcon icon={faEdit} />
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
    console.log("value edit", values);
    setRowedit(values);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
    // fetchUpdateRole();
  };

  const handleCancel_1 = () => {
    setIsModalVisible_1(false);
  };
  return (
    <div>
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
            <Form.Item
              label="Tên chức năng người dùng"
              name="name"
              className="roles-us2"
            >
              <Input
                placeholder={rowEdit.name}
                style={{ borderRadius: "8px", width: "80%" }}
              />
            </Form.Item>
            <div style={{ display: "flex" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ borderRadius: "8px" }}
              >
                LƯU LẠI
              </Button>
              <div style={{ paddingLeft: "10px" }}>
                <Button
                  type="default"
                  onClick={handleCancel_1}
                  style={{ borderRadius: "8px" }}
                >
                  HỦY BỎ
                </Button>
              </div>
            </div>
          </Form>
        </Spin>
      </Modal>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#F8F8FF",
        }}
      >
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="rectangle">
          <div style={{ display: "block", width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "auto",
                paddingTop: "10px",
              }}
            >
              <div className="topic-left">
                <FontAwesomeIcon icon={faRestroom} size="2x" color="#007c7e" />
                <div className="content">PHÂN QUYỀN NGƯỜI DÙNG</div>
              </div>
              <div className="btn-right">
                <button className="detailed-btn-role" onClick={showModal}>
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
                    <Form.Item
                      label="Tên chức năng người dùng"
                      name="name"
                      className="roles-us2"
                    >
                      <Input
                        className="input-role"
                        style={{ borderRadius: "8px", width: "80%" }}
                      />
                    </Form.Item>

                    {/* <Form.Item></Form.Item> */}
                    <div style={{ display: "flex" }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ borderRadius: "8px" }}
                      >
                        THÊM MỚI
                      </Button>
                      <div style={{ paddingLeft: "10px" }}>
                        <Button
                          type="default"
                          onClick={handleCancel}
                          style={{ borderRadius: "8px" }}
                        >
                          HỦY BỎ
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Modal>
              </div>
            </div>

            <div
              style={{
                paddingTop: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <Table
                columns={columns}
                bordered
                dataSource={roleList}
                rowKey="id"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              color: "#33404c",
              width: "100%",
              height: "auto",
              fontFamily: "PT Sans, sans-serif",
              fontSize: "12px",
              marginTop: "40px",
              textAlign: "left",
              paddingTop: "15vh",
            }}
          >
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Role;
