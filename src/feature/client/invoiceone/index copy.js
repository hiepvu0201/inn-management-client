import React, { useState, useEffect } from "react";
import Menu_client from "./../../../components/menu_client";
import Footer_client from "./../../../components/footer_client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faPrint, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Table,
  Drawer,
  Form,
  Select,
  DatePicker,
  Button,
  Modal,
} from "antd";
import invoicesApi from "./../../../api/invoicesApi";
import usersApi from "./../../../api/usersApi";
import Cookies from "js-cookie";
import { LocalDateTime } from "@js-joda/core";
function Invoiceone() {
  const [stateinvoice, setstateinvoice] = useState([]);
  const [userList, setuserList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel=()=>{
      setIsModalVisible(false)
  }
  const fetchhgetUsers = async () => {
    try {
      const id_user = Cookies.get("id");
      const response = await usersApi.getuserid(id_user);
      console.log("Fetch get users id successfully: ", response.data);
      setuserList(response.data);
    } catch (error) {
      console.log("Failed to create invoices list: ", error);
    }
  };
  const fetchgetInvoicebyid = async (value) => {
    try {
      //    const id_user = Cookies.get("id");
      const response = await invoicesApi.getid(value);
      console.log("Fetch get users id successfully: ", response.data);
      setstateinvoice(response.data);
    //   setfakestate(response.data)
    } catch (error) {
      console.log("Failed to get invoices list: ", error);
    }
  };
  useEffect(() => {
    fetchhgetUsers();
    // fetchgetInvoicebyid();
  }, []);

  const [fakestate, setfakestate] = useState([]);

 const fetchhgetInvoicebyUsername = async (values) => {
   try {
     const response = await invoicesApi.create(values);
     console.log("Fetch invoices successfully: ", response.data);
     setfakestate(response.data);
     fetchgetInvoicebyid(response.data.id)
     setIsModalVisible(false);
     console.log("<<", stateinvoice);
   } catch (error) {
     console.log("Failed to create invoices list: ", error);
   }
 };
  const onFinish = (values) => {
     const dt = new Date();

     const datacreate = {
       ...values,
    //    userName: userList.userName,
       paymentDate: dt.toISOString(),
     };
     console.log("<<<data", datacreate);

    fetchhgetInvoicebyUsername(values);
  };
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: "Năm ký hợp đồng",
      dataIndex: "contract",
      key: "contract",
      render: (contract) => <div>{contract.year}</div>,
    },
    {
      title: "Chi nhánh",
      dataIndex: "user",
      key: "user",
      render: (user) => <div>{user.room.branch.location}</div>,
    },
    {
      title: "Phòng",
      dataIndex: "contract",
      key: "contract",
      render: (contract) => <div>{contract.tenant.room.roomNo}</div>,
    },
    {
      title: "Khách trọ",
      dataIndex: "user",
      key: "user",
      render: (user) => <div>{user.userName}</div>,
    },
    {
      title: "Tổng tiền",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Ngày tạo",
      dataIndex: "contract",
      key: "contract",
      render: (contract) => <div>{contract.signDate}</div>,
    },
    {
      title: "Ngày thanh toán",
      dataIndex: "paymentDate",
      key: "paymentDate",
    },
    {
      title: "Ngày nhận phòng",
      dataIndex: "user",
      key: "user",
      render: (user) => <div>{user.checkinDate}</div>,
    },
    {
      title: "Ngày trả phòng",
      dataIndex: "user",
      key: "user",
      render: (user) => <div>{user.checkoutDate}</div>,
    },
  ];
  return (
    <div>
      <Modal
        title={
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon icon={faPlus} size="1x" color="#007c7e" />{" "}
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
        onOk={onFinish}
        // onCancel={handleCancel}
        visible={isModalVisible}
        okText="THÊM MỚI"
        cancelText="HỦY BỎ"
        footer={null}
      >
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Khách trọ" name="userName">
            <Select placeholder={userList.userName}>
              <Select.Option key={userList.userName} value={userList.userName}>
                {userList.userName}
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Khách trọ" name="paymentDate">
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
          <div style={{ display: "flex" }}>
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
      <div
        style={{
          width: "100%",
          height: "140vh",
          backgroundColor: "#f2f6fa",
          paddingBottom: "20px",
        }}
      >
        <div style={{ height: "120px" }}>
          <Menu_client />
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            textAlign: "center",
            fontFamily: "PT Sans, sans-serif",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          {" "}
          HÓA ĐƠN CHI TIẾT{" "}
        </div>
        <div
          style={{
            width: "100%",
            paddingLeft: "140px",
            display: "flex",
            paddingTop: "10px",
          }}
        >
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            paddingTop: "30px",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "auto",
              backgroundColor: "white",
              display: "block",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#e3cff7",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "auto",
                  textAlign: "left",
                  paddingLeft: "20px",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  display: "block",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "auto",
                    textAlign: "left",
                    paddingLeft: "20px",
                    paddingTop: "5px",
                    paddingBottom: "15px",
                    display: "flex",
                  }}
                >
                  <FontAwesomeIcon icon={faCcMastercard} size="2x" />
                  <div
                    style={{
                      fontSize: "35px",
                      fontFamily: "PT Sans, sans-serif",
                      paddingLeft: "10px",
                      paddingTop: "5px",
                    }}
                  >
                    HÓA ĐƠN CỦA USER 5
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "50%",
                  height: "auto",
                  textAlign: "right",
                  display: "block",
                  paddingRight: "20px",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    textAlign: "right",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                    }}
                  >
                    <div style={{ width: "70%" }}>
                      <FontAwesomeIcon icon={faPrint} size="2x" />
                    </div>
                    <div
                      style={{
                        fontSize: "35px",
                        fontFamily: "PT Sans, sans-serif",
                        width: "30%",
                      }}
                    >
                      Hóa đơn số 1{" "}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "25px",
                    fontFamily: "PT Sans, sans-serif",
                    width: "50%",
                    float: "right",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                  }}
                >
                  Ngày: 24/11/2021
                </div>
              </div>
            </div>

            <div style={{ width: "100%", height: "auto", borderRadius: "8px" }}>
              <Row style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                <Col
                  lg={12}
                  md={24}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      height: "auto",
                      borderRadius: "8px",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "20px",
                        fontFamily: "PT Sans, sans-serif",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        fontWeight: "bold",
                        backgroundColor: "#5bc0de",
                        borderRadius: "8px",
                        color: "white",
                      }}
                    >
                      THÔNG TIN KHÁCH HÀNG
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                          paddingLeft: "25px",
                        }}
                      >
                        Username:
                      </div>
                      <div
                        style={{
                          width: "70%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                        }}
                      >
                        {fakestate.user.userName}
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        paddingTop: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                          paddingLeft: "25px",
                        }}
                      >
                        Email:
                      </div>
                      <div
                        style={{
                          width: "70%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                        }}
                      >
                        {fakestate.user.email}
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        paddingTop: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                          paddingLeft: "25px",
                        }}
                      >
                        Họ và tên:
                      </div>
                      <div
                        style={{
                          width: "70%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                        }}
                      >
                        {fakestate.user.fullName}
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        paddingTop: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                          paddingLeft: "25px",
                        }}
                      >
                        Nghề nghiệp:
                      </div>
                      <div
                        style={{
                          width: "70%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                        }}
                      >
                        {fakestate.user.job}
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        paddingTop: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                          paddingLeft: "25px",
                        }}
                      >
                        Ngày checkin:
                      </div>
                      <div
                        style={{
                          width: "70%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                        }}
                      >
                        {fakestate.user.checkinDate}
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        paddingTop: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                          paddingLeft: "25px",
                        }}
                      >
                        Số phòng:
                      </div>
                      <div
                        style={{
                          width: "70%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                        }}
                      >
                        {fakestate.user.room.roomNo}
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        paddingTop: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                          paddingLeft: "25px",
                        }}
                      >
                        Loại phòng:
                      </div>
                      <div
                        style={{
                          width: "70%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                        }}
                      >
                        {fakestate.user.room.roomType}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={12}
                  md={24}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      height: "auto",
                      borderRadius: "8px",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "20px",
                        fontFamily: "PT Sans, sans-serif",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        fontWeight: "bold",
                        backgroundColor: "#48dc74",
                        color: "white",
                        borderRadius: "8px",
                      }}
                    >
                      THÔNG TIN PHÍA NHÀ TRỌ
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        paddingTop: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                          paddingLeft: "25px",
                        }}
                      >
                        Tên hợp đồng:
                      </div>
                      <div
                        style={{
                          width: "70%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                        }}
                      >
                        {fakestate.contract.details}
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        paddingTop: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                          paddingLeft: "25px",
                        }}
                      >
                        Chủ trọ:
                      </div>
                      <div
                        style={{
                          width: "70%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                        }}
                      >
                        {fakestate.contract.owner.userName}
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        paddingTop: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                          paddingLeft: "25px",
                        }}
                      >
                        Ngày ký hợp đồng:
                      </div>

                      <div
                        style={{
                          width: "70%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                        }}
                      >
                        {fakestate.contract.signDate}
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        paddingTop: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                          paddingLeft: "25px",
                        }}
                      >
                        Năm:
                      </div>

                      <div
                        style={{
                          width: "70%",
                          height: "auto",
                          fontSize: "20px",
                          fontFamily: "PT Sans, sans-serif",
                          textAlign: "left",
                        }}
                      >
                        {fakestate.contract.year}
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: "20px",
                        fontFamily: "PT Sans, sans-serif",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        textAlign: "left",
                        paddingLeft: "30px",
                      }}
                    >
                      email
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontFamily: "PT Sans, sans-serif",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        textAlign: "left",
                        paddingLeft: "30px",
                      }}
                    >
                      fullName
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontFamily: "PT Sans, sans-serif",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        textAlign: "left",
                        paddingLeft: "30px",
                      }}
                    >
                      sinh viên
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontFamily: "PT Sans, sans-serif",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        textAlign: "left",
                        paddingLeft: "30px",
                      }}
                    >
                      số điện thoại
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontFamily: "PT Sans, sans-serif",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        textAlign: "left",
                        paddingLeft: "30px",
                      }}
                    >
                      địa chỉ
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              style={{
                width: "98%",
                paddingLeft: "40px",
                paddingRight: "10px",
                paddingBottom: "10px",
              }}
            >
              <Table
                columns={columns}
                // dataSource={stateinvoice}
                bordered
                rowkey="id"
              />
              ;
            </div>
            <div
              style={{ width: "80%", height: "auto", display: "right" }}
            ></div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "10px", margignBottom: "130px" }}>
        <Footer_client />
      </div>
    </div>
  );
}

export default Invoiceone;
