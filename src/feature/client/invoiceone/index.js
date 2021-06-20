import React, { useState, useEffect } from "react";
import Menu_client from "./../../../components/menu_client";
import Footer from "./../../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { faPrint, faPlus, faEquals } from "@fortawesome/free-solid-svg-icons";
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
  Tag,
  Popconfirm,
  message,
} from "antd";
import invoicesApi from "./../../../api/invoicesApi";
import usersApi from "./../../../api/usersApi";
import Cookies from "js-cookie";
import { LocalDateTime } from "@js-joda/core";
import "./style.css";
function Invoiceone() {
  const [state, setstate] = useState(false);
  const [stateinvoice, setstateinvoice] = useState([]);
  const [userList, setuserList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
      setstate(true);
      //   setfakestate(response.data)
    } catch (error) {
      console.log("Failed to get invoices list: ", error);
    }
  };
  useEffect(() => {
    fetchhgetUsers();
    // fetchgetInvoicebyid();
  }, []);
  function sum(a, b, c, d, e) {
    const rs = a + b + c + d + e;
    return rs;
  }
  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }
  const [fakestate, setfakestate] = useState([]);

  const fetchhgetInvoicebyUsername = async (values) => {
    try {
      const response = await invoicesApi.create(values);
      console.log("Fetch invoices successfully: ", response.data);
      setfakestate(response.data);
      fetchgetInvoicebyid(response.data.id);
      setIsModalVisible(false);
      console.log("<<", stateinvoice);
    } catch (error) {
      console.log("Failed to create invoices list: ", error);
    }
  };
  const onFinish = (values) => {
    const dt = new Date();

    const datacreate = {
      // ...values,
      userName: userList.userName,
      paymentDate: LocalDateTime.now(),
    };
    console.log("<<<data", datacreate);

    fetchhgetInvoicebyUsername(values);
  };

  const downloadSingleFiles = async (value) => {
    try {
      const data = {
        id: fakestate.id,
      };
      console.log("<<<id", data);
      const urldown = `http://localhost:8080/api/v1/invoices/${data.id}/download/`;
      window.open(urldown, "_blank");
      // setdownsingle(response.data);
    } catch (error) {
      console.log("Failed to download one file", error.response);
    }
  };

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
          height: "auto",
          backgroundColor: "#f2f6fa",
          paddingBottom: "15px",
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
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          {" "}
          HÓA ĐƠN CHI TIẾT{" "}
        </div>

        {state === false ? (
          <div>
            <div style={{ paddingBottom: "17vh" }}>
              <div style={{ width: "100%", height: "auto", display: "block" }}>
                <div
                  style={{
                    width: "100%",
                    fontFamily: "PT Sans, sans-serif",
                    fontSize: "15px",
                    fontWeight: "bold",
                    paddingTop: "30px",
                  }}
                >
                  Vui lòng nhấn vào nút Thêm mới hóa đơn
                </div>
              </div>
              <div style={{ width: "100%",display:"flex",justifyContent:"center" }}>
                <div
                  style={{
                    width: "30%",
                    // paddingLeft: "20vw",
                    display: "flex",
                    paddingTop: "25px",
                    justifyContent:"center"
                  }}
                >
                  <Button type="primary" className="btnbtn" onClick={showModal}>
                    Thêm mới hóa đơn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
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
                        HÓA ĐƠN CỦA {fakestate.user.userName}
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
                        <div style={{ width: "60%" }}>
                          <Popconfirm
                            title="BẠN CÓ CHẮC MUỐN TẢI HÓA ĐƠN NÀY VỀ MÁY KHÔNG?"
                            onConfirm={downloadSingleFiles}
                            onCancel={cancel}
                            okText="Có"
                            cancelText="Không"
                          >
                            <FontAwesomeIcon icon={faPrint} size="2x" />
                          </Popconfirm>
                        </div>
                        <div
                          style={{
                            fontSize: "35px",
                            fontFamily: "PT Sans, sans-serif",
                            width: "40%",
                          }}
                        >
                          Hóa đơn số {fakestate.id}{" "}
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
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                        }}
                      >
                        <div style={{ width: "2%" }}>
                          <FontAwesomeIcon icon={faCalendarPlus} size="1x" />
                        </div>
                        <div
                          style={{
                            fontSize: "20px",
                            fontFamily: "PT Sans, sans-serif",
                            width: "98%",
                          }}
                        >
                          {fakestate.createdDate}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                >
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
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "30%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Username:
                          </div>
                          <div
                            style={{
                              width: "30%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.user.userName}
                          </div>
                        </div>
                        {/* Ngày checkin */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "30%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
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
                        {/* Email */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "30%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
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

                        {/* Room_no */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "30%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
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
                          THÔNG TIN HÓA ĐƠN
                        </div>
                        {/* Email */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Hợp đồng:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.contract.details}
                          </div>
                        </div>

                        {/* Tên chủ trọ */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Chủ trọ:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.contract.owner.userName}
                          </div>
                        </div>

                        {/* Signdate */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Ngày ký HĐ:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.contract.signDate}
                          </div>
                        </div>

                        {/* totalelec */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Tổng tiền điện:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.totalElectricity}đ
                          </div>
                        </div>

                        {/* totalwater */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Tổng tiền nước:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.totalWater}đ
                          </div>
                        </div>

                        {/* waterUnitPrice */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Đơn vị giá nước:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.waterUnitPrice}đ
                          </div>
                        </div>

                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Loại phòng:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.roomType}
                          </div>
                        </div>

                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Giá phòng theo giờ đầu:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.priceByFirstHour}đ
                          </div>
                        </div>

                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Giá phòng theo giờ sau:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.priceByNextHour}đ
                          </div>
                        </div>

                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Giá phòng theo ngày:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.priceByDay}đ
                          </div>
                        </div>
                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Giá phòng theo tuần:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.priceByWeek}đ
                          </div>
                        </div>
                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Giá phòng theo tháng:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.priceByMonth}đ
                          </div>
                        </div>
                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Vị trí chi nhánh:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            {fakestate.electricityWater.room.branch.location}
                          </div>
                        </div>
                        {/* roomType */}

                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            paddingTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "40%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Ngày thanh toán:
                          </div>
                          <div
                            style={{
                              width: "60%",
                              height: "auto",
                              fontSize: "20px",
                              fontFamily: "PT Sans, sans-serif",
                              textAlign: "left",
                            }}
                          >
                            <Tag color="#f50">{fakestate.paymentDate}</Tag>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    height: "auto",
                    paddingBottom: "15px",
                    paddingTop: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "95%",
                      height: "auto",
                      backgroundColor: "#f0f3f4",
                      borderRadius: "10px",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: "75%",
                        height: "auto",
                        display: "flex",
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "20%",
                          height: "auto",
                          display: "block",
                          paddingLeft: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "80%",
                            height: "auto",
                            fontSize: "20px",
                            fontFamily: "PT Sans, sans-serif",
                            textAlign: "left",
                          }}
                        >
                          Tổng tiền điện
                        </div>
                        <div
                          style={{
                            width: "80%",
                            height: "auto",
                            fontSize: "20px",
                            fontFamily: "PT Sans, sans-serif",
                            textAlign: "left",
                            paddingTop: "10px",
                          }}
                        >
                          {fakestate.electricityWater.totalElectricity}đ
                        </div>
                      </div>
                      <div
                        style={{
                          width: "6%",
                          height: "auto",
                          display: "block",
                          paddingLeft: "10px",
                          textAlign: "left",
                          paddingTop: "10px",
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} size="2x" />
                      </div>
                      {/* Tổng thứ hai */}
                      <div
                        style={{
                          width: "20%",
                          height: "auto",
                          display: "block",
                          paddingLeft: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "80%",
                            height: "auto",
                            fontSize: "20px",
                            fontFamily: "PT Sans, sans-serif",
                            textAlign: "left",
                          }}
                        >
                          Tổng tiền nước
                        </div>
                        <div
                          style={{
                            width: "80%",
                            height: "auto",
                            fontSize: "20px",
                            fontFamily: "PT Sans, sans-serif",
                            textAlign: "left",
                            paddingTop: "10px",
                          }}
                        >
                          {fakestate.electricityWater.totalWater}đ
                        </div>
                      </div>
                      <div
                        style={{
                          width: "6%",
                          height: "auto",
                          display: "block",
                          paddingLeft: "10px",
                          textAlign: "left",
                          paddingTop: "10px",
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} size="2x" />
                      </div>
                      {/* Tổng thứ ba */}
                      <div
                        style={{
                          width: "20%",
                          height: "auto",
                          display: "block",
                          paddingLeft: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "80%",
                            height: "auto",
                            fontSize: "20px",
                            fontFamily: "PT Sans, sans-serif",
                            textAlign: "left",
                          }}
                        >
                          Tổng tiền phòng
                        </div>
                        <div
                          style={{
                            width: "80%",
                            height: "auto",
                            fontSize: "20px",
                            fontFamily: "PT Sans, sans-serif",
                            textAlign: "left",
                            paddingTop: "10px",
                          }}
                        >
                          {sum(
                            fakestate.user.room.priceByFirstHour,
                            fakestate.user.room.priceByNextHour,
                            fakestate.user.room.priceByDay,
                            fakestate.user.room.priceByWeek,
                            fakestate.user.room.priceByMonth
                          )}
                          đ
                        </div>
                      </div>
                      <div
                        style={{
                          width: "19%",
                          height: "auto",
                          display: "block",
                          paddingLeft: "10px",
                          textAlign: "right",
                          paddingTop: "10px",
                        }}
                      >
                        <FontAwesomeIcon icon={faEquals} size="2x" />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "25%",
                        height: "auto",
                        backgroundColor: "#2d353c",
                        borderRadius: "8px",
                      }}
                    >
                      {" "}
                      {/* Tổng thứ ba */}
                      <div
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          paddingLeft: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "auto",
                            fontSize: "20px",
                            fontFamily: "PT Sans, sans-serif",
                            textAlign: "left",
                            color: "#efefef",
                            paddingTop: "10px",
                            paddingLeft: "10px",
                          }}
                        >
                          Tổng tiền
                        </div>
                        <div
                          style={{
                            width: "40%",
                            height: "auto",
                            fontSize: "25px",
                            fontFamily: "PT Sans, sans-serif",
                            paddingTop: "10px",
                            float: "right",
                            color: "white",
                          }}
                        >
                          {fakestate.total}đ
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Invoiceone;
