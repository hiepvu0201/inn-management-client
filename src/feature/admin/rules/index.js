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
} from "@fortawesome/free-solid-svg-icons";
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
} from "antd";
import rulesApi from "../../../api/rulesApi";
import { Link } from "react-router-dom";
import Footer from "./../../../components/footer";
const { Option } = Select;
function Rules(props) {
  //loading update
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  //api
  const [rowEdit, setRowEdit] = useState({});
  const [rulesList, setRulesList] = useState([]);
  const fetchRulesList = async () => {
    try {
      const response = await rulesApi.getAll();
      console.log("Fetch rules successfully: ", response.data);
      setRulesList(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch rules list: ", error);
    }
  };
  useEffect(() => {
    fetchRulesList();
  }, []);
  //api - update
  const fetchUpdateRule = async (values) => {
    setIsloadingUpdate(true);
    try {
      const response = await rulesApi.updateRole(values);
      console.log("Fetch update successfully", response);
      console.log("edit data", values);
      fetchRulesList();
    } catch (error) {
      console.log("Failed to update rules", error);
      setIsloadingUpdate(false);
    }
  };
  //delete
  const fetchDeleteRule = async (record) => {
    try {
      const response = await rulesApi.deleteRole(record.id);
      console.log("Delete rule successfully", response);
      setRulesList(rulesList.filter((item) => item.id !== record.id));
      fetchRulesList();
    } catch (error) {
      console.log("Failed to delete rule list", error);
    }
  };
  //form
  const onFinish = (values) => {
    const fetchCreateRules = async () => {
      try {
        // values["id"]=values.id;
        const response = await rulesApi.createrules(values);
        console.log("Fetch create rules succesSfully: ", response);
        setRulesList([...rulesList, response.data]);
        console.log("In response", response);
        setIsModalVisible(false);
        console.log("tabledata: ", rulesList);
      } catch (error) {
        console.log("failed to fetch rules list: ", error);
      }
    };
    fetchCreateRules();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //form-edit
  const onFinish_edit = (values) => {
    console.log("Success", values);
    const data_update = { id: rowEdit.id, data: values };
    fetchUpdateRule(data_update);
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
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteRule(record)}
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
    console.log("value edit:", values);
    setRowEdit(values);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
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
            <Form.Item label="Tên" name="name" className="name-rules">
              <Input placeholder={rowEdit.name} className="rules-input-name" />
            </Form.Item>
            <Form.Item
              label="Mô tả"
              name="description"
              className="name-description-rules"
            >
              <Input
                className="input-description-rules"
                placeholder={rowEdit.description}
              />
            </Form.Item>
            <div style={{ display: "flex" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ borderRadius: "8px" }}
              >
                CHỈNH SỬA{" "}
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
      <div className="containercontainerrules">
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="rectanglerules">
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
              <div className="topic-left-rules1">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="contentrules">QUẢN LÝ NỘI QUY NHÀ TRỌ</div>
              </div>
              <div className="topic-right-rules1">
                <div className="btn-right-rules">
                  <button className="detailed-btn-rules" onClick={showModal}>
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
                      <Form.Item label="Tên" name="name" className="name-rules">
                        <Input className="rules-input-name" />
                      </Form.Item>
                      <Form.Item
                        label="Mô tả"
                        name="description"
                        className="name-description-rules"
                      >
                        <Input className="input-description-rules" />
                      </Form.Item>
                      <div className="btncreaterules">
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
            </div>

            <div
              style={{
                paddingTop: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
                paddingBottom: "15px",
              }}
            >
              <Table
                columns={columns}
                bordered
                dataSource={rulesList}
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
            paddingTop: "15vh",
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Rules;
