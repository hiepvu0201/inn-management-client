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
  DatePicker,
} from "antd";
import Footer from "./../../../components/footer";
import usersApi from "../../../api/usersApi";
import {Link} from 'react-router-dom';
import Cookies from "js-cookie";
import ReportedissuesApi from "../../../api/reportedissuesApi";
const { Option } = Select;

function Reportedissues(props) {
  //spin
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const fetchUserList = async () => {
    try {
      const response = await usersApi.getAll();
      console.log("Fetch users successfully: ", response.data);
      setUsersList(response.data);
    } catch (error) {
      console.log("Failed to fetch users list: ", error);
    }
  };
  //
  const [rowEdit, setRowEdit] = useState({});
  //api
  //getAll
  const [reportedList, setIsreportedList] = useState([]);
  const fetchReportedissuesList = async () => {
    try {
      const response = await ReportedissuesApi.getAll();
      console.log("Fetch getAll reported-issues successfully: ", response.data);
      setIsreportedList(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch getAll reported-issues list: ", error);
    }
  };
  useEffect(() => {
    fetchUserList();
    fetchReportedissuesList();
  }, []);
  //form
  const [table, setTable] = useState([]);
  //create
  const onFinish = (values) => {
    const create_value = {
      ...values,
      reporterId: Cookies.get("id"),
      // "createdDate": values["createdDate"].format("YYYY-MM-DD HH:mm:ss"),
      // "solvedDate": values["solvedDate"].format("YYYY-MM-DD HH:mm:ss"),
    };
    console.log("<<", create_value);
    const fetchCreateReportedissues = async () => {
      try {
        const response = await ReportedissuesApi.createReportedissues(
          create_value
        );
        console.log("Fetch create reported-issues succesfully: ", response);
        setIsreportedList([...reportedList, response.data]);
        setIsModalVisible(false);
        // console.log("tabledata: ", branchList);
      } catch (error) {
        console.log("failed to fetch branch list: ", error);
      }
    };
    fetchCreateReportedissues();
  };
  //update
  const fetchUpdateReportedissues = async (values) => {
    setIsloadingUpdate(true);
    try {
      const response = await ReportedissuesApi.updateReportedissues(values);
      console.log("Fetch update reported-issues successfully", response);
      fetchReportedissuesList();
    } catch (error) {
      console.log("Failed to update rules", error);
      setIsloadingUpdate(false);
    }
  };
  //delete
  const fetchDeleteReportedissues = async (record) => {
    try {
      const response = await ReportedissuesApi.deleteReportedissues(record.id);
      console.log("Delete reported-issues successfully", response);
      setIsreportedList(reportedList.filter((item) => item.id !== record.id));
      fetchReportedissuesList();
    } catch (error) {
      console.log("Failed to delete reported-issues list", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //form_edit
  const onFinish_edit = (values) => {
    console.log("Success", values);
    const editvalue={
      ...values,
            reporterId: Cookies.get("id"),
    }
    const data_update = { id: rowEdit.id, data: editvalue };
    fetchUpdateReportedissues(data_update);
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
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Người báo cáo",
      dataIndex: "reporter",
      key: "reporter",
      render: (reporter) => <div>{reporter.userName}</div>,
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
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
              label="Tiêu đề"
              name="title"
              className="form-item-report"
            >
              <Input
                className="input-item-report"
                placeholder={rowEdit.title}
              />
            </Form.Item>
            <Form.Item
              label="Mô tả"
              name="description"
              className="form-description-report"
            >
              <Input
                className="input-description-report"
                placeholder={rowEdit.description}
              />
            </Form.Item>
            <Form.Item
              label="Tình trạng"
              name="status"
              className="form-status-report"
            >
              <Input
                className="select-status-report"
                placeholder={rowEdit.status}
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
        <div className="rectanglereportissue">
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
              <div className="topic-left-report">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="contentreportissue">
                  QUẢN LÝ BÁO CÁO ĐỀ MỤC CỦA NHÀ TRỌ
                </div>
              </div>
              <div className="topic-right-report">
                <div className="btn-right-report">
                  <button className="detailed-btn-report" onClick={showModal}>
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
                        label="Tiêu đề"
                        name="title"
                        className="form-item-report"
                      >
                        <Input className="input-item-report" />
                      </Form.Item>
                      <Form.Item
                        label="Mô tả"
                        name="description"
                        className="form-description-report"
                      >
                        <Input className="input-description-report" />
                      </Form.Item>
                      <Form.Item
                        label="Tình trạng"
                        name="status"
                        className="form-status-report"
                      >
                        <Input className="select-status-report" />
                      </Form.Item>
                      <div className="btnbtncreatereport">
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
              <Table columns={columns} bordered dataSource={reportedList} />
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
export default Reportedissues;
