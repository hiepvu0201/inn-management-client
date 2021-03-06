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
  const [rowEdit, setRowEdit] = useState({branch:{description:""}});
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
    message.error("Kh??ng x??a");
  }
  const columns = [
    {
      title: "Th??ng",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "S??? ti???n chi",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "V??? tr?? chi nh??nh",
      dataIndex: "branch",
      key: "branch",
      render: (branch) => <div>{branch.location}</div>,
    },
     {
      title: "Chi nh??nh",
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
            title="B???N C?? CH???C MU???N X??A D??? LI???U KH??NG?"
            onConfirm={() => fetchDeleteMonthlypayment(record)}
            onCancel={cancel}
            okText="C??"
            cancelText="Kh??ng"
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
    if (value === undefined) {
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
              Ch???nh s???a
            </div>
          </div>
        }
        onOk={handleOk_1}
        onCancel={handleCancel_1}
        visible={isModalVisible_1}
        okText="L??U L???I"
        cancelText="H???Y B???"
        footer={null}
      >
        <Spin spinning={isloadingUpdate} size="large">
          <Form initialValues={{ remember: true }} onFinish={onFinish_edit}>
            <Form.Item label="Th??ng" name="month" className="form-monthPayment">
              <Select
                style={{ width: 300 }}
                className="select-monthPay"
                placeholder={rowEdit.month}
              >
                <Option value="1">Th??ng 1</Option>
                <Option value="2">Th??ng 2</Option>
                <Option value="3">Th??ng 3</Option>
                <Option value="4">Th??ng 4</Option>
                <Option value="5">Th??ng 5</Option>
                <Option value="6">Th??ng 6</Option>
                <Option value="7">Th??ng 7</Option>
                <Option value="8">Th??ng 8</Option>
                <Option value="9">Th??ng 9</Option>
                <Option value="10">Th??ng 10</Option>
                <Option value="11">Th??ng 11</Option>
                <Option value="12">Th??ng 12</Option>
              </Select>
            </Form.Item>
            <Form.Item label="S??? ti???n chi" name="cost" className="form-cost">
              <Input className="input-cost" placeholder={rowEdit.cost} />
            </Form.Item>
            <Form.Item
              label="Chi nh??nh"
              name="branchId"
              className="form-branchId"
            >
              <Select className="select-branch-id" style={{ width: 300 }} placeholder={rowEdit.branch.description}>
                {branchList.map((branchid) => (
                  <Select.Option key={branchid.id} value={branchid.id}>
                    {branchid.description}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <div style={{ display: "flex" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ borderRadius: "8px" }}
              >
                CH???NH S???A{" "}
              </Button>
              <div style={{ paddingLeft: "10px" }}>
                <Button
                  type="default"
                  onClick={handleCancel_1}
                  style={{ borderRadius: "8px" }}
                >
                  H???Y B???
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
            <div className="boxpayment">
              <div className="topic-left-payment">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="contentmonthlypayment">
                  QU???N L?? NGU???N CHI NH?? TR???
                </div>
              </div>
              <div className="btn-right-payment">
                <div className="searchpay">
                  <Select
                    allowClear
                    style={{ width: 200, marginRight: "10px" }}
                    onChange={onSearch_1}
                  >
                    {branchList.map((branchid) => (
                      <Select.Option
                        key={branchid.location}
                        value={branchid.location}
                      >
                        {branchid.description}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
                <div className="cover-btnpay">
                  <button className="detailed-btn-payment" onClick={showModal}>
                    TH??M M???I
                  </button>
                </div>

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
                        Th??m m???i
                      </div>
                    </div>
                  }
                  onOk={handleOk}
                  onCancel={handleCancel}
                  visible={isModalVisible}
                  okText="TH??M M???I"
                  cancelText="H???Y B???"
                  footer={null}
                >
                  <Form
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      label="Th??ng"
                      name="month"
                      className="form-monthPayment"
                    >
                      <Select
                        style={{ width: 300 }}
                        className="select-monthPay"
                      >
                        <Option value="1">Th??ng 1</Option>
                        <Option value="2">Th??ng 2</Option>
                        <Option value="3">Th??ng 3</Option>
                        <Option value="4">Th??ng 4</Option>
                        <Option value="5">Th??ng 5</Option>
                        <Option value="6">Th??ng 6</Option>
                        <Option value="7">Th??ng 7</Option>
                        <Option value="8">Th??ng 8</Option>
                        <Option value="9">Th??ng 9</Option>
                        <Option value="10">Th??ng 10</Option>
                        <Option value="11">Th??ng 11</Option>
                        <Option value="12">Th??ng 12</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="S??? ti???n chi"
                      name="cost"
                      className="form-cost"
                    >
                      <Input className="input-cost" />
                    </Form.Item>
                    <Form.Item
                      label="Chi nh??nh"
                      name="branchId"
                      className="form-branchId"
                    >
                      <Select
                        className="select-branch-id"
                        style={{ width: 300 }}
                      >
                        {branchList.map((branchid) => (
                          <Select.Option key={branchid.id} value={branchid.id}>
                            {branchid.description}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <div className="btncreatepayment">
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ borderRadius: "8px" }}
                      >
                        TH??M M???I
                      </Button>
                      <div style={{ paddingLeft: "10px" }}>
                        <Button
                          type="default"
                          onClick={handleCancel}
                          style={{ borderRadius: "8px" }}
                        >
                          H???Y B???
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
            paddingTop: "15vh",
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Monthlypayment;
