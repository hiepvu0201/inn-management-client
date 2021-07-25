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
} from "@fortawesome/free-solid-svg-icons";
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
import Footer from "./../../../components/footer";
import floorApi from "./../../../api/floorApi";
import branchesApi from "./../../../api/branchesApi";
import { Link } from "react-router-dom";

function Floor(props) {
  // loading state
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  //api
  //getAll
  const [floorList, setFloorList] = useState([]);
  const [rowEdit, setRowedit] = useState({});
  const [branchesList, setbranchesList] = useState([]);
  const [currentState, setcurrentState] = useState([]);
  const fetchFloorList = async () => {
    try {
      const response = await floorApi.getAll();
      console.log("Fetch floor successfully: ", response.data);
      setFloorList(response.data);
      setcurrentState(response.data);
      setIsloadingUpdate(false);
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to fetch floor list: ", error);
    }
  };
  const fetchBranchesList = async () => {
    try {
      const response = await branchesApi.getAll();
      console.log("Fetch branches successfully: ", response.data);
      setbranchesList(response.data);
    } catch (error) {
      console.log("Failed to fetch branches list: ", error);
    }
  };
  useEffect(() => {
    fetchFloorList();
    fetchBranchesList();
  }, []);
  //delete
  const fetchDeleteFloor = async (record) => {
    try {
      const response = await floorApi.deleteFloor(record.id);
      console.log("Delete floor successfully", response);
      setFloorList(floorList.filter((item) => item.id !== record.id));
    } catch (error) {
      console.log("Failed to delete floor list", error);
    }
  };

  //form
  const fetchUpdateFloor = async (editv) => {
    setIsloadingUpdate(true);
    try {
      const response = await floorApi.updateFloor(editv);
      console.log("Fetch update floor successfully", response);
      console.log("editv", editv);
      fetchFloorList();
    } catch (error) {
      console.log("failed to update floor", error);
      setIsloadingUpdate(false);
    }
  };
  const onSearch_1 = (value) => {
    console.log("<<VALUE", value);
    if (value === undefined) {
      setFloorList(currentState);
    } else {
      const ChangeLocaiton = async () => {
        try {
          const response = await floorApi.getLocation(value);
          console.log("Fetch FLOOR BY BRANCH successfully: ", response.data);
          // setIsstateInput(response.data);
          setFloorList(response.data);
        } catch (error) {
          console.log("Failed to fetch list: ", error);
        }
      };
      ChangeLocaiton();
    }
  };
  const onFinish = (values) => {
    console.log(values);
    const fetchCreateFloor = async () => {
      try {
        const response = await floorApi.createFloor(values);
        console.log("Fetch create floor successfully: ", response);
        setFloorList([...floorList, response.data]);
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to fetch create floor list: ", error);
      }
    };
    fetchCreateFloor();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //form edit
  const onFinish_edit = (values) => {
    console.log("Success", values);
    const dataupdate = { id: rowEdit.id, data: values };
    fetchUpdateFloor(dataupdate);
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
      title: "Lầu",
      dataIndex: "numberOfFloors",
      key: "numberOfFloors",
    },
    {
      title: "Chi nhánh",
      dataIndex: "branch",
      key: "branch",
      render: (branch) => <div>{branch.description}</div>,
    },
    {
      title: "Vị trí chi nhánh",
      dataIndex: "branch",
      key: "branch",
      render: (branch) => <div>{branch.location}</div>,
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteFloor(record)}
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
  const handleCance_1 = () => {
    setIsModalVisible_1(false);
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
              label="Số lầu"
              name="numberOfFloors"
              className="roles-us2"
            >
              <Input
                placeholder={rowEdit.numberOfFloors}
                className="input-flo"
              />
            </Form.Item>
            <Form.Item label="Chi nhánh" name="branchId" className="roles-us2">
              <Select style={{width:295,marginLeft:"15px"}}>
                {branchesList.map((branchid) => (
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
              <div className="topic-left-flo">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="content">QUẢN LÝ LẦU</div>
              </div>
              <div className="btn-right-flo">
                <div className="detailed-select-flo">
                  <Select
                    onChange={onSearch_1}
                    style={{ width: 220 }}
                    allowClear
                  >
                    {branchesList.map((branchid) => (
                      <Select.Option
                        key={branchid.location}
                        value={branchid.location}
                      >
                        {branchid.description}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
                <button className="detailed-btn-flo" onClick={showModal}>
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
                      label="Lầu"
                      name="numberOfFloors"
                      className="roles-us2"
                    >
                      <Input className="input-flo" />
                    </Form.Item>
                    <Form.Item
                      label="Chi nhánh"
                      name="branchId"
                      className="roles-us2"
                    >
                      <Select style={{width:300}}>
                        {branchesList.map((branchid) => (
                          <Select.Option key={branchid.id} value={branchid.id}>
                            {branchid.description}
                          </Select.Option>
                        ))}
                      </Select>
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
                dataSource={floorList}
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
export default Floor;
