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
import Menu_AdminPage from "./../../../components/menu_adminpage";
import facilitiesApi from "./../../../api/facilitiesApi";
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
import branchesApi from "./../../../api/branchesApi";
import { WarningOutlined } from "@ant-design/icons";
import Footer from "./../../../components/footer"
import { Link } from "react-router-dom";
import { text } from "@fortawesome/fontawesome-svg-core";
const { Option } = Select;
function Facilities(props) {
  //api
  //getAll
  const [facilitiesList, setFacilitiesList] = useState([]);
  const [idSelected, setidSelected] = useState([]);
  const [isloadingUpdate, setIsloadingUpdate] = useState(false);
  const [rowEdit, setRowEdit] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible_1, setIsModalVisible_1] = useState(false);

  const fetchfacilitiesList = async () => {
    try {
      const response = await facilitiesApi.getAll();
      console.log("Fetch facilities successfully: ", response.data);
      setFacilitiesList(response.data);
    } catch (error) {
      console.log("Failed to fetch facilities list: ", error.response);
    }
  };
  useEffect(() => {
    fetchfacilitiesList();
  }, []);
  //form
  const onFinish = (values) => {
    const dataCreate = {
      ...values,
      branchIds: idSelected,
    };
    console.log("dataCreate", dataCreate);

    const fetchCreateFacilities = async () => {
      try {
        const response = await facilitiesApi.createfacilities(dataCreate);
        console.log("Fetch facilities succesfully: ", response);
        setFacilitiesList([...facilitiesList, response.data]);
        console.log("DATA: ", response);
        setIsModalVisible(false);
        setIsloadingUpdate(false);
      } catch (error) {
        console.log("failed to create facilities list: ", error);
      }
    };
    fetchCreateFacilities();
  };
  const fetchUpdateFacilities = async (edittv) => {
    // setIsloadingUpdate(true);
    try {
      const response = await facilitiesApi.updatefacilities(edittv);
      console.log("Fetch update facilities successfully", response);
      console.log("edit data", edittv);
      fetchfacilitiesList();
      setIsModalVisible_1(false);
    } catch (error) {
      console.log("Failed to update facilities", error);
      // setIsloadingUpdate(false);
    }
  };
  const onFinish_edit = (values) => {
    const dataUpdate = {
      ...values,
      branchIds: idSelected,
    };
    console.log("dataupdate", dataUpdate);
    const data_update = { id: rowEdit.id, data: dataUpdate };
    fetchUpdateFacilities(data_update);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const fetchDeleteFacilities = async (record) => {
    try {
      const response = await facilitiesApi.deletefacilities(record.id);
      console.log("Delete facilities successfully", response);
      setFacilitiesList(facilitiesList.filter((item) => item.id !== record.id));
    } catch (error) {
      console.log("Failed to delete facilities list", error);
    }
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
  //select
  function handleChange(value) {
    console.log(`selected branches id ${value}`);
    const branchesvalue = [value];
    setidSelected(branchesvalue);
  }
  function cancel(e) {
    console.log(e);
    message.error("Không xóa");
  }
  const columns = [
    {
      title: "Tên vật dụng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Chất lượng",
      dataIndex: "quality",
      key: "quality",
      render: (quality) => (
        <>
          {quality === "NEW" ? (
            <Tag color="#ffcc00">NEW</Tag>
          ) : (
            <Tag color="#45bd04">AVAILABLE</Tag>
          )}
        </>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Đơn giá",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: "Tổng giá",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <Popconfirm
            title="BẠN CÓ CHẮC MUỐN XÓA DỮ LIỆU KHÔNG?"
            onConfirm={() => fetchDeleteFacilities(record)}
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
              label="Tên vật dụng"
              name="name"
              className="form-name-facility"
            >
                <Input
                  placeholder={rowEdit.name}
                  className="input-name-facility"
                />
            </Form.Item>
            <Form.Item
              label="Chất lượng"
              name="quality"
              className="form-quality"
            >
                <Select
                  style={{ width: 320 }}
                  onChange={handleChange}
                  placeholder={rowEdit.quality}
                  className="select-quality"
                >
                  <Option value={1}>New</Option>
                  <Option value={0}>Available</Option>
                </Select>
            </Form.Item>
            <Form.Item
              label="Số lượng"
              name="quantity"
              className="form-quantity"
            >
                <Input
                  placeholder={rowEdit.quantity}
                  className="input-quantity"
                />
            </Form.Item>
            <Form.Item
              label="Đơn giá"
              name="unitPrice"
              className="form-unitPrice"
            >
                <Input
                  className="input-unitPrice"
                  placeholder={rowEdit.unitPrice}
                />
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
        className="boxfacilities"
      >
        <div style={{ height: "100px" }}>
          <Menu_AdminPage />
        </div>
        <div className="rectanglefacilities">
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
              <div className="topic-left-faci">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="contentfacilities">
                  QUẢN LÝ THIẾT BỊ NHÀ TRỌ
                </div>
              </div>
              <div className="topic-right-faci">
                <div className="btn-right-faci">
                  <button className="detailed-btn-faci" onClick={showModal}>
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
                        label="Tên vật dụng"
                        name="name"
                        className="form-name-facility"
                      >
                          <Input className="input-name-facility" />
                      </Form.Item>
                      <Form.Item
                        label="Chất lượng"
                        name="quality"
                        className="form-quality"
                      >
                          <Select
                            style={{ width: 320 }}
                            onChange={handleChange}
                            className="select-quality"
                          >
                            <Option value={1}>NEW</Option>
                            <Option value={0}>AVAILABLE</Option>
                          </Select>
                      </Form.Item>
                      <Form.Item
                        label="Số lượng"
                        name="quantity"
                        className="form-quantity"
                      >
                          <Input className="input-quantity" />
                      </Form.Item>
                      <Form.Item
                        label="Đơn giá"
                        name="unitPrice"
                        className="form-unitPrice"
                      >
                          <Input
                            className="input-unitPrice"
                            />
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
                dataSource={facilitiesList}
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
export default Facilities;
