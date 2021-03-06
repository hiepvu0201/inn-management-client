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
  const [rowEdit, setRowEdit] = useState({room:{roomNo:""}});
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
    message.error("Kh??ng x??a");
  }
  const columns = [
    {
      title: "Ph??ng",
      dataIndex: "room",
      key: "room",
      render: (room) => <div>{room.roomNo}</div>,
    },
    {
      title: "S??? ??i???n c??",
      dataIndex: "numElectricOld",
      key: "numElectricOld",
    },
    {
      title: "S??? ??i???n m???i",
      dataIndex: "numElectricNew",
      key: "numElectricNew",
    },
    {
      title: "S??? ??i???n ti??u th???",
      dataIndex: "numElectricConsump",
      key: "numElectricConsump",
    },
    {
      title: "S??? n?????c c??",
      dataIndex: "numWaterOld",
      key: "numWaterOld",
    },
    {
      title: "S??? n?????c m???i",
      dataIndex: "numWaterNew",
      key: "numWaterNew",
    },
    {
      title: "S??? n?????c ti??u th???",
      dataIndex: "numElectricConsump",
      key: "numElectricConsump",
    },
    {
      title: "Th??ng",
      dataIndex: "month",
      key: "month",
      render: (month) => <Tag color="cyan">{month}</Tag>,
    },
    {
      title: "Gi?? ??i???n",
      dataIndex: "waterUnitPrice",
      key: "waterUnitPrice",
    },
    {
      title: "Gi?? n?????c",
      dataIndex: "electricityUnitPrice",
      key: "electricityUnitPrice",
    },
    {
      title: "T???ng gi?? ??i???n",
      dataIndex: "totalElectricity",
      key: "totalElectricity",
    },
    {
      title: "T???ng gi?? n?????c",
      dataIndex: "totalWater",
      key: "totalWater",
    },
    {
      title: "Ki???m tra",
      dataIndex: "checked",
      key: "checked",

      render: (checked) => (
        <>
          {checked === false ? (
            <Tag color="#31a273">CH??A THANH TO??N</Tag>
          ) : (
            <Tag color="#ce560a">???? THANH TO??N</Tag>
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
            title="B???N C?? CH???C MU???N X??A D??? LI???U KH??NG?"
            onConfirm={() => fetchDeleteElectricityWater(record)}
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
        message: `Xin vui l??ng nh???p l???i`,
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
            <Form.Item
              label="S??? ??i???n c??"
              name="numElectricOld"
              className="form-numElectricOld"
            >
              <Input
                placeholder={rowEdit.numElectricOld}
                className="input-numElectricOld"
              />
            </Form.Item>
            <Form.Item
              label="S??? ??i???n m???i"
              name="numElectricNew"
              className="form-numElectricNew"
            >
              <Input
                placeholder={rowEdit.numElectricNew}
                className="input-numElectricNew"
              />
            </Form.Item>
            <Form.Item
              label="S??? n?????c c??"
              name="numWaterOld"
              className="form-numWaterOld"
            >
              <Input
                className="input-numWaterOld"
                placeholder={rowEdit.numWaterOld}
              />
            </Form.Item>
            <Form.Item
              label="S??? n?????c m???i"
              name="numWaterNew"
              className="form-numWaterNew"
            >
              <Input
                placeholder={rowEdit.numWaterNew}
                className="input-numWaterNew"
              />
            </Form.Item>
            <Form.Item
              label="Gi?? ??i???n"
              name="electricityUnitPrice"
              className="form-electricityUnitPrice"
            >
              <Input
                className="input-electricityUnitPrice"
                placeholder={rowEdit.electricityUnitPrice}
              />
            </Form.Item>
            <Form.Item
              label="Gi?? n?????c"
              name="waterUnitPrice"
              className="form-waterUnitPrice"
            >
              <Input
                className="input-waterUnit-Price"
                placeholder={rowEdit.waterUnitPrice}
              />
            </Form.Item>
            <Form.Item label="Th??ng" name="month" className="form-month">
              <Select
                style={{ width: 300 }}
                className="select-month"
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
            <Form.Item label="Ki???m tra" name="checked" className="form-checked">
              <Radio.Group
                placeholder={rowEdit.checked}
                className="radio-checked"
              >
                <Radio value="true">True</Radio>
                <Radio value="false">False</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Ph??ng" name="roomId" className="form-roomid">
              <Select
                onChange={handleChange}
                className="select-roomid"
                style={{ width: 300 }}
                placeholder={rowEdit.room.roomNo}
              >
                {roomList.map((roomsid) => (
                  <Select.Option key={roomsid.id} value={roomsid.id}>
                    {roomsid.roomNo}
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
                <div className="contentelectricwater">QU???N L?? ??I???N N?????C</div>
              </div>
              <div className="topic-right-electric">
                <div className="btn-right-elec">
                  <button className="detailed-btn-elec" onClick={showModal}>
                    TH??M M???I
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
                        label="S??? ??i???n c??"
                        name="numElectricOld"
                        className="form-numElectricOld"
                      >
                        <Input className="input-numElectricOld" />
                      </Form.Item>
                      <Form.Item
                        label="S??? ??i???n m???i"
                        name="numElectricNew"
                        className="form-numElectricNew"
                      >
                        <Input className="input-numElectricNew" />
                      </Form.Item>
                      <Form.Item
                        label="S??? n?????c c??"
                        name="numWaterOld"
                        className="form-numWaterOld"
                      >
                        <Input className="input-numWaterOld" />
                      </Form.Item>
                      <Form.Item
                        label="S??? n?????c m???i"
                        name="numWaterNew"
                        className="form-numWaterNew"
                      >
                        <Input className="input-numWaterNew" />
                      </Form.Item>
                      <Form.Item
                        label="Gi?? ??i???n"
                        name="electricityUnitPrice"
                        className="form-electricityUnitPrice"
                      >
                        <Input
                          className="input-electricityUnitPrice"
                        />
                      </Form.Item>
                      <Form.Item
                        label="Gi?? n?????c"
                        name="waterUnitPrice"
                        className="form-waterUnitPrice"
                      >
                        <Input
                          className="input-waterUnit-Price"
                        />
                      </Form.Item>
                      <Form.Item
                        label="Th??ng"
                        name="month"
                        className="form-month"
                      >
                        <Select
                          style={{ width: 300 }}
                          className="select-month"
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
                      <Form.Item
                        label="Ki???m tra"
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
                        label="Ph??ng"
                        name="roomId"
                        className="form-roomid"
                      >
                        <Select
                          onChange={handleChange}
                          className="select-roomid"
                          style={{ width: 300 }}
                        >
                          {roomList.map((roomsid) => (
                            <Select.Option key={roomsid.id} value={roomsid.id}>
                              {roomsid.roomNo}
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
                          TH??M M???I{" "}
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
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default ElectricityWaters;
