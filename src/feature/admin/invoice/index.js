import React, { useState, useEffect } from "react";
import "./style.css";
import { Images } from "../../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import invoicesApi from "../../../api/invoicesApi";
import {
  faSitemap,
  faPlus,
  faTrash,
  faEdit,
  faDownload,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import Menu_AdminPage from "../../../components/menu_adminpage";
import usersApi from "./../../../api/usersApi";
import Footer from "./../../../components/footer";
import {
  Table,
  Popconfirm,
  message,
  Button,
  Modal,
  Form,
  Select,
  DatePicker,
  Tag,
} from "antd";
import { LocalDateTime } from "@js-joda/core";
import { Link } from "react-router-dom";
const { Option } = Select;
function Invoices() {
  //api
  //getAll
  const [invoicesList, setInvoicesList] = useState([]);

  const [isModalVisible_1, setIsModalVisible_1] = useState(false);
  const [isModalVisible_2, setIsModalVisible_2] = useState(false);
  const [downsingle, setdownsingle] = useState([]);
  const [usersList, setIsusersList] = useState([]);
  const [rowEdit, setRowEdit] = useState([]);
  const fetchInvoicesList = async () => {
    try {
      const response = await invoicesApi.getAll();
      console.log("Fetch invoices successfully: ", response.data);
      setInvoicesList(response.data);
    } catch (error) {
      console.log("Failed to fetch invoices list: ", error);
    }
  };
  const fetchUsersList = async () => {
    try {
      const response = await usersApi.getAll();
      console.log("Fetch getAll users successfully: ", response.data);
      setIsusersList(response.data);
    } catch (error) {
      console.log("Failed to fetch getAll users list: ", error);
    }
  };
  useEffect(() => {
    fetchInvoicesList();
    fetchUsersList();
  }, []);
  //form
  const onFinish = (values) => {
    const dt =new Date();


    const dataCreate = {
      ...values,
      paymentDate:LocalDateTime.now(),
    };
    console.log("dataCreate", dataCreate);

    const fetchCreateInvoices = async () => {
      try {
        const response = await invoicesApi.create(dataCreate);
        console.log("Fetch create invoices successfully: ", response.data);
        console.log("ffdf??f", response.data.electricityWater.room.total);
        // setInvoicesList(response.data);
        fetchInvoicesList();
        setIsModalVisible(false);
      } catch (error) {
        console.log("failed to create invoice list: ", error);
      }
    };
    fetchCreateInvoices();
  };
  //
  const downloadSingleFiles = async (record) => {
    try {
      const data = {
        id: record.id,
      };
      console.log("<<<id", data);
      const urldown = `https://inn-server.herokuapp.com/api/v1/invoices/${data.id}/download/`;
      window.open(urldown, "_blank");
      // setdownsingle(response.data);
    } catch (error) {
      console.log("Failed to download one file", error.response);
    }
  };
  const downloadManyFiles = async (value) => {
    try {
      const response = await invoicesApi.download_many();
      console.log("Download many file successfully", response);
      const urldown = `https://inn-server.herokuapp.com/api/v1/invoices/download/`;
      window.open(urldown, "_blank");
    } catch (error) {
      console.log("Failed to download one file", error.response);
    }
  };
  const fetchDeleteElectricityWater = async (record) => {
    try {
      const response = await invoicesApi.delete(record.id);
      console.log("Delete invoices successfully", response);
      setInvoicesList(invoicesList.filter((item) => item.id !== record.id));
    } catch (error) {
      console.log("Failed to delete invoices list", error);
    }
  };
  //select
  function handleChange(value) {
    console.log(`selected users ${value}`);
  }
  //input_num
  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }

  const columns = [
    {
      title: "N??m k?? h???p ?????ng",
      dataIndex: "contract",
      key: "contract",
      render: (contract) => <div>{contract.year}</div>,
    },
    {
      title: "Chi nh??nh",
      dataIndex: "user",
      key: "user",
      render: (user) => <div>{user.room.branch.description}</div>,
    },
    {
      title: "Ph??ng",
      dataIndex: "contract",
      key: "contract",
      render: (contract) => <div>{contract.tenant.room.roomNo}</div>,
    },
    {
      title: "Kh??ch tr???",
      dataIndex: "user",
      key: "user",
      render: (user) => <div>{user.userName}</div>,
    },
    {
      title: "T???ng ti???n",
      dataIndex: "total",
      key: "total",
    },
    // {
    //   title: "T???ng ti???n ph??ng",
    //   dataIndex: "user",
    //   key: "user",
    //   render: (user) => <div>{user.room.total}</div>,
    // },
    // {
    //   title: "T???ng ti???n ??i???n",
    //   dataIndex: "electricityWater",
    //   key: "electricityWater",
    //   render: (electricityWater) => (
    //     <div>{electricityWater.totalElectricity}</div>
    //   ),
    // },
    // {
    //   title: "T???ng ti???n n?????c",
    //   dataIndex: "electricityWater",
    //   key: "electricityWater",
    //   render: (electricityWater) => <div>{electricityWater.totalWater}</div>,
    // },
    // {
    //   title: "Ng??y t???o h???p ?????ng",
    //   dataIndex: "contract",
    //   key: "contract",
    //   // render: (contract) => <div>{contract.signDate}</div>,
    //   render: (contract) =>
    //     contract.signDate === null ? (
    //       <Tag color="#668595">NULL</Tag>
    //     ) : (
    //       <Tag color="#21363c">{contract.signDate}</Tag>
    //     ),
    // },
    {
      title: "Ng??y thanh to??n",
      dataIndex: "paymentDate",
      key: "paymentDate",
      render: (paymentDate) =>
        paymentDate === null ? (
          <Tag color="#99cfaf">NULL</Tag>
        ) : (
          <Tag color="#91ac57">{paymentDate}</Tag>
        ),
    },
    {
      title: "Ng??y nh???n ph??ng",
      dataIndex: "user",
      key: "user",
      render: (user) =>
        user.checkinDate === null ? (
          <Tag color="#7b3136">NULL</Tag>
        ) : (
          <Tag color="#9580be">{user.checkinDate}</Tag>
        ),
    },
    {
      title: "Ng??y tr??? ph??ng",
      dataIndex: "user",
      key: "user",
      render: (user) =>
        user.checkoutDate === null ? (
          <Tag color="#e56a27">NULL</Tag>
        ) : (
          <Tag color="#cb7582">{user.checkoutDate}</Tag>
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
              showModal_2(record);
            }}
          >
            <Popconfirm
              title="B???N C?? CH???C MU???N T???I H??A ????N N??Y V??? M??Y KH??NG?"
              onConfirm={() => downloadSingleFiles(record)}
              onCancel={cancel}
              okText="C??"
              cancelText="Kh??ng"
            >
              <FontAwesomeIcon icon={faDownload} color="#ffa500" />
            </Popconfirm>
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
    console.log("values down 1 file:", values);
    // setRowDown(values);
  };
  const handleOk_1 = () => {
    setIsModalVisible_1(false);
  };

  const handleCancel_1 = () => {
    setIsModalVisible_1(false);
  };
  return (
    <div>
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
        <div className="rectangleinvoices">
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
              <div className="topic-left-invoice">
                <FontAwesomeIcon icon={faSitemap} size="2x" color="#007c7e" />
                <div className="contentinvoices">QU???N L?? H??A ????N</div>
              </div>
              <div className="topic-right-invoice">
                <div className="btn-right-invoice">
                  <button className="detailed-btn-invoices" onClick={showModal}>
                    TH??M M???I
                  </button>
                  <button
                    className="detailed-btnCSN"
                    onClick={downloadManyFiles}
                  >
                    <div style={{ paddingRight: "10px" }}>
                      <FontAwesomeIcon size="1x" icon={faFileCsv} />
                    </div>
                    XU???T CSV NHI???U
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
                    >
                      <Form.Item
                        label="Kh??ch tr???"
                        name="userName"
                        className="item-us-invoices"
                      >
                        <Select
                          onChange={handleChange}
                          style={{ width: 300 }}
                          className="select-us-invoices"
                        >
                          {usersList.map((ownerid) =>
                            ownerid.roles[0].name === "ROLE_USER" ? (
                              <Select.Option
                                key={ownerid.userName}
                                value={ownerid.userName}
                              >
                                {ownerid.userName}
                              </Select.Option>
                            ) : (
                              <>Null</>
                            )
                          )}
                        </Select>
                      </Form.Item>
                      <div style={{ display: "flex" }}>
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
                dataSource={invoicesList}
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
export default Invoices;
