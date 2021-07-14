import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faPlus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import Menu_AdminPage from "../../../components/menu_adminpage";
import roomApi from "../../../api/roomApi";
import { WarningOutlined } from "@ant-design/icons";
import electricityWaterApi from "../../../api/elctricitywaterApi";
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
  Radio,
  notification,
} from "antd";
import { Link } from "react-router-dom";
import Footer from "./../../../components/footer";
const { Option } = Select;
function ElectricityWaters(props) {
  const [roomList, setRoomList] = useState([]);
  const [electricitywatersList, setElectricitywaterList] = useState([]);

  const [idSelected, setidSelected] = useState([]);
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [rowEdit, setRowEdit] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible_1, setIsModalVisible_1] = useState(false);

  const fetchRoomList = async () => {
    try {
      const response = await roomApi.getAll();
      console.log("Fetch rooms successfully: ", response.data);
      setRoomList(response.data);

      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch rooms list: ", error);
    }
  };
  const fetchElectricitywaterList = async () => {
    try {
      const response = await electricityWaterApi.getAll();
      console.log("Fetch electricities successfully: ", response.data);
      setElectricitywaterList(response.data);
    } catch (error) {
      console.log("Failed to fetch electricities list: ", error);
    }
  };
  useEffect(() => {
    fetchElectricitywaterList();
    fetchRoomList();
  }, []);
  //form
  const onFinish = (values) => {
    const dataCreate = {
      ...values,
    };
    console.log("dataCreate", dataCreate);
    const fetchCreateElectricityWater = async () => {
      try {
        const response = await electricityWaterApi.createelectricitywater(
          dataCreate
        );
        console.log("Fetch create electricity-water succesfully: ", response);
        setElectricitywaterList([...electricitywatersList, response.data]);
        console.log("DATA: ", response);
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to create electricity-water list: ", error);
      }
    };
    fetchCreateElectricityWater();
  };
  const fetchUpdateElectricityWater = async (edittv) => {
    setIsloadingUpdate(true);
    try {
      const response = await electricityWaterApi.updateelectricitywater(edittv);
      console.log("Fetch update electricity-water successfully", response);
      console.log("edit data", edittv);
      fetchElectricitywaterList();
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to update electricity-water", error);
      setIsloadingUpdate(false);
    }
  };
  const onFinish_edit = (values) => {
    console.log("dataupdate", values);
    const data_update = { id: rowEdit.id, data: values };
    fetchUpdateElectricityWater(data_update);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const fetchDeleteElectricityWater = async (record) => {
    try {
      const response = await electricityWaterApi.deleteelectricitywater(
        record.id
      );
      console.log("Delete electricity-water successfully", response);
      setElectricitywaterList(
        electricitywatersList.filter((item) => item.id !== record.id)
      );
    } catch (error) {
      console.log("Failed to delete electricity-water list", error);
    }
  };

  //select
  function handleChange(value) {
    console.log(`selected users ${value}`);
  }

  function cancel(e) {
    console.log(e);
    message.error("Không xóa");
  }
  const columns = [
    {
      title: "Phòng",
      dataIndex: "room",
      key: "room",
      render: (room) => <div>{room.roomNo}</div>,
    },
    {
      title: "Số điện cũ",
      dataIndex: "numElectricOld",
      key: "numElectricOld",
    },
    {
      title: "Số điện mới",
      dataIndex: "numElectricNew",
      key: "numElectricNew",
    },
    {
      title: "Số điện tiêu thụ",
      dataIndex: "numElectricConsump",
      key: "numElectricConsump",
    },
    {
      title: "Số nước cũ",
      dataIndex: "numWaterOld",
      key: "numWaterOld",
    },
    {
      title: "Số nước mới",
      dataIndex: "numWaterNew",
      key: "numWaterNew",
    },
    {
      title: "Số nước tiêu thụ",
      dataIndex: "numElectricConsump",
      key: "numElectricConsump",
    },
    {
      title: "Tháng",
      dataIndex: "month",
      key: "month",
      render: (month) => <Tag color="cyan">{month}</Tag>,
    },
    {
      title: "Giá điện",
      dataIndex: "waterUnitPrice",
      key: "waterUnitPrice",
    },
    {
      title: "Giá nước",
      dataIndex: "electricityUnitPrice",
      key: "electricityUnitPrice",
    },
    {
      title: "Tổng giá điện",
      dataIndex: "totalElectricity",
      key: "totalElectricity",
    },
    {
      title: "Tổng giá nước",
      dataIndex: "totalWater",
      key: "totalWater",
    },
    {
      title: "Kiểm tra",
      dataIndex: "checked",
      key: "checked",

      render: (checked) => (
        <>
          {checked === false ? (
            <Tag color="#31a273">CHƯA THANH TOÁN</Tag>
          ) : (
            <Tag color="#ce560a">ĐÃ THANH TOÁN</Tag>
          )}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteElectricityWater(record)}
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
    console.log("values edit:", values);
    setRowEdit(values);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
  };
  const check = (e) => {
    console.log("<<<", e.target.value);
    e.target.value >= 500 ? (
      <></>
    ) : (
      notification.warning({
        message: `Xin vui lòng nhập lại`,
        icon: <WarningOutlined style={{ color: "#FF0000" }} />,
        placement: "topLeft",
      })
    );
  };
  const handleCancel_1 = () => {
    setIsModalVisible_1(false);
  };
  const handleCancelCreate = () => {
    setIsModalVisible(false);
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
              label="Số điện cũ"
              name="numElectricOld"
              className="form-numElectricOld"
            >
              <Input
                placeholder={rowEdit.numElectricOld}
                className="input-numElectricOld"
              />
            </Form.Item>
            <Form.Item
              label="Số điện mới"
              name="numElectricNew"
              className="form-numElectricNew"
            >
              <Input
                placeholder={rowEdit.numElectricNew}
                className="input-numElectricNew"
              />
            </Form.Item>
            <Form.Item
              label="Số nước cũ"
              name="numWaterOld"
              className="form-numWaterOld"
            >
              <Input
                className="input-numWaterOld"
                placeholder={rowEdit.numWaterOld}
              />
            </Form.Item>
            <Form.Item
              label="Số nước mới"
              name="numWaterNew"
              className="form-numWaterNew"
            >
              <Input
                placeholder={rowEdit.numWaterNew}
                className="input-numWaterNew"
              />
            </Form.Item>
            <Form.Item
              label="Giá điện"
              name="electricityUnitPrice"
              className="form-electricityUnitPrice"
            >
              <Input
                className="input-electricityUnitPrice"
                placeholder={rowEdit.electricityUnitPrice}
                // onChange={(electricityUnitPrice) =>
                //   check(electricityUnitPrice)
                // }
              />
            </Form.Item>
            <Form.Item
              label="Giá nước"
              name="waterUnitPrice"
              className="form-waterUnitPrice"
            >
              <Input
                className="input-waterUnit-Price"
                placeholder={rowEdit.waterUnitPrice}
                // onChange={(waterUnitPrice) => check(waterUnitPrice)}
              />
            </Form.Item>
            <Form.Item label="Tháng" name="month" className="form-month">
              <Select
                style={{ width: 120 }}
                className="select-month"
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
            <Form.Item label="Kiểm tra" name="checked" className="form-checked">
              <Radio.Group
                placeholder={rowEdit.checked}
                className="radio-checked"
              >
                <Radio value="true">True</Radio>
                <Radio value="false">False</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Phòng" name="roomId" className="form-roomid">
              <Select
                onChange={handleChange}
                className="select-roomid"
                style={{ width: 320 }}
              >
                {roomList.map((roomsid) => (
                  <Select.Option key={roomsid.id} value={roomsid.id}>
                    {roomsid.roomNo}
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
        <div className="rectangleelectricwater">
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
              <div className="topic-left-electric">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="contentelectricwater">QUẢN LÝ ĐIỆN NƯỚC</div>
              </div>
              <div className="topic-right-electric">
                <div className="btn-right-elec">
                  <button className="detailed-btn-elec" onClick={showModal}>
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
                        label="Số điện cũ"
                        name="numElectricOld"
                        className="form-numElectricOld"
                      >
                        <Input className="input-numElectricOld" />
                      </Form.Item>
                      <Form.Item
                        label="Số điện mới"
                        name="numElectricNew"
                        className="form-numElectricNew"
                      >
                        <Input className="input-numElectricNew" />
                      </Form.Item>
                      <Form.Item
                        label="Số nước cũ"
                        name="numWaterOld"
                        className="form-numWaterOld"
                      >
                        <Input className="input-numWaterOld" />
                      </Form.Item>
                      <Form.Item
                        label="Số nước mới"
                        name="numWaterNew"
                        className="form-numWaterNew"
                      >
                        <Input className="input-numWaterNew" />
                      </Form.Item>
                      <Form.Item
                        label="Giá điện"
                        name="electricityUnitPrice"
                        className="form-electricityUnitPrice"
                      >
                        <Input
                          className="input-electricityUnitPrice"
                          // onChange={(electricityUnitPrice) =>
                          //   check(electricityUnitPrice)
                          // }
                        />
                      </Form.Item>
                      <Form.Item
                        label="Giá nước"
                        name="waterUnitPrice"
                        className="form-waterUnitPrice"
                      >
                        <Input
                          className="input-waterUnit-Price"
                          // onChange={(waterUnitPrice) => check(waterUnitPrice)}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Tháng"
                        name="month"
                        className="form-month"
                      >
                        <Select
                          style={{ width: 120 }}
                          className="select-month"
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
                      <Form.Item
                        label="Kiểm tra"
                        name="checked"
                        className="form-checked"
                      >
                        <Radio.Group
                          placeholder={rowEdit.checked}
                          className="radio-checked"
                        >
                          <Radio value="true">True</Radio>
                          <Radio value="false">False</Radio>
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item
                        label="Phòng"
                        name="roomId"
                        className="form-roomid"
                      >
                        <Select
                          onChange={handleChange}
                          className="select-roomid"
                          style={{ width: 320 }}
                        >
                          {roomList.map((roomsid) => (
                            <Select.Option key={roomsid.id} value={roomsid.id}>
                              {roomsid.roomNo}
                            </Select.Option>
                          ))}
                        </Select>
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
                dataSource={electricitywatersList}
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
          <Footer/>
        </div>
      </div>
    </div>
  );
}
export default ElectricityWaters;
