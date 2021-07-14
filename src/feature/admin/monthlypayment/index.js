import React, { useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faPlus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import Menu_AdminPage from "../../../components/menu_adminpage";
import Footer from "./../../../components/footer";
import {
  Table,
  Popconfirm,
  message,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Spin,
} from "antd";
import {Link} from 'react-router-dom'
import monthlypaymentsApi from "../../../api/monthlypaymentApi";
import branchesApi from "./../../../api/branchesApi";
const { Option } = Select;
function Monthlypayment(props) {
  //loading update
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [branchList, setBranchList] = useState([]);
  const [rowEdit, setRowEdit] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible_1, setIsModalVisible_1] = useState(false);
  const [state, setstate] = useState([]);
  const [monthlypaymentList, setMonthlypaymentList] = useState([]);
  const fetchBranchList = async () => {
    try {
      const response = await branchesApi.getAll();
      console.log("Fetch branch successfully: ", response.data);
      setBranchList(response.data);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch branch list: ", error);
    }
  };
  //api

  const fetchMonthlypaymentList = async () => {
    try {
      const response = await monthlypaymentsApi.getAll();
      console.log("Fetch load monthly payment successfully: ", response.data);
      setMonthlypaymentList(response.data);
      setstate(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch monthly payment list: ", error);
    }
  };
  useEffect(() => {
    fetchBranchList();
    fetchMonthlypaymentList();
  }, []);
  //api - update
  const fetchUpdateMonthlypayment = async (values) => {
    setIsloadingUpdate(true);
    try {
      const response = await monthlypaymentsApi.updatemonthlypayments(values);
      console.log("Fetch update monthlypayment successfully", response);
      console.log("edit data", values);
      fetchMonthlypaymentList();
    } catch (error) {
      console.log("Failed to update monthlypayment", error);
      setIsloadingUpdate(false);
    }
  };
  //delete
  const fetchDeleteMonthlypayment = async (record) => {
    try {
      const response = await monthlypaymentsApi.deletemonthlypayments(
        record.id
      );
      console.log("Delete monthlypayment successfully", response);
      setMonthlypaymentList(
        monthlypaymentList.filter((item) => item.id !== record.id)
      );
      fetchMonthlypaymentList();
    } catch (error) {
      console.log("Failed to delete monthlypayment list", error);
    }
  };
  //form
  const onFinish = (values) => {
    const fetchCreateMonthlypayments = async () => {
      try {
        const response = await monthlypaymentsApi.createmonthlypayments(values);
        console.log("Fetch create monthlypayments succesSfully: ", response);
        setMonthlypaymentList([...monthlypaymentList, response.data]);
        console.log("In response", response);
        setIsModalVisible(false);
        console.log("tabledata: ", monthlypaymentList);
      } catch (error) {
        console.log("failed to fetch rules list: ", error);
      }
    };
    fetchCreateMonthlypayments();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //form-edit
  const onFinish_edit = (values) => {
    console.log("Success", values);
    const data_update = { id: rowEdit.id, data: values };
    fetchUpdateMonthlypayment(data_update);
  };
  //select
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function cancel(e) {
    console.log(e);
    message.error("Không xóa");
  }
  const columns = [
    {
      title: "Tháng",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "Số tiền chi",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Vị trí chi nhánh",
      dataIndex: "branch",
      key: "branch",
      render: (branch) => <div>{branch.location}</div>,
    },
     {
      title: "Chi nhánh",
      dataIndex: "branch",
      key: "branch",
      render: (branch) => <div>{branch.description}</div>,
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteMonthlypayment(record)}
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

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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

  const onSearch_1 = (value) => {
    console.log("<<VALUE", value);
    if (value === "") {
      setMonthlypaymentList(state);
    } else {
      const fetchSearchPaymentbyBranch = async () => {
        try {
          const response = await monthlypaymentsApi.searchpaymentsbybranch(
            value
          );
          console.log(
            "Fetch monthlypayment by branch name successfully: ",
            response.data
          );
          // setIsstateInput(response.data);
          setMonthlypaymentList(response.data);
        } catch (error) {
          console.log("Failed to fetch list: ", error);
        }
      };
      fetchSearchPaymentbyBranch();
    }
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
            <Form.Item label="Tháng" name="month" className="form-monthPayment">
                <Select
                  style={{ width: 120 }}
                  className="select-monthPay"
                  placeholder={rowEdit.month}
                >
                  <Option value="1">Tháng 1</Option>
                  <Option value="2">Tháng 2</Option>
                  <Option value="3">Tháng 3</Option>
                  <Option value="4">Tháng 4</Option>
                  <Option value="5">Tháng 5</Option>
                  <Option value="6">Tháng 6</Option>
                  <Option value="7">Tháng 7</Option>
                  <Option value="8">Tháng 8</Option>
                  <Option value="9">Tháng 9</Option>
                  <Option value="10">Tháng 10</Option>
                  <Option value="11">Tháng 11</Option>
                  <Option value="12">Tháng 12</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Số tiền chi" name="cost" className="form-cost">
                <Input className="input-cost" placeholder={rowEdit.cost} />
            </Form.Item>
            <Form.Item
              label="Chi nhánh"
              name="branchId"
              className="form-branchId"
            >
                <Select className="select-branch-id">
                 {branchList.map((branchid) => (
                    <Select.Option key={branchid.id} value={branchid.id}>
                      {branchid.description}
                    </Select.Option>
                  ))}
                </Select>
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
            </div>{" "}
          </Form>
        </Spin>
      </Modal>
      <div className="containerpayment">
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="rectanglemonthlypayment">
          <div style={{ display: "block", width: "100%" }}>
            <div
              className="boxpayment"
            >
              <div className="topic-left-payment">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="contentmonthlypayment">
                  QUẢN LÝ NGUỒN CHI NHÀ TRỌ
                </div>
              </div>
              <div className="btn-right-payment">
                <div className="btnbtnpayment">
                  <Input.Search
                    placeholder="Tìm kiếm"
                    allowClear
                    onSearch={onSearch_1}
                  />
                </div>
                <button className="detailed-btn-payment" onClick={showModal}>
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
                      label="Tháng"
                      name="month"
                      className="form-monthPayment"
                    >
                        <Select
                          style={{ width: 120 }}
                          className="select-monthPay"
                        >
                          <Option value="1">Tháng 1</Option>
                          <Option value="2">Tháng 2</Option>
                          <Option value="3">Tháng 3</Option>
                          <Option value="4">Tháng 4</Option>
                          <Option value="5">Tháng 5</Option>
                          <Option value="6">Tháng 6</Option>
                          <Option value="7">Tháng 7</Option>
                          <Option value="8">Tháng 8</Option>
                          <Option value="9">Tháng 9</Option>
                          <Option value="10">Tháng 10</Option>
                          <Option value="11">Tháng 11</Option>
                          <Option value="12">Tháng 12</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                      label="Số tiền chi"
                      name="cost"
                      className="form-cost"
                    >
                        <Input className="input-cost" />
                    </Form.Item>
                    <Form.Item
                      label="Chi nhánh"
                      name="branchId"
                      className="form-branchId"
                    >
                        <Select className="select-branch-id">
                          {branchList.map((branchid) => (
                            <Select.Option
                              key={branchid.id}
                              value={branchid.id}
                            >
                              {branchid.description}
                            </Select.Option>
                          ))}
                        </Select>
                    </Form.Item>
                    <div className="btncreatepayment">
                      <Button type="primary" htmlType="submit">
                        THÊM MỚI
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
                dataSource={monthlypaymentList}
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
export default Monthlypayment;
