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
import { faSave, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
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
  Spin,
  Tag,
  InputNumber,
  DatePicker,
  Radio,
} from "antd";
import usersApi from "../../../api/usersApi";
import Footer from "./../../../components/footer";
import contractsApi from "../../../api/contractApi";
import { LocalDateTime } from "@js-joda/core";
import Cookies from "js-cookie";
import {Link} from 'react-router-dom';
import roomApi from "../../../api/roomApi";
const { Option } = Select;

function Contract(props) {
  //api
  //getAll
  const [usersList, setUsersList] = useState([]);
  const [contractList, setContractList] = useState([]);
  const [roomsList, setroomsList] = useState([]);
  const [idSelected, setidSelected] = useState([]);
  const [idSelected_1, setidSelected_1] = useState([]);

  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [rowEdit, setRowEdit] = useState({owner:{userName:""},tenant:{userName:""}});
  const [rowEdit_confirm, setRowEdit_confirm] = useState({});
  const [isModalVisible_1, setIsModalVisible_1] = useState(false);
  const [isModalVisible_2, setIsModalVisible_2] = useState(false);

  const fetchUserList = async () => {
    try {
      const response = await usersApi.getAll();
      console.log("Fetch users iddd successfully: ", response.data);
      setUsersList(response.data);
    } catch (error) {
      console.log("Failed to fetch users list: ", error.response);
    }
  };
  const fetchContractList = async () => {
    try {
      const response = await contractsApi.getAll();
      console.log("Fetch contracts successfully: ", response.data);
      setContractList(response.data);
      setstate(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch contracts list: ", error);
    }
  };
  const fetchRoomList = async () => {
    try {
      const response = await roomApi.getAll();
      console.log("Fetch contracts successfully: ", response.data);
      setroomsList(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch contracts list: ", error);
    }
  };
  useEffect(() => {
    fetchUserList();
    fetchContractList();
    fetchRoomList();
  }, []);
  //form
  const onFinish = (values) => {
    
    const dateTime = new Date();
    const year=LocalDateTime.now();
    // var dt=LocalDateTime.parse("year");
    console.log("<<<Sonamhientai", dateTime.getFullYear());
    const dataCreate = {
      ...values,
      signDate: dateTime.toISOString(),
      year: dateTime.getFullYear(),
      ownerId: Cookies.get("id"),
    };
    console.log("dataCreate", dataCreate);

    const fetchCreateContract = async () => {
      try {
        const response = await contractsApi.createcontracts(dataCreate);
        console.log("Fetch create contract succesfully: ", response);
        setContractList([...contractList, response.data]);
        console.log("DATA: ", response);
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to create contract list: ", error.response);
      }
    };
    fetchCreateContract();
  };
  const fetchUpdateContract = async (edittv) => {
    setIsloadingUpdate(true);
    try {
      const response = await contractsApi.updatecontracts(edittv);
      console.log("Fetch update contract successfully", response);
      console.log("edit data", edittv);
      fetchContractList();
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to update contract", error);
      setIsloadingUpdate(false);
    }
  };
  const onFinish_edit = (values) => {
    var dt = new Date();
   
    console.log("<<",dt)
    const dataUpdate = {
      ...values,
      signDate: dt.toISOString(),
      ownerId:rowEdit.ownerId,
      tenantId:rowEdit.tenantId,
    };
    console.log("dataupdate", dataUpdate);
    const data_update = { id: rowEdit.id, data: dataUpdate };
    fetchUpdateContract(data_update);
  };
  
  const fetchDeleteContract = async (record) => {
    try {
      const response = await contractsApi.deletecontracts(record.id);
      console.log("Delete contract successfully", response);
      setContractList(contractList.filter((item) => item.id !== record.id));
    } catch (error) {
      console.log("Failed to delete contract list", error);
    }
  };
  //select
  function handleChange(value) {
    console.log(`selected user ADMIN ${value}`);
  }
  function handleChange_1(value) {
    console.log(`selected user CLIENT ${value}`);
  }
  function handleChange_room(value) {
    console.log(`selected room ${value}`);
  }
  function cancel(e) {
    console.log(e);
    message.error("Không xóa");
  }
  const columns = [
    {
      title: "Chi tiết hợp đồng",
      dataIndex: "details",
      key: "details",
    },
    {
      title: "Ngày ký hợp đồng",
      dataIndex: "signDate",
      key: "signDate",
      render: (signDate) => <Tag color="cyan">{signDate}</Tag>,
    },
    {
      title: "Ngày kết thúc hợp đồng",
      dataIndex: "tenant",
      key: "tenant",
       render: (tenant) => (
        <>
          {tenant.checkoutDate === null ? (
            <Tag color="#f07728">NULL</Tag>
          ) : (
            <Tag color="#26326c">{tenant.checkoutDate}</Tag>
          )}
        </>
      ),
    },
    {
      title: "Số năm",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Số phòng",
      dataIndex: "numberOfRooms",
      key: "numberOfRooms",
    },
    {
      title: "Số lầu",
      dataIndex: "numberOfStage",
      key: "numberOfStage",
    },
    {
      title: "Khuyến mãi",
      dataIndex: "voucher",
      key: "voucher",
    },
    {
      title: "Chủ trọ",
      dataIndex: "owner",
      key: "owner",
      render: (owner) => <div>{owner.userName}</div>,
    },
    {
      title: "Khách thuê",
      dataIndex: "tenant",
      key: "tenant",
      render: (tenant) => <div>{tenant.userName}</div>,
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteContract(record)}
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

  const showModal_1 = (values) => {
    setIsModalVisible_1(true);
    console.log("values edit:", values);
    setRowEdit(values);
  };
  const showModal_2 = (values) => {
    setIsModalVisible_2(true);
    console.log("values confirm:", values);
    setRowEdit_confirm(values);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
  };

  const handleCancel_1 = () => {
    setIsModalVisible_1(false);
  };
  const handleCancel_2 = () => {
    setIsModalVisible_2(false);
  };
  const [tenantName, settenantName] = useState([]);
  const [state, setstate] = useState([]);
  const onSearch_1 = (value) => {
    console.log("<<VALUE", value);
    if (value === "") {
      setContractList(state);
    } else {
      const fetchContractbyTenantname = async () => {
        try {
          const response = await contractsApi.getContractbytenantName(value);
          console.log(
            "Fetch contract by tenant name successfully: ",
            response.data
          );
          // setIsstateInput(response.data);
          setContractList(response.data);
        } catch (error) {
          console.log("Failed to fetch list: ", error);
        }
      };
      const fetchContractbyOwnername = async () => {
        try {
          const response = await contractsApi.getContractbyownerName(value);
          console.log(
            "Fetch contract by owner name successfully: ",
            response.data
          );
          // setIsstateInput(response.data);
          setContractList(response.data);
        } catch (error) {
          console.log("Failed to fetch list: ", error);
        }
      };
      fetchContractbyOwnername();
      fetchContractbyTenantname();
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
            <Form.Item
              label="Chi tiết hợp đồng"
              name="details"
              className="form-details"
            >
              <Input className="input-details" placeholder={rowEdit.details} />
            </Form.Item>
            <Form.Item
              label="Số phòng"
              name="numberOfRooms"
              className="form-num-room"
            >
              <Input
                className="input-room-contract"
                placeholder={rowEdit.numberOfRooms}
              />
            </Form.Item>
            <Form.Item
              label="Số lầu"
              name="numberOfStage"
              className="form-num-stages"
            >
              <Input
                className="input-stage-contract"
                placeholder={rowEdit.numberOfStage}
              />
            </Form.Item>
            <Form.Item
              label="Khuyến mãi"
              name="voucher"
              className="form-voucher"
            >
              <Input className="input-voucher" placeholder={rowEdit.voucher} />
            </Form.Item>
            <Form.Item label="Chủ trọ" name="ownerId" className="form-owner">
              <Select
                onChange={handleChange}
                className="select-owner"
                style={{ width: 300 }}
                placeholder={rowEdit.owner.userName}
              >
                {usersList.map((ownerid) =>
                  ownerid.roles[0].name === "ROLE_ADMIN" ? (
                    <Select.Option key={ownerid.id} value={ownerid.id}>
                      {ownerid.userName}
                    </Select.Option>
                  ) : (
                    <>Null</>
                  )
                )}
              </Select>
            </Form.Item>
            <Form.Item
              label="Người thuê"
              name="tenantId"
              className="form-tenant"
            >
              <Select
                onChange={handleChange_1}
                className="select-tenant"
                style={{ width: 300 }}
                placeholder={rowEdit.tenant.userName}
              >
                {usersList.map((ownerid) =>
                  ownerid.roles[0].name === "ROLE_USER" ? (
                    <Select.Option key={ownerid.id} value={ownerid.id}>
                      {ownerid.userName}
                    </Select.Option>
                  ) : (
                    <>Null</>
                  )
                )}
              </Select>
            </Form.Item>
            <div className="btbtncreate">
              <Button
                type="primary"
                htmlType="submit"
                style={{ borderRadius: "8px" }}
              >
                CHỈNH SỬA
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

      <div className="containercontainer">
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="rectanglecontract">
          <div style={{ display: "block", width: "100%" }}>
            <div className="btnsearch">
              <div className="topic-left-con">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="contentcontract">QUẢN LÝ HỢP ĐỒNG</div>
              </div>

              <div className="btn-right-con">
                <div className="detailedsearch">
                  <Input.Search
                    placeholder="Tìm kiếm"
                    allowClear
                    onSearch={onSearch_1}
                  />
                </div>
                <button className="detailed-btn-con" onClick={showModal}>
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
                    onFinishFailed={handleCancel}
                  >
                    <Form.Item
                      label="Chi tiết hợp đồng"
                      name="details"
                      className="form-details"
                    >
                      <Input className="input-details" />
                    </Form.Item>
                    <Form.Item
                      label="Số phòng"
                      name="numberOfRooms"
                      className="form-num-room"
                    >
                      <Input className="input-room-contract" />
                    </Form.Item>
                    <Form.Item
                      label="Số lầu"
                      name="numberOfStage"
                      className="form-num-stages"
                    >
                      <Input className="input-stage-contract" />
                    </Form.Item>
                    <Form.Item
                      label="Khuyến mãi"
                      name="voucher"
                      className="form-voucher"
                    >
                      <Input className="input-voucher" />
                    </Form.Item>
                    {/* <Form.Item
                      label="Chủ trọ"
                      name="ownerId"
                      className="form-owner"
                    >
                      <Select
                        onChange={handleChange}
                        className="select-owner"
                        style={{ width: 300 }}
                      >
                        {usersList.map((ownerid) =>
                          ownerid.roles[0].name === "ROLE_ADMIN" ? (
                            <Select.Option key={ownerid.id} value={ownerid.id}>
                              {ownerid.userName}
                            </Select.Option>
                          ) : (
                            <>Null</>
                          )
                        )}
                      </Select>
                    </Form.Item> */}
                    <Form.Item
                      label="Người thuê"
                      name="tenantId"
                      className="form-tenant"
                    >
                      <Select
                        onChange={handleChange_1}
                        className="select-tenant"
                        style={{ width: 300 }}
                      >
                        {usersList.map((ownerid) =>
                          ownerid.roles[0].name === "ROLE_USER" ? (
                            <Select.Option key={ownerid.id} value={ownerid.id}>
                              {ownerid.userName}
                            </Select.Option>
                          ) : (
                            <>Null</>
                          )
                        )}
                      </Select>
                    </Form.Item>
                    <div className="btbtncreate">
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
                paddingBottom: "15px",
              }}
            >
              <Table
                columns={columns}
                bordered
                dataSource={contractList}
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
export default Contract;
